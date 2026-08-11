import { Reveal } from "./reveal";

const STEPS = [
  {
    n: "01",
    title: "Discover everything in one place",
    body: "Browse products and services side by side — categories, sliders, flash deals, and nearby offers, all from a single home.",
  },
  {
    n: "02",
    title: "Order, book, or ride",
    body: "Add to cart, hail a ride, schedule a professional, or plan a trip. Or just ask N.E.H.A. to handle it for you.",
  },
  {
    n: "03",
    title: "Pay once, track it all",
    body: "Your Zravity wallet powers every checkout, and real-time updates keep orders, rides, and bookings in one live view.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="scroll-mt-24 border-y border-line bg-panel py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.18em] text-ink-3 uppercase">
              How it works
            </span>
            <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-ink">
              Everything, in three moves
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink-2">
              No more juggling a dozen apps, logins, and wallets. Zravity brings
              your whole day into one calm, intelligent flow.
            </p>
            <a
              href="#cta"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-surface-white transition-colors hover:bg-dark"
            >
              Get started
            </a>
          </Reveal>

          <ol className="flex flex-col">
            {STEPS.map((step, i) => (
              <Reveal
                as="li"
                key={step.n}
                delay={i * 90}
                className="flex gap-5 border-t border-line py-7 first:border-t-0 first:pt-0"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-soft text-sm font-semibold text-accent-ink tabular-nums">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
