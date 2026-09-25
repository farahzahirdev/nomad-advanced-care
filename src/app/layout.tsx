import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nomadtherapeutics.org"),
  title: "Advanced Mental Health Treatment in Seattle | Nomad Therapeutics",
  description:
    "Clinic-grade care for depression, anxiety, and PTSD. Medication management, Spravato, and TMS at home or in Queen Anne. Book a free consultation.",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  keywords: [
    "Nomad Therapeutics",
    "Spravato Seattle",
    "TMS Seattle",
    "medication management Seattle",
    "treatment-resistant depression",
    "interventional psychiatry Seattle",
  ],
  openGraph: {
    title: "Advanced Mental Health Treatment in Seattle | Nomad Therapeutics",
    description:
      "Evidence-based treatments for depression, anxiety, and PTSD when medication and talk therapy haven't been enough. Most patients start within a week.",
    url: "https://www.nomadtherapeutics.org",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/og.jpg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#124B38",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Script src="https://go.4tms.com/js/form_embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
