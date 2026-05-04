import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — J&A Business Advisory & Coaching",
  description: "Privacy Policy for J&A Business Advisory & Coaching. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Navigation />

      {/* Hero */}
      <section
        style={{
          position: "relative",
          padding: "120px 32px 64px",
          textAlign: "center",
          background: "linear-gradient(160deg, #1a1028 0%, #241838 40%, #1a1028 100%)",
        }}
      >
        <span className="sec-tag sec-tag-gold" style={{ marginBottom: 12 }}>
          legal
        </span>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2.6rem",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: 12,
          }}
        >
          Privacy{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Policy</em>
        </h1>
        <div style={{ width: 40, height: 1, background: "var(--color-gold)", margin: "0 auto 20px" }} />
        <p
          style={{
            fontSize: "0.85rem",
            color: "rgba(250,246,238,0.45)",
            fontFamily: "var(--font-body)",
          }}
        >
          Last updated: May 2026
        </p>
      </section>

      {/* Content */}
      <section
        style={{
          padding: "72px 32px 100px",
          background: "var(--color-off-white)",
        }}
      >
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            lineHeight: 1.9,
            color: "var(--color-body)",
          }}
        >
          <PolicySection title="1. Who We Are">
            <p>
              J&A Business Advisory &amp; Coaching (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website{" "}
              <strong>jabusinesscoaching.com</strong>. This Privacy Policy explains how we collect,
              use, and protect information you provide when you use our website or book a coaching session.
            </p>
            <p>
              For privacy questions, contact us at:{" "}
              <a href="mailto:align@jabusinesscoaching.com" style={{ color: "var(--color-gold)" }}>
                align@jabusinesscoaching.com
              </a>
            </p>
          </PolicySection>

          <PolicySection title="2. Information We Collect">
            <p>We collect the following information when you interact with our website:</p>
            <ul>
              <li>
                <strong>Personal identifiers:</strong> Full name, email address, date of birth, time of birth, and place of birth — collected via the intake questionnaire.
              </li>
              <li>
                <strong>Session responses:</strong> Your answers to pre-session reflection questions and Integral Alignment Assessment scores — submitted through our intake form.
              </li>
              <li>
                <strong>Payment information:</strong> Processed securely by <strong>Square</strong>. We do not store your card details. We receive only a payment confirmation reference.
              </li>
              <li>
                <strong>Communications:</strong> Any messages you send us via email or contact forms.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="3. How We Use Your Information">
            <p>We use the information collected solely for the following purposes:</p>
            <ul>
              <li>To prepare for and deliver your coaching session</li>
              <li>To contact you regarding your booking or session</li>
              <li>To process your payment via Square</li>
              <li>To respond to your inquiries</li>
            </ul>
            <p>
              We do not use your information for marketing purposes without your explicit consent,
              and we do not sell, rent, or trade your personal data to any third party.
            </p>
          </PolicySection>

          <PolicySection title="4. Third-Party Services">
            <p>We use the following third-party services to operate this website:</p>
            <ul>
              <li>
                <strong>Square</strong> — payment processing. Your payment data is governed by{" "}
                <a
                  href="https://squareup.com/us/en/legal/general/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-gold)" }}
                >
                  Square&apos;s Privacy Policy
                </a>.
              </li>
              <li>
                <strong>Web3Forms</strong> — form submission delivery. Intake questionnaire responses are transmitted via Web3Forms to our email. See their{" "}
                <a
                  href="https://web3forms.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-gold)" }}
                >
                  Privacy Policy
                </a>.
              </li>
              <li>
                <strong>Render</strong> — website hosting. Our site is hosted on Render&apos;s infrastructure.
              </li>
              <li>
                <strong>Google Fonts</strong> — font delivery via Google&apos;s CDN.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="5. Data Retention">
            <p>
              Intake questionnaire responses are received by email and retained only as long as
              necessary for the purpose of delivering coaching services. Payment records are
              retained as required by applicable accounting and tax obligations.
            </p>
            <p>
              You may request deletion of your personal data at any time by emailing{" "}
              <a href="mailto:align@jabusinesscoaching.com" style={{ color: "var(--color-gold)" }}>
                align@jabusinesscoaching.com
              </a>.
            </p>
          </PolicySection>

          <PolicySection title="6. Cookies &amp; Tracking">
            <p>
              This website uses browser <strong>localStorage</strong> to temporarily save your
              intake form progress so you do not lose your responses if you navigate away. This
              data is stored on your device only and is cleared upon successful form submission.
            </p>
            <p>
              We do not use advertising cookies, cross-site tracking, or analytics that identify
              you personally.
            </p>
          </PolicySection>

          <PolicySection title="7. Your Rights">
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise any of these rights, email{" "}
              <a href="mailto:align@jabusinesscoaching.com" style={{ color: "var(--color-gold)" }}>
                align@jabusinesscoaching.com
              </a>{" "}
              and we will respond within 30 days.
            </p>
          </PolicySection>

          <PolicySection title="8. Data Security">
            <p>
              We take reasonable measures to protect your information. All data transmitted to
              third-party services (Square, Web3Forms) is encrypted in transit via HTTPS. We do
              not store payment card data on our servers.
            </p>
          </PolicySection>

          <PolicySection title="9. Children&apos;s Privacy">
            <p>
              Our services are intended for adults only. We do not knowingly collect personal
              information from anyone under the age of 18.
            </p>
          </PolicySection>

          <PolicySection title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at
              the top of this page reflects the most recent revision. Continued use of the website
              after changes constitutes acceptance of the updated policy.
            </p>
          </PolicySection>

          <PolicySection title="11. Contact">
            <p>
              For any privacy-related questions or requests:
            </p>
            <p>
              <strong>J&A Business Advisory &amp; Coaching</strong><br />
              <a href="mailto:align@jabusinesscoaching.com" style={{ color: "var(--color-gold)" }}>
                align@jabusinesscoaching.com
              </a>
            </p>
          </PolicySection>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        marginBottom: 48,
        paddingBottom: 48,
        borderBottom: "1px solid rgba(201,149,43,0.1)",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.4rem",
          fontWeight: 500,
          color: "#1a1028",
          marginBottom: 16,
        }}
      >
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {children}
      </div>
    </div>
  );
}
