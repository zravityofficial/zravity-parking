import { StarIcon } from "./icons";

const STATS = [
  { value: "2Cr+", label: "customers" },
  { value: "50k+", label: "sellers & pros" },
  { value: "180+", label: "cities" },
  { value: "12Cr+", label: "orders delivered" },
];

export function Logos() {
  return (
    <section className="border-y border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className="h-4 w-4 text-ink"
                fill="currentColor"
                stroke="none"
              />
            ))}
            <span className="ml-1.5 text-sm font-semibold text-ink">4.9</span>
          </div>
          <p className="text-center text-xs font-semibold tracking-[0.18em] text-ink-3 uppercase">
            Trusted by millions across India
          </p>
        </div>

        <dl className="mt-9 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm text-ink-2">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
