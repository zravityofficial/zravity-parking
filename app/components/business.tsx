import { Reveal } from "./reveal";
import { CheckIcon } from "./icons";

const AUDIENCES = [
  {
    title: "Sellers",
    body: "List products, manage inventory and orders, run offers, and see analytics — all from one seller console.",
  },
  {
    title: "Riders & drivers",
    body: "Accept ride and delivery requests, track earnings, and get paid straight to your Zravity wallet.",
  },
  {
    title: "Professionals",
    body: "Publish a profile, get matched to nearby jobs, and manage bookings with in-app chat.",
  },
  {
    title: "Enterprise admin",
    body: "One control center to configure every module, with role-based access and full oversight.",
  },
];

const BENEFITS = [
  "Modular, enterprise-grade platform built to scale",
  "One wallet and payments layer across every module",
  "Real-time communication and notifications built in",
  "Production-ready, secure, and horizontally scalable",
];

export function Business() {
  return (
    <section id="business" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="overflow-hidden rounded-[1.875rem] bg-dark text-dark-fg">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-14 lg:p-16">
            <div>
              <span className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                For business
              </span>
              <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.75rem)] font-semibold tracking-[-0.02em]">
                One platform for every role
              </h2>
              <p className="mt-4 max-w-md text-lg text-dark-fg-2">
                Zravity isn&apos;t just for customers. Sellers, riders,
                professionals, and administrators each get purpose-built tools
                on the same unified, enterprise-grade foundation.
              </p>

              <ul className="mt-8 space-y-3.5">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-accent-ink">
                      <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.4} />
                    </span>
                    <span className="text-[0.95rem] text-dark-fg/85">{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink transition-colors hover:brightness-95"
              >
                Partner with Zravity
              </a>
            </div>

            <div className="grid gap-4 self-center sm:grid-cols-2">
              {AUDIENCES.map((a) => (
                <div
                  key={a.title}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="text-base font-semibold text-dark-fg">
                    {a.title}
                  </p>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-dark-fg-2">
                    {a.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
