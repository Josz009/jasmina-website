import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "J&A Business Advisory & Coaching — Financial Advisory, Risk Analysis & Executive Coaching",
  description: "J&A Business Advisory & Coaching offers expert business acquisition analysis, portfolio risk advisory, and entrepreneur coaching. 20+ years in global finance. Certified in MER® & Hypnotherapy (AIP).",
  keywords: "business acquisition analysis, portfolio risk advisory, entrepreneur coaching, ALIGN Method, conscious leadership, Gene Keys, trade credit insurance expert, financial advisor, MER hypnotherapy AIP",
  openGraph: {
    title: "J&A Business Advisory & Coaching — Financial Advisory & Executive Coaching",
    description: "Expert business acquisition analysis, portfolio risk advisory, and entrepreneur coaching. 20+ years in global finance.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "J&A Business Advisory & Coaching" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "J&A Business Advisory & Coaching — Financial Advisory & Executive Coaching",
    description: "Expert business acquisition analysis, portfolio risk advisory, and entrepreneur coaching.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:wght@300;400;500;600;700&family=Quicksand:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "J&A Business Advisory & Coaching",
              description: "Financial advisory, risk analysis, and executive coaching services",
              email: "align@jabusinesscoaching.com",
              founder: {
                "@type": "Person",
                name: "Jasmina Kolekjeska",
                jobTitle: "Financial Advisor & Executive Coach",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,
            document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2094031567820328');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=2094031567820328&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </body>
    </html>
  );
}
