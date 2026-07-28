import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function Analytics() {
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
      <Script id="income-click-tracking" strategy="afterInteractive">
        {`
          document.addEventListener('click', function(event) {
            var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
            if (!link || !window.gtag) return;

            var page = window.location.pathname;
            var placement = link.dataset.analyticsPlacement || 'inline';

            if (link.dataset.templateDownload) {
              window.gtag('event', 'template_download', {
                page: page,
                placement: placement,
                template: link.dataset.templateDownload
              });
              return;
            }

            var url;
            try {
              url = new URL(link.href);
            } catch (_) {
              return;
            }

            var isExternal = url.hostname && url.hostname !== window.location.hostname;
            var href = link.href;
            // Monetization is explicit. A vendor domain by itself is editorial,
            // not evidence that a link is an affiliate relationship.
            var isAffiliate = Boolean(link.dataset.affiliatePartner) || /sponsored|affiliate/i.test(link.rel || '');
            var partner = link.dataset.affiliatePartner || 'external';

            if (/make\\.com/i.test(href)) partner = 'make';
            else if (/notion/i.test(href)) partner = 'notion';
            else if (/jasper/i.test(href)) partner = 'jasper';
            else if (/grammarly/i.test(href)) partner = 'grammarly';
            else if (/surferseo/i.test(href)) partner = 'surferseo';
            else if (/semrush/i.test(href)) partner = 'semrush';
            else if (/writesonic/i.test(href)) partner = 'writesonic';
            else if (/nordvpn|awin1/i.test(href)) partner = 'nordvpn';

            if (isAffiliate || isExternal) {
              window.gtag('event', isAffiliate ? 'affiliate_click' : 'outbound_click', {
                link_url: link.href,
                link_domain: url.hostname,
                affiliate_partner: isAffiliate ? partner : undefined,
                page: page,
                placement: placement,
                partner: isAffiliate ? partner : undefined,
                link_text: (link.textContent || '').trim().slice(0, 100),
                page_location: window.location.href
              });
            }
          });
        `}
      </Script>
    </>
  );
}
