import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ostrilabs — Every animal on the farm, optimised",
  description:
    "OSTRA-9 is a single daily compound, formulated by ostriches, that addresses 214 biomarkers at once. Full-body diagnostics for the whole farm.",
  openGraph: {
    title: "Ostrilabs",
    description:
      "Full-body diagnostics and one daily compound. Formulated by ostriches. Reviewed by peers.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
