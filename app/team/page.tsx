import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "../components/reveal";
import { ArrowRightIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the people building Zravity — the super app bringing everything you need into one premium, unified experience.",
};

type Member = {
  name: string;
  role: string;
  initials: string;
  bio: string;
};

const LEADERSHIP: Member[] = [
  {
    name: "Aarav Mehta",
    role: "Founder & CEO",
    initials: "AM",
    bio: "Sets the vision for a single app that quietly runs your day.",
  },
  {
    name: "Diya Kapadia",
    role: "Chief Product Officer",
    initials: "DK",
    bio: "Shapes how millions move between shopping, services, and rides.",
  },
  {
    name: "Rohan Kapoor",
    role: "Chief Technology Officer",
    initials: "RK",
    bio: "Leads the modular-monolith platform behind every module.",
  },
  {
    name: "Ishaan Verma",
    role: "Head of Design",
    initials: "IV",
    bio: "Keeps the experience premium, calm, and never cluttered.",
  },
];

const TEAM: Member[] = [
  {
    name: "Sneha Rao",
    role: "Head of Marketplace",
    initials: "SR",
    bio: "Grows the seller ecosystem across products and brands.",
  },
  {
    name: "Karan Malhotra",
    role: "Head of Mobility",
    initials: "KM",
    bio: "Runs ride, travel, and delivery operations end to end.",
  },
  {
    name: "Ananya Desai",
    role: "Lead, N.E.H.A. AI",
    initials: "AD",
    bio: "Teaches N.E.H.A. to get real things done for people.",
  },
  {
    name: "Tarun Shetty",
    role: "Head of Payments",
    initials: "TS",
    bio: "Builds the wallet that powers every checkout.",
  },
  {
    name: "Riya Sharma",
    role: "Head of Trust & Safety",
    initials: "RS",
    bio: "Keeps customers, sellers, and partners protected.",
  },
  {
    name: "Aditya Banerjee",
    role: "Head of Partnerships",
    initials: "AB",
    bio: "Brings professionals and businesses onto Zravity.",
  },
];

function MemberCard({ m, featured }: { m: Member; featured?: boolean }) {
  return (
    <article className="group flex h-full flex-col rounded-[1.5rem] border border-line bg-surface-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
      <span
        className={`grid place-items-center rounded-2xl font-semibold ${
          featured
            ? "h-14 w-14 bg-ink text-lg text-accent"
            : "h-12 w-12 bg-surface-grey text-ink"
        }`}
      >
        {m.initials}
      </span>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
        {m.name}
      </h3>
      <p className="mt-0.5 text-sm font-medium text-ink-2">{m.role}</p>
      <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-ink-2">
        {m.bio}
      </p>
    </article>
  );
}

export default function TeamPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="px-3 pt-3 sm:px-5">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-line bg-panel px-6 py-16 sm:rounded-[2rem] sm:px-12 sm:py-20">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.18em] text-ink-3 uppercase">
              Our team
            </span>
            <h1 className="mt-4 text-[clamp(2.2rem,5.5vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
              The people building everything you need
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-2">
              We&apos;re a team of builders, designers, and operators on one
              mission — to fold a dozen everyday apps into a single experience
              that feels effortless and premium.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.25rem)] font-semibold tracking-[-0.02em] text-ink">
            Leadership
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {LEADERSHIP.map((m, i) => (
            <Reveal key={m.name} as="div" delay={(i % 4) * 60}>
              <MemberCard m={m} featured />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h2 className="text-[clamp(1.6rem,3.5vw,2.25rem)] font-semibold tracking-[-0.02em] text-ink">
            The wider team
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} as="div" delay={(i % 3) * 60}>
              <MemberCard m={m} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-[1.875rem] bg-dark p-8 text-dark-fg sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Come build with us
            </h2>
            <p className="mt-2 max-w-md text-dark-fg-2">
              We&apos;re hiring across engineering, design, product, and
              operations. If one unified super app excites you, so do we.
            </p>
          </div>
          <Link
            href="/#cta"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink transition-colors hover:brightness-95"
          >
            See open roles
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
