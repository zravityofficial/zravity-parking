import {
  AiIcon,
  RideIcon,
  ShopIcon,
  StarIcon,
  WalletIcon,
  DeliveryIcon,
} from "./icons";

const cardLight =
  "flex h-full flex-col rounded-[1.25rem] border border-line bg-surface-white p-4 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow-card)]";
const cardDark =
  "flex h-full flex-col rounded-[1.25rem] bg-dark p-4 text-dark-fg transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-card)]";
const tag =
  "inline-flex items-center gap-1.5 rounded-full bg-surface-grey px-2.5 py-1 text-[0.68rem] font-semibold text-ink-2";

/* --- Shop (tall) --- */
export function ShopCard() {
  const items = [
    { name: "Aurora Headphones", price: "₹2,499" },
    { name: "Linen Overshirt", price: "₹1,299" },
  ];
  return (
    <div className={cardLight}>
      <div className="flex items-center justify-between">
        <span className={tag}>
          <ShopIcon className="h-3.5 w-3.5" /> Shop
        </span>
        <span className="text-[0.68rem] font-medium text-ink-3">Trending</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {["#e3ef7a", "#d9d8d2", "#c9d6ff", "#f2d0c4"].map((c) => (
          <div
            key={c}
            className="aspect-square rounded-xl"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
      <div className="mt-3 space-y-2">
        {items.map((it) => (
          <div key={it.name} className="flex items-center justify-between">
            <span className="truncate text-xs text-ink-2">{it.name}</span>
            <span className="text-xs font-semibold text-ink">{it.price}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto pt-3">
        <div className="rounded-full bg-ink py-2 text-center text-xs font-semibold text-surface-white">
          Add to cart
        </div>
      </div>
    </div>
  );
}

/* --- Services (wide) --- */
export function ServicesCard() {
  const pros = [
    { name: "Kavya Reddy", role: "Plumbing", rating: 5, initials: "KR" },
    { name: "Arjun Nair", role: "Electrical", rating: 4, initials: "AN" },
    { name: "Neha Sharma", role: "Cleaning", rating: 5, initials: "NS" },
  ];
  return (
    <div className={cardLight}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">Top-rated near you</p>
        <span className="text-[0.68rem] font-medium text-ink-3">
          Professionals
        </span>
      </div>
      <ul className="mt-3 flex flex-1 flex-col justify-between gap-2.5">
        {pros.map((p) => (
          <li key={p.name} className="flex items-center gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-surface-grey text-[0.65rem] font-semibold text-ink">
              {p.initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-ink">{p.name}</p>
              <p className="text-[0.68rem] text-ink-3">{p.role}</p>
            </div>
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-3 w-3 ${
                    i < p.rating ? "text-ink" : "text-line-strong"
                  }`}
                  fill={i < p.rating ? "currentColor" : "none"}
                  stroke={i < p.rating ? "none" : "currentColor"}
                />
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --- Wallet (dark, tall) --- */
export function WalletCard() {
  const tx = [
    { label: "Grocery run", amount: "−₹640" },
    { label: "Airport ride", amount: "−₹410" },
    { label: "Wallet top-up", amount: "+₹2,000" },
  ];
  return (
    <div className={cardDark}>
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-ink">
          <WalletIcon className="h-4 w-4" />
        </span>
        <span className="text-sm font-semibold">Zravity Wallet</span>
      </div>
      <div className="mt-4">
        <p className="text-[0.68rem] text-dark-fg-2">Balance</p>
        <p className="text-2xl font-semibold tracking-tight">₹18,240</p>
      </div>
      <ul className="mt-4 space-y-2 border-t border-white/10 pt-3">
        {tx.map((t) => (
          <li key={t.label} className="flex items-center justify-between">
            <span className="text-xs text-dark-fg-2">{t.label}</span>
            <span
              className={`text-xs font-semibold ${
                t.amount.startsWith("+") ? "text-accent" : "text-dark-fg"
              }`}
            >
              {t.amount}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-4">
        <div className="rounded-full bg-accent py-2 text-center text-xs font-semibold text-accent-ink">
          Pay · Split · Send
        </div>
      </div>
    </div>
  );
}

/* --- N.E.H.A. (dark, wide) --- */
export function NehaCard() {
  return (
    <div className={cardDark}>
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-ink">
          <AiIcon className="h-4 w-4" />
        </span>
        <span className="text-sm font-semibold">N.E.H.A.</span>
        <span className="ml-auto text-[0.68rem] text-dark-fg-2">
          AI assistant
        </span>
      </div>
      <div className="mt-3 flex flex-1 flex-col justify-end gap-2">
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-white/10 px-3 py-2 text-xs text-dark-fg">
          Book a plumber for tomorrow 6pm and reorder my groceries.
        </div>
        <div className="mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-accent px-3 py-2 text-xs font-medium text-accent-ink">
          Done — Kristin is booked for 6pm, and your usual cart is on the way. 🛒
        </div>
      </div>
    </div>
  );
}

/* --- Ride (wide) --- */
export function RideCard() {
  return (
    <div className={cardLight}>
      <div className="flex items-center justify-between">
        <span className={tag}>
          <RideIcon className="h-3.5 w-3.5" /> Ride
        </span>
        <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[0.68rem] font-semibold text-accent-ink">
          Arriving · 3 min
        </span>
      </div>
      <div className="relative mt-3 aspect-[260/90] w-full flex-1 overflow-hidden rounded-xl bg-surface">
        <svg
          viewBox="0 0 260 90"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <g stroke="var(--surface-grey)" strokeWidth="10" strokeLinecap="round">
            <path d="M10 30 H250" />
            <path d="M70 5 V85" />
            <path d="M190 5 V85" />
          </g>
          <path
            d="M20 68 C80 68 120 40 250 40"
            stroke="var(--ink)"
            strokeWidth="2.5"
            strokeDasharray="5 6"
            fill="none"
          />
          <circle cx="20" cy="68" r="4" fill="var(--ink)" />
          <circle cx="248" cy="40" r="5" fill="var(--accent)" stroke="var(--surface-white)" strokeWidth="2" />
        </svg>
      </div>
      <div className="mt-3 flex items-center gap-2.5">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-surface-grey text-[0.6rem] font-semibold text-ink">
          RS
        </span>
        <div className="flex-1">
          <p className="text-xs font-medium text-ink">Rohit · Maruti Dzire</p>
          <p className="text-[0.68rem] text-ink-3">KA 05 · 4821</p>
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-ink">
          4.9 <StarIcon className="h-3 w-3" fill="currentColor" stroke="none" />
        </span>
      </div>
    </div>
  );
}

/* --- Orders / delivery (wide) --- */
export function OrdersCard() {
  const steps = ["Ordered", "Packed", "On the way", "Delivered"];
  const active = 2;
  return (
    <div className={cardLight}>
      <div className="flex items-center justify-between">
        <span className={tag}>
          <DeliveryIcon className="h-3.5 w-3.5" /> Delivery
        </span>
        <span className="text-[0.68rem] font-medium text-ink-3">ETA 12 min</span>
      </div>
      <p className="mt-3 text-sm font-semibold text-ink">
        Your order is on the way
      </p>
      <div className="mt-auto pt-4">
        <div className="flex items-center gap-1.5">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 flex-1 rounded-full ${
                i <= active ? "bg-ink" : "bg-surface-grey"
              }`}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between">
          {steps.map((s, i) => (
            <span
              key={s}
              className={`text-[0.6rem] ${
                i <= active ? "font-semibold text-ink" : "text-ink-3"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
