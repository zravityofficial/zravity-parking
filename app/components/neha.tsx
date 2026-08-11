import { Reveal } from "./reveal";
import { AiIcon, CheckIcon } from "./icons";

const CAPABILITIES = [
  "Shops, books, and orders across every module",
  "Understands plain language — no menus to hunt through",
  "Remembers your preferences, addresses, and usual carts",
  "Guides sellers, riders, and pros through their work",
];

const CHAT = [
  { from: "user", text: "Plan my evening — dinner for two and a ride there." },
  {
    from: "neha",
    text: "Booked a table at 8pm, added your usual starters, and a ride will reach you at 7:35. Shall I pay from your wallet?",
  },
  { from: "user", text: "Yes, and remind me tomorrow to reorder groceries." },
];

export function Neha() {
  return (
    <section id="neha" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-white px-3.5 py-1.5 text-xs font-semibold text-ink-2">
            <AiIcon className="h-4 w-4" /> Meet N.E.H.A.
          </span>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-ink">
            Your assistant for the whole app
          </h2>
          <p className="mt-4 max-w-md text-lg text-ink-2">
            N.E.H.A. is Zravity&apos;s built-in AI — an operational and
            educational assistant that gets things done across shopping,
            services, rides, travel, and payments, so you can just ask.
          </p>
          <ul className="mt-7 space-y-3.5">
            {CAPABILITIES.map((cap) => (
              <li key={cap} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink text-accent">
                  <CheckIcon className="h-3 w-3" strokeWidth={2.6} />
                </span>
                <span className="text-[0.95rem] text-ink-2">{cap}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[1.75rem] bg-dark p-5 text-dark-fg shadow-[var(--shadow-card)] sm:p-6">
            <div className="flex items-center gap-2.5 border-b border-white/10 pb-4">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-ink">
                <AiIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">N.E.H.A.</p>
                <p className="text-[0.7rem] text-dark-fg-2">
                  Online · always here
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2.5">
              {CHAT.map((m, i) =>
                m.from === "user" ? (
                  <div
                    key={i}
                    className="ml-auto max-w-[82%] rounded-2xl rounded-br-sm bg-white/10 px-3.5 py-2.5 text-sm"
                  >
                    {m.text}
                  </div>
                ) : (
                  <div
                    key={i}
                    className="mr-auto max-w-[86%] rounded-2xl rounded-bl-sm bg-accent px-3.5 py-2.5 text-sm font-medium text-accent-ink"
                  >
                    {m.text}
                  </div>
                ),
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Reorder groceries", "Track my ride", "Split a bill"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-dark-fg-2"
                  >
                    {chip}
                  </span>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
