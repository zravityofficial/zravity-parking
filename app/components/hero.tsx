import { ArrowUpRightIcon, RideIcon, ShopIcon, AiIcon } from "./icons";
import {
  ShopCard,
  ServicesCard,
  WalletCard,
  NehaCard,
  RideCard,
  OrdersCard,
} from "./hero-cards";

function Scribble() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 320 130"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -inset-x-3 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+1.5rem)]"
      fill="none"
    >
      <path
        d="M28 78C42 30 128 14 210 26c66 10 92 40 66 66-40 40-176 40-232 8-26-15-14-52 44-66"
        stroke="var(--accent)"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-line bg-panel p-5 sm:rounded-[2rem] sm:p-8 lg:p-10">
        {/* Headline row */}
        <div className="grid gap-8 lg:grid-cols-[1fr_18rem] lg:items-start">
          <h1 className="animate-fade-up text-[clamp(2.4rem,6.4vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-ink">
            <span className="relative inline-block">
              <Scribble />
              <span className="relative">Everything</span>
            </span>{" "}
            you need, in one super app.
          </h1>

          <div className="animate-fade-up flex flex-col gap-4 [animation-delay:120ms] lg:pt-2">
            <div className="flex gap-2">
              {[ShopIcon, RideIcon, AiIcon].map((Icon, i) => (
                <span
                  key={i}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface-white text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:text-accent-ink hover:[background-color:var(--accent)]"
                >
                  <Icon className="h-5 w-5" />
                </span>
              ))}
            </div>
            <p className="max-w-xs text-[0.95rem] leading-relaxed text-ink-2">
              Shopping, services, rides, travel, food, and payments — unified in
              one premium platform, with the N.E.H.A. AI assistant built in.
            </p>
          </div>
        </div>

        {/* Bento of module previews */}
        <div className="animate-fade-up mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 [animation-delay:200ms]">
          <div className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <ShopCard />
          </div>
          <div className="sm:col-span-2 lg:col-span-2">
            <ServicesCard />
          </div>
          <div className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <WalletCard />
          </div>
          <div className="sm:col-span-2 lg:col-span-2">
            <NehaCard />
          </div>
          <div className="sm:col-span-1 lg:col-span-2">
            <RideCard />
          </div>
          <div className="sm:col-span-1 lg:col-span-2">
            <OrdersCard />
          </div>
        </div>

        {/* Bottom CTA row */}
        <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-4 [animation-delay:280ms]">
          <a
            href="#cta"
            className="group inline-flex items-center gap-3 rounded-full bg-ink py-2 pr-2 pl-6 text-sm font-semibold text-surface-white transition-all duration-300 hover:bg-dark active:scale-[0.98]"
          >
            Explore the ecosystem
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRightIcon className="h-4 w-4" strokeWidth={2.2} />
            </span>
          </a>
          <p className="text-sm text-ink-2">
            One login. One wallet. Everything in between.
          </p>
        </div>
      </div>
    </section>
  );
}
