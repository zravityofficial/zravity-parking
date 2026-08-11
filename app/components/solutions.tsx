import type { ComponentType } from "react";
import { Reveal } from "./reveal";
import {
  ShopIcon,
  ServicesIcon,
  RideIcon,
  TravelIcon,
  FoodIcon,
  DeliveryIcon,
  ProfessionalIcon,
  WalletIcon,
  AiIcon,
} from "./icons";

type Module = {
  title: string;
  description: string;
  inspiredBy: string;
  Icon: ComponentType<{ className?: string }>;
};

const MODULES: Module[] = [
  {
    title: "Ecommerce marketplace",
    description:
      "A full catalog of products, brands, and variants with reviews, wishlists, offers, and flash sales.",
    inspiredBy: "Amazon · Flipkart · Myntra",
    Icon: ShopIcon,
  },
  {
    title: "Services marketplace",
    description:
      "Book vetted home and lifestyle services with transparent pricing and live scheduling.",
    inspiredBy: "Urban Company",
    Icon: ServicesIcon,
  },
  {
    title: "Ride booking",
    description:
      "Hail a ride in seconds with live tracking, fair pricing, and rated drivers.",
    inspiredBy: "Uber · Rapido",
    Icon: RideIcon,
  },
  {
    title: "Travel booking",
    description:
      "Plan and book longer journeys as a dedicated flow, separate from everyday rides.",
    inspiredBy: "Modern travel apps",
    Icon: TravelIcon,
  },
  {
    title: "Food delivery",
    description:
      "Order from local kitchens with real-time rider assignment and delivery status.",
    inspiredBy: "Zomato · Swiggy",
    Icon: FoodIcon,
  },
  {
    title: "On-demand delivery",
    description:
      "Quick-commerce essentials delivered in minutes, with slots and live tracking.",
    inspiredBy: "Blinkit",
    Icon: DeliveryIcon,
  },
  {
    title: "Professional services",
    description:
      "Hire top-rated professionals with profiles, assignment, and secure in-app chat.",
    inspiredBy: "AJIO · Urban Company",
    Icon: ProfessionalIcon,
  },
  {
    title: "Payments & wallet",
    description:
      "One wallet powers every order — pay, split, send, and top up without leaving the app.",
    inspiredBy: "Unified payments",
    Icon: WalletIcon,
  },
  {
    title: "N.E.H.A. assistant",
    description:
      "An AI assistant that shops, books, and gets things done across every module for you.",
    inspiredBy: "Built for Zravity",
    Icon: AiIcon,
  },
];

export function Solutions() {
  return (
    <section id="ecosystem" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.18em] text-ink-3 uppercase">
            Our services
          </span>
          <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-ink">
            Your priorities, our services
          </h2>
          <p className="mt-4 text-lg text-ink-2">
            Zravity brings the business models people rely on every day into a
            single, unified experience — original, premium, and built to work
            together.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((mod, i) => (
            <Reveal key={mod.title} as="div" delay={(i % 3) * 70}>
              <article className="group flex h-full flex-col rounded-[1.5rem] border border-line bg-surface-white p-6 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-line-strong hover:shadow-[var(--shadow-card)]">
                <span className="grid h-12 w-12 place-items-center rounded-[0.95rem] bg-surface-grey text-ink transition-colors group-hover:bg-accent group-hover:text-accent-ink">
                  <mod.Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                  {mod.title}
                </h3>
                <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-ink-2">
                  {mod.description}
                </p>
                <p className="mt-4 text-[0.7rem] font-medium tracking-wide text-ink-3 uppercase">
                  {mod.inspiredBy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
