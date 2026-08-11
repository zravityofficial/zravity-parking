import Link from "next/link";
import { Logo } from "./logo";

const COLUMNS = [
  {
    title: "Shop & order",
    links: [
      { label: "Marketplace", href: "/#ecosystem" },
      { label: "Food delivery", href: "/#ecosystem" },
      { label: "Quick commerce", href: "/#ecosystem" },
      { label: "Travel", href: "/#ecosystem" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Home services", href: "/#ecosystem" },
      { label: "Professionals", href: "/#ecosystem" },
      { label: "Ride booking", href: "/#ecosystem" },
      { label: "N.E.H.A.", href: "/#neha" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Sell on Zravity", href: "/#business" },
      { label: "Drive & deliver", href: "/#business" },
      { label: "For pros", href: "/#business" },
      { label: "Enterprise", href: "/#business" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/#cta" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Help center", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer id="footer" className="scroll-mt-24 border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-2">
              Everything you need in one super app — shopping, services, rides,
              travel, food, delivery, and payments, with N.E.H.A. built in.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-2 transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-ink-3">
            © {new Date().getFullYear()} Zravity. Everything you need.
          </p>
          <div className="flex gap-6 text-sm text-ink-3">
            <Link href="/terms" className="transition-colors hover:text-ink">
              Terms
            </Link>
            <Link href="/terms#payments" className="transition-colors hover:text-ink">
              Privacy
            </Link>
            <Link href="/team" className="transition-colors hover:text-ink">
              Team
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
