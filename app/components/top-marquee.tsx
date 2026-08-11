const DEALS = [
  "Flash deals live now",
  "Up to 60% off top brands",
  "Free delivery this week",
  "New arrivals every day",
  "Refer & earn wallet rewards",
  "First ride on us",
];

function Spark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mx-4 h-3 w-3 shrink-0"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0c.7 5.6 5.7 10.6 12 12-6.3 1.4-11.3 6.4-12 12-.7-5.6-5.7-10.6-12-12C6.3 10.6 11.3 5.6 12 0Z" />
    </svg>
  );
}

export function TopMarquee() {
  const strip = (
    <div className="flex shrink-0 items-center">
      {DEALS.map((deal) => (
        <span key={deal} className="flex items-center">
          <span className="text-[0.7rem] font-bold tracking-[0.12em] whitespace-nowrap uppercase sm:text-xs">
            {deal}
          </span>
          <Spark />
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden bg-accent text-accent-ink">
      <div className="flex w-max animate-marquee items-center py-2" aria-hidden>
        {strip}
        {strip}
      </div>
      <span className="sr-only">
        Zravity deals — flash sales, discounts, free delivery, and wallet
        rewards.
      </span>
    </div>
  );
}
