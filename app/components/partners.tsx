import { Reveal } from "./reveal";

// Partner brands shown in the revolving strip. Replace with real logo SVGs
// (see /public/images/partners) once available — these are text wordmarks.
const PARTNERS = [
  "Razorpay",
  "PhonePe",
  "Paytm",
  "UPI",
  "HDFC Bank",
  "ICICI Bank",
  "Visa",
  "Mastercard",
  "Delhivery",
  "Shiprocket",
];

export function Partners() {
  return (
    <section className="py-14 sm:py-16">
      <Reveal className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-center text-[0.7rem] font-semibold tracking-[0.2em] text-ink-3 uppercase">
          Powered by partners you trust
        </p>

        <div
          className="group relative mt-8 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max items-center gap-12 pr-12 animate-marquee [animation-duration:42s] group-hover:[animation-play-state:paused] sm:gap-16 sm:pr-16">
            {[...PARTNERS, ...PARTNERS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                aria-hidden={i >= PARTNERS.length}
                className="text-lg font-semibold tracking-tight whitespace-nowrap text-ink-3 transition-colors duration-300 hover:text-ink sm:text-xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
