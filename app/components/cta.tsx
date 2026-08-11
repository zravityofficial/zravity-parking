import { Reveal } from "./reveal";
import { ArrowRightIcon } from "./icons";

export function CTA() {
  return (
    <section id="cta" className="scroll-mt-20 px-5 pb-24 sm:px-8">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[1.875rem] bg-accent px-6 py-16 text-center sm:px-12 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(rgba(33,38,26,0.4) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent 75%)",
          }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,4.5vw,3rem)] font-semibold tracking-[-0.02em] text-accent-ink">
            Everything you need, in one app.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-accent-ink/70">
            Shop, ride, eat, travel, pay, and get things done — with N.E.H.A.
            along for the ride. Join Zravity today.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#top"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-surface-white transition-colors hover:bg-dark"
            >
              Get the app
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#business"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-accent-ink/25 px-7 py-3.5 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-ink/10"
            >
              For business
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
