import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oxfordcorridor.com"),
  title: "Oxford Corridor | Global Education, Academic Consulting & MUN Leadership",
  description:
    "Oxford Corridor is a premier global educational institution empowering students with international perspectives, premium academic consulting, and Model United Nations (MUN) leadership programs.",
  keywords: [
    "Oxford Corridor",
    "Global Education",
    "Academic Consulting",
    "Model United Nations",
    "OXCMUN",
    "PREMUN",
    "International Education",
    "Diplomatic Academy",
    "Leadership Programs",
  ],
  authors: [{ name: "Oxford Corridor" }],
  icons: {
    icon: "/Artboard 1.png",
    shortcut: "/Artboard 1.png",
    apple: "/Artboard 1.png",
  },
  openGraph: {
    title: "Oxford Corridor | Inspiring Education Beyond the Classroom",
    description:
      "Empowering students worldwide with global perspectives, critical thinking, academic consulting, and signature Model United Nations conferences.",
    url: "https://oxfordcorridor.com",
    siteName: "Oxford Corridor",
    images: [
      {
        url: "/Artboard 1.png",
        width: 1200,
        height: 630,
        alt: "Oxford Corridor Global Education Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable} ${inter.variable}`}>
      <body className="bg-slate-900 text-slate-100 antialiased font-sans selection:bg-oxcPink selection:text-white">
        {children}
      </body>
    </html>
  );
}

