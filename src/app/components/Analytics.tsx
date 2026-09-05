"use client";

import Script from "next/script";
import { useEffect } from "react";
import { trackAnalyticsEvent } from "../lib/analytics";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const VALID_GA_MEASUREMENT_ID = typeof GA_MEASUREMENT_ID === "string" && /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID)
  ? GA_MEASUREMENT_ID
  : undefined;

export default function Analytics() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      const link = target instanceof Element ? target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link) return;

      let url: URL;
      try {
        url = new URL(link.href);
      } catch {
        return;
      }

      const isExternal = Boolean(url.hostname && url.hostname !== window.location.hostname);
      const isGumroadProduct = /methodstackhq\.gumroad\.com\/l\//i.test(link.href);
      const isAffiliate = /sponsored|affiliate/i.test(link.rel || "")
        || /affiliate|make\.com|jasper|grammarly|surferseo|semrush|writesonic|nordvpn/i.test(link.href);
      if (!isAffiliate && !isExternal) return;

      const partner =
        /make\.com/i.test(link.href) ? "make"
          : /notion/i.test(link.href) ? "notion"
            : /jasper/i.test(link.href) ? "jasper"
              : /grammarly/i.test(link.href) ? "grammarly"
                : /surferseo/i.test(link.href) ? "surferseo"
                  : /semrush/i.test(link.href) ? "semrush"
                    : /writesonic/i.test(link.href) ? "writesonic"
                      : /nordvpn|awin1/i.test(link.href) ? "nordvpn"
                        : "external";
      const page = window.location.pathname.toLowerCase() || "/";
      const placement = link.dataset.analyticsPlacement || "content";
      const pageIntent = link.dataset.analyticsIntent
        || (page.includes("tools") ? "commercial" : page.includes("workflows") ? "workflow" : "editorial");

      if (isGumroadProduct) {
        const product = link.dataset.analyticsProduct || url.pathname.split("/").filter(Boolean).pop() || "product";
        const template = link.dataset.analyticsTemplate;
        const productPayload = {
          page,
          placement,
          page_intent: pageIntent,
          partner: "gumroad",
          product,
          ...(template ? { template } : {}),
          link_domain: url.hostname.toLowerCase(),
        };
        trackAnalyticsEvent(template ? "template_download" : "product_view", productPayload);
        if (!template) {
          // This marks the start of the external purchase journey, not a provider-confirmed checkout or sale.
          trackAnalyticsEvent("checkout_start", productPayload);
        }
        return;
      }

      trackAnalyticsEvent(isAffiliate ? "affiliate_click" : "outbound_click", {
        page,
        placement,
        partner,
        page_intent: pageIntent,
        link_domain: url.hostname.toLowerCase(),
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {VALID_GA_MEASUREMENT_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${VALID_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${VALID_GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
