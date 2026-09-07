import "./globals.css";
import { SITE } from "@/lib/config";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata = {
  title: {
    default: `${SITE.COMPANY_NAME} | Sports, Swimming & More in Kilifi`,
    template: `%s | ${SITE.COMPANY_NAME}`,
  },
  description: `Shop sports goods, swimming essentials, Ex-UK handbags, tote bags and children's toys at ${SITE.COMPANY_NAME} in Kilifi Town.`,
  keywords: [
    "sports shop Kilifi",
    "sports goods Kilifi",
    "footballs Kilifi",
    "basketballs Kilifi",
    "rackets Kilifi",
    "swimming goggles Kilifi",
    "swimming gear Kilifi",
    "swimsuits Kilifi",
    "handbags Kilifi",
    "tote bags Kilifi",
    "children's toys Kilifi",
    "Ex-UK shop Kilifi",
    "Kilifi Town shop",
    "sports equipment Kenya",
    "swimming accessories Kenya",
  ],
  openGraph: {
    title: `${SITE.COMPANY_NAME} | Sports, Swimming & More in Kilifi`,
    description: `Shop sports goods, swimming essentials, Ex-UK handbags, tote bags and children's toys at ${SITE.COMPANY_NAME} in Kilifi Town.`,
    type: "website",
    locale: "en_KE",
    siteName: SITE.COMPANY_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.COMPANY_NAME} | Sports, Swimming & More in Kilifi`,
    description: `Shop sports goods, swimming essentials, Ex-UK handbags, tote bags and children's toys at ${SITE.COMPANY_NAME} in Kilifi Town.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0A1628" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: SITE.COMPANY_NAME,
              description: `Shop sports goods, swimming essentials, Ex-UK handbags, tote bags and children's toys at ${SITE.COMPANY_NAME} in Kilifi Town.`,
              telephone: SITE.PHONE !== "[PHONE NUMBER]" ? SITE.PHONE : undefined,
              email: SITE.EMAIL !== "[EMAIL ADDRESS]" ? SITE.EMAIL : undefined,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Along Absa Bank Road",
                addressLocality: "Kilifi Town",
                addressRegion: "Kilifi County",
                addressCountry: "KE",
              },
              owner: {
                "@type": "Person",
                name: SITE.OWNER_NAME,
              },
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
