import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Winter } from "@/components/sections/Winter";
import { Product } from "@/components/sections/Product";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Findings } from "@/components/sections/Findings";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { Check } from "@/components/sections/Check";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Closing } from "@/components/sections/Closing";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Winter />
        <Product />
        <HowItWorks />
        <Findings />
        <Testimonials />
        <Team />
        <Check />
        <Pricing />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
