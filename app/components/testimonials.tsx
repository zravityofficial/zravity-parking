import { Reveal } from "./reveal";
import { StarIcon } from "./icons";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I deleted five apps the week I got Zravity. Groceries, my ride to work, and a plumber — all booked before my chai went cold.",
    name: "Ananya Rao",
    role: "Customer · Bengaluru",
    initials: "AR",
  },
  {
    quote:
      "N.E.H.A. planned our whole anniversary evening — dinner, flowers, and the cab. It even paid from my wallet. Genuinely felt like magic.",
    name: "Vikram Bhatia",
    role: "Customer · Mumbai",
    initials: "VB",
  },
  {
    quote:
      "As a seller, having orders, inventory, and payouts in one console changed how I run my store. Setup took an afternoon.",
    name: "Priya Nair",
    role: "Seller · Zravity Marketplace",
    initials: "PN",
  },
  {
    quote:
      "Ride requests and delivery jobs come through the same app, and earnings land straight in my wallet. Less hassle, more trips.",
    name: "Imran Sheikh",
    role: "Driver-partner · Delhi",
    initials: "IS",
  },
  {
    quote:
      "Clients find me, book me, and pay me without a single phone call. My schedule has never been fuller.",
    name: "Meera Iyer",
    role: "Professional · Home services",
    initials: "MI",
  },
  {
    quote:
      "One wallet for everything means I finally understand where my money goes. The whole thing just feels premium.",
    name: "Aditya Menon",
    role: "Customer · Hyderabad",
    initials: "AM",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.18em] text-ink-3 uppercase">
            Loved by millions
          </span>
          <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-ink">
            What our customers say
          </h2>
          <p className="mt-4 text-lg text-ink-2">
            Customers, sellers, drivers, and professionals — all on one platform,
            all with a reason to stay.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} as="div" delay={(i % 3) * 70}>
              <figure className="flex h-full flex-col rounded-[1.5rem] border border-line bg-surface-white p-6 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-line-strong hover:shadow-[var(--shadow-card)]">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon
                      key={s}
                      className="h-4 w-4 text-ink"
                      fill="currentColor"
                      stroke="none"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface-grey text-xs font-semibold text-ink">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">
                      {t.name}
                    </span>
                    <span className="block text-xs text-ink-2">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
