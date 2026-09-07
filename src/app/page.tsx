import { Bay } from "@/components/sections/Bay";
import { Compound } from "@/components/sections/Compound";
import { Disclosures } from "@/components/sections/Disclosures";
import { Evidence } from "@/components/sections/Evidence";
import { Feed } from "@/components/sections/Feed";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Membership } from "@/components/sections/Membership";
import { Nav } from "@/components/sections/Nav";
import { Press } from "@/components/sections/Press";
import { Protocol } from "@/components/sections/Protocol";
import { Stats } from "@/components/sections/Stats";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Feed />
      <main>
        <Press />
        <Stats />
        <Compound />
        <Protocol />
        <Bay />
        <Testimonials />
        <Evidence />
        <Team />
        <Membership />
        <Disclosures />
      </main>
      <Footer />
    </>
  );
}
