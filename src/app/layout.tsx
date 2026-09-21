import type { Metadata } from "next";
import { Fredoka, Nunito_Sans } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({ variable: "--font-fredoka", subsets: ["latin"], weight: ["500", "600", "700"] });
const nunito = Nunito_Sans({ variable: "--font-nunito", subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Emulabs · OMNI-01 · The results speak for themselves",
  description:
    "OMNI-01 is the all-in-one supplement from the emus next door. Strength, growth, vitality and everything else in one daily scoop. Now arriving at Coolabah Creek.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Emulabs · OMNI-01",
    description: "Everything, in one scoop. The results speak for themselves.",
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
