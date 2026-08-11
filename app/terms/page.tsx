import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing your use of Zravity — the super app for shopping, services, rides, travel, food, delivery, and payments.",
};

const SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of terms",
    body: [
      "Welcome to Zravity. These Terms & Conditions (the “Terms”) govern your access to and use of the Zravity super app, website, and related services (together, the “Platform”). By creating an account or using the Platform, you agree to be bound by these Terms.",
      "If you do not agree with any part of these Terms, please do not use the Platform.",
    ],
  },
  {
    id: "accounts",
    title: "2. Your account",
    body: [
      "You must provide accurate information when you register and keep it up to date. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.",
      "A single Zravity account may be used across our modules — including shopping, services, rides, travel, food, delivery, and payments — subject to any additional rules that apply to a specific module.",
    ],
  },
  {
    id: "services",
    title: "3. Use of the Platform",
    body: [
      "Zravity connects customers with sellers, drivers, delivery partners, and professionals. Where Zravity acts as a marketplace, the relevant seller or service provider is responsible for the products or services they offer, and your contract for those products or services is with them.",
      "You agree to use the Platform only for lawful purposes and not to misuse, disrupt, or attempt to gain unauthorised access to any part of it.",
    ],
  },
  {
    id: "payments",
    title: "4. Payments & wallet",
    body: [
      "The Zravity Wallet lets you pay, split, send, and top up across the Platform. You authorise us to charge your selected payment method or wallet balance for orders, bookings, fees, and applicable taxes.",
      "Prices, offers, and deals may change and may be subject to availability. Refunds, returns, and cancellations are handled according to the policy of the relevant module and provider.",
    ],
  },
  {
    id: "neha",
    title: "5. N.E.H.A. AI assistant",
    body: [
      "N.E.H.A. is an AI assistant that can help you shop, book, and complete tasks across the Platform. Actions suggested or taken by N.E.H.A. on your behalf — such as placing an order or making a booking — are subject to your confirmation where required and to these Terms.",
      "While we work to make N.E.H.A. helpful and accurate, it may occasionally make mistakes. You remain responsible for reviewing important actions before they are completed.",
    ],
  },
  {
    id: "conduct",
    title: "6. Content & conduct",
    body: [
      "You are responsible for any content you submit, such as reviews, ratings, or messages. Content must not be unlawful, misleading, offensive, or infringe the rights of others.",
      "We may remove content or suspend accounts that violate these Terms or that we reasonably believe harm the community, our partners, or the Platform.",
    ],
  },
  {
    id: "liability",
    title: "7. Disclaimers & liability",
    body: [
      "The Platform is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, Zravity is not liable for indirect, incidental, or consequential damages arising from your use of the Platform.",
      "Nothing in these Terms excludes any liability that cannot be excluded under applicable law.",
    ],
  },
  {
    id: "changes",
    title: "8. Changes to these Terms",
    body: [
      "We may update these Terms from time to time. When we make material changes, we will take reasonable steps to notify you. Your continued use of the Platform after changes take effect constitutes acceptance of the updated Terms.",
    ],
  },
  {
    id: "contact",
    title: "9. Contact us",
    body: [
      "Questions about these Terms? Reach us at legal@zravity.com and we’ll be happy to help.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <section className="px-3 pt-3 sm:px-5">
        <div className="mx-auto max-w-4xl rounded-[1.75rem] border border-line bg-panel px-6 py-14 sm:rounded-[2rem] sm:px-12 sm:py-16">
          <span className="text-xs font-semibold tracking-[0.18em] text-ink-3 uppercase">
            Legal
          </span>
          <h1 className="mt-4 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-ink">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-ink-2">Last updated: 8 August 2026</p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        {/* Contents */}
        <nav
          aria-label="Contents"
          className="mb-12 rounded-[1.25rem] border border-line bg-surface-white p-6"
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-ink-3 uppercase">
            On this page
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-ink-2 transition-colors hover:text-ink"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-12">
          {SECTIONS.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {s.title}
              </h2>
              {s.body.map((p, i) => (
                <p
                  key={i}
                  className="mt-3 text-[1.02rem] leading-relaxed text-ink-2"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        <p className="mt-16 border-t border-line pt-8 text-sm text-ink-3">
          These Terms are provided as a general template for the Zravity
          Platform and should be reviewed by qualified legal counsel before
          publication.
        </p>
      </section>
    </main>
  );
}
