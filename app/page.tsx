import { Hero } from "./components/hero";
import { Logos } from "./components/logos";
import { Solutions } from "./components/solutions";
import { HowItWorks } from "./components/how-it-works";
import { Neha } from "./components/neha";
import { Business } from "./components/business";
import { Testimonials } from "./components/testimonials";
import { Partners } from "./components/partners";
import { CTA } from "./components/cta";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Logos />
      <Solutions />
      <HowItWorks />
      <Neha />
      <Business />
      <Testimonials />
      <Partners />
      <CTA />
    </main>
  );
}
