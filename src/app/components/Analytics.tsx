"use client";

import Script from "next/script";
import { useEffect } from "react";
import { trackAnalyticsEvent } from "../lib/analytics";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
        trackAnalyticsEvent(template ? "template_download" : "product_view", {
          page,
          placement,
          page_intent: pageIntent,
          partner: "gumroad",
          product,
          ...(template ? { template } : {}),
          link_domain: url.hostname.toLowerCase(),
        });
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
      {GA_MEASUREMENT_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
