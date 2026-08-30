import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dominik Petrac — AI automatizacija, marketing sustavi, AI video",
  description:
    "Gradim automatizirane sustave za prodaju i marketing. AI agenti, cold outreach, HoReCa B2B, AI video produkcija. Zagreb, Hrvatska.",
  openGraph: {
    title: "Dominik Petrac — AI radi posao. Ja gradim sustav.",
    description:
      "Automatizirani prodajni lijevak, Meta Ads, AI video za oglase. Rezultati: 65 leadova, 5,19€ CPL, CTR 2,05%.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
