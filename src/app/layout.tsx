import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emulabs-coolabah-creek.j-9fbe723768.chatgpt.site"),
  title: "Emulabs · A little daily. A whole lot more life.",
  description:
    "Meet Emulabs at Coolabah Creek: a fictional emu-run supplement company in a learning experience about AI, health literacy and misinformation.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Emulabs · Coolabah Creek",
    description:
      "A little daily. A whole lot more life. Explore a fictional supplement company in the Coolabah Creek learning experience.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={instrument.variable}>
      <body>{children}</body>
    </html>
  );
}
