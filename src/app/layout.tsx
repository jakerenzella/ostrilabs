import type { Metadata } from "next";
import { Fredoka, Nunito_Sans } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({ variable: "--font-fredoka", subsets: ["latin"], weight: ["500", "600", "700"] });
const nunito = Nunito_Sans({ variable: "--font-nunito", subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "EmuLabs SuperHealth · The results speak for themselves",
  description:
    "EmuLabs SuperHealth daily supplement capsules. Strength, growth, vitality and everything else from the emus next door. Now arriving at Coolabah Creek.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "EmuLabs SuperHealth",
    description: "Little capsules. Big promises. The results speak for themselves.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${fredoka.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
