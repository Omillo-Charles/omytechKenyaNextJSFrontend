import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const ubuntu = localFont({
  src: [
    {
      path: "../public/ubuntufont/ubuntu-font-family-0.83/Ubuntu-R.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/ubuntufont/ubuntu-font-family-0.83/Ubuntu-M.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/ubuntufont/ubuntu-font-family-0.83/Ubuntu-B.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ubuntu",
});

export const metadata = {
  title: {
    default: "OMYTECH - Innovating the Future, Empowering Africa",
    template: "%s | OMYTECH",
  },
  description:
    "OMYTECH is a leading technology company in Kenya, providing innovative web development, mobile apps, UI/UX design, and digital solutions across Africa.",
  keywords: [
    "OMYTECH",
    "technology",
    "Kenya",
    "Africa",
    "web development",
    "mobile apps",
    "UI/UX design",
    "digital marketing",
    "software development",
    "tech solutions",
  ],
  authors: [{ name: "OMYTECH" }],
  creator: "OMYTECH",
  publisher: "OMYTECH",
  metadataBase: new URL("https://omytech.co.ke"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OMYTECH - Innovating the Future, Empowering Africa",
    description:
      "Leading technology company in Kenya providing innovative web development, mobile apps, and digital solutions across Africa.",
    url: "https://omytech.co.ke",
    siteName: "OMYTECH",
    images: [
      {
        url: "/newOmytechLogo.png",
        width: 1200,
        height: 630,
        alt: "OMYTECH Logo",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OMYTECH - Innovating the Future, Empowering Africa",
    description:
      "Leading technology company in Kenya providing innovative web development, mobile apps, and digital solutions across Africa.",
    creator: "@omytech_kenya",
    images: ["/newOmytechLogo.png"],
  },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/omytechlogo.png" />
        <link rel="apple-touch-icon" href="/omytechlogo.png" />
        <meta name="theme-color" content="#007bff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body
        className={`${ubuntu.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
