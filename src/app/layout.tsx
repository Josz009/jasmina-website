import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "J&A Business Advisory & Coaching — Financial Advisory, Risk Analysis & Executive Coaching | Houston, TX",
  description: "J&A Business Advisory & Coaching offers expert business acquisition analysis, portfolio risk advisory, and entrepreneur coaching. 20+ years in global finance. AIG Regional Underwriting Specialist. Certified in MER® & Hypnotherapy (AIP). Houston, Texas.",
  keywords: "financial advisor houston, business acquisition analysis, portfolio risk advisory, entrepreneur coaching, trade credit insurance expert, executive coach houston, MER hypnotherapy AIP",
  openGraph: {
    title: "J&A Business Advisory & Coaching — Financial Advisory & Executive Coaching",
    description: "Expert business acquisition analysis, portfolio risk advisory, and entrepreneur coaching. 20+ years in global finance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "J&A Business Advisory & Coaching — Financial Advisory & Executive Coaching",
    description: "Expert business acquisition analysis, portfolio risk advisory, and entrepreneur coaching.",
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
              address: {
                "@type": "PostalAddress",
                addressLocality: "Houston",
                addressRegion: "TX",
                addressCountry: "US",
              },
              telephone: "+13462573921",
              email: "jasminavigil79@gmail.com",
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
      </body>
    </html>
  );
}
