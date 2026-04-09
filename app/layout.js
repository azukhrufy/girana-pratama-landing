import ChakraProviders from "../components/ChakraProviders";
import JsonLd from "../components/JsonLd";
import "./globals.css";

const SITE_URL = "https://giranapratama.co.id";
const SITE_NAME = "PT Girana Pratama Mandiri";
const SITE_DESCRIPTION =
  "PT Girana Pratama Mandiri — Penyedia jasa outsourcing profesional dan terpercaya di Indonesia. Layanan keamanan, kebersihan, administrasi, dan dukungan IT untuk bisnis Anda.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Jasa Outsourcing Profesional`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "outsourcing Indonesia",
    "jasa outsourcing",
    "penyedia tenaga kerja",
    "jasa keamanan",
    "cleaning service",
    "jasa kebersihan",
    "administrasi kantor",
    "dukungan IT",
    "PT Girana Pratama Mandiri",
    "outsourcing Bandung",
    "outsourcing Jakarta",
    "manpower supply",
    "SDM outsourcing",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Jasa Outsourcing Profesional & Terpercaya`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Jasa Outsourcing Profesional`,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // Replace with actual verification codes when available
    // google: "your-google-verification-code",
  },
};

export const viewport = {
  themeColor: "#10108A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <JsonLd />
        <ChakraProviders>{children}</ChakraProviders>
      </body>
    </html>
  );
}
