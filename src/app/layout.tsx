import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StudyModal from "@/components/StudyModal";

export const metadata: Metadata = {
  title: "Asesoría Energética León | Ahorra en tu factura de luz y gas",
  description:
    "Reducimos tu factura de luz y gas sin cambiar de compañía. Estudio energético gratuito para hogares y pymes en España. Contacta ahora.",
  keywords:
    "asesoría energética, ahorro energético, factura luz, factura gas, tarifa energía, Sevilla, España, pymes, hogares",
  alternates: {
    canonical: "https://www.energialeon.com",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Asesoría Energética León | Ahorra en tu factura",
    description:
      "Estudio energético gratuito. Te ayudamos a pagar menos en luz y gas.",
    url: "https://www.energialeon.com",
    siteName: "Asesoría Energética León",
    images: [
      {
        url: "https://www.energialeon.com/logoenergialeonlargo.svg",
        width: 1200,
        height: 630,
        alt: "Logo Asesoría Energética León",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asesoría Energética León | Ahorra en tu factura",
    description: "Estudio energético gratuito. Te ayudamos a pagar menos en luz y gas.",
    images: ["https://www.energialeon.com/logoenergialeonlargo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main style={{ paddingTop: "72px" }}>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <StudyModal />
      </body>
    </html>
  );
}
