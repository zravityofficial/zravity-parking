type LogoProps = {
  className?: string;
  /** Use light colour for placement on the dark section/footer. */
  onDark?: boolean;
};

/**
 * Zravity wordmark — set in VLNL Decks (client-supplied), letter-spaced
 * uppercase. No icon mark, per brand direction.
 */
export function Logo({ className = "", onDark = false }: LogoProps) {
  return (
    <span
      className={`font-display text-[1.35rem] font-medium tracking-[0.14em] uppercase leading-none ${
        onDark ? "text-dark-fg" : "text-ink"
      } ${className}`}
    >
      zravity
    </span>
  );
}
