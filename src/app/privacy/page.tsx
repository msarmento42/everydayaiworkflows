export const metadata = {
  title: 'Privacy Policy - Everyday AI Workflows',
  description: 'Privacy Policy for Everyday AI Workflows — how we handle data, cookies, advertising, and your rights.',
};

export default function Privacy() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#00d4ff' }}>Privacy Policy</h1>

        <div style={{ lineHeight: '1.8', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1rem' }}>Last updated: June 2026</p>

          <h2 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Information We Collect</h2>
          <p style={{ marginBottom: '1rem' }}>
            Everyday AI Workflows does not require registration or account creation. We do not collect names,
            email addresses, passwords, payment details, or any other personal information simply by visiting
            this website. If you choose to subscribe to our newsletter via the sign-up form on blog posts,
            your email address is used solely to send weekly AI workflow tips and is never sold or shared with
            third parties.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            We do not store passwords — there is no login system on this site. The only server-side data we
            may retain are standard web server access logs (IP address, browser type, referring URL, and page
            visited) which are kept for up to 30 days for security and diagnostic purposes only.
          </p>

          <h2 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Cookies</h2>
          <p style={{ marginBottom: '1rem' }}>
            This site itself does not set first-party tracking cookies. However, third-party services embedded
            on this site (Google AdSense and any affiliate partner links) may set their own cookies on your
            device. These cookies allow those services to remember your preferences and serve you relevant
            advertisements or track referral activity.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            You can control or disable cookies through your browser settings. Disabling cookies may affect
            the functionality of third-party embedded content but will not prevent you from reading any
            content on this site.
          </p>

          <h2 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Third-Party Advertising (Google AdSense)</h2>
          <p style={{ marginBottom: '1rem' }}>
            We use <strong style={{ color: '#fff' }}>Google AdSense</strong> to display advertisements on
            this website. Google AdSense uses cookies and device identifiers to serve ads that are relevant
            to your interests based on your visits to this and other websites across the internet. This is
            known as interest-based or personalized advertising.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your
            browsing history. You can opt out of personalized advertising by visiting{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00d4ff' }}
            >
              Google&apos;s Ads Settings
            </a>{' '}
            or by visiting{' '}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00d4ff' }}
            >
              AboutAds.info
            </a>
            . For more information on how Google uses data from sites that use its services, see{' '}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00d4ff' }}
            >
              Google&apos;s Privacy &amp; Terms
            </a>
            .
          </p>

          <h2 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Analytics</h2>
          <p style={{ marginBottom: '1rem' }}>
            This website does not currently use Google Analytics or any other third-party analytics platform.
            Basic traffic metrics (page views and referral sources) may be reviewed through our hosting
            provider&apos;s built-in dashboard. No personally identifiable information is included in these
            aggregate statistics.
          </p>

          <h2 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Affiliate Links</h2>
          <p style={{ marginBottom: '1rem' }}>
            Some links on this site are affiliate links. If you click an affiliate link and make a purchase,
            we may earn a commission at no additional cost to you. Affiliate partners may set their own
            cookies to track referral activity. We only recommend tools we genuinely believe are useful.
          </p>

          <h2 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Your Rights</h2>
          <p style={{ marginBottom: '1rem' }}>
            You have the right to opt out of personalized advertising served by Google at any time via{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00d4ff' }}
            >
              Google&apos;s Ads Settings
            </a>
            . If you have subscribed to our newsletter and wish to unsubscribe, you can do so at any time
            using the unsubscribe link included in every email. If you are based in the EU and have any
            questions about your data rights under GDPR, please contact us directly.
          </p>

          <h2 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Changes to This Policy</h2>
          <p style={{ marginBottom: '1rem' }}>
            We may update this Privacy Policy from time to time. Any changes will be reflected on this page
            with an updated &quot;Last updated&quot; date. We encourage you to review this policy periodically.
          </p>

          <h2 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Contact Us</h2>
          <p style={{ marginBottom: '1rem' }}>
            If you have any questions about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:everydayaiworkflows@gmail.com" style={{ color: '#00d4ff' }}>
              everydayaiworkflows@gmail.com
            </a>
          </p>
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #374151' }}>
          <a href="/" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
