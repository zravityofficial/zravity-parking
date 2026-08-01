import { Crane } from "./crane";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-surface-white dark:bg-ink-deep">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float-a absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent-blue/20 blur-[100px] dark:bg-accent-blue/25" />
        <div className="animate-float-b absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-accent-violet/20 blur-[100px] dark:bg-accent-violet/25" />
        <div className="animate-float-c absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-success/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-40 dark:opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-grey-300) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 75%)",
          }}
        />
      </div>

      <header className="relative z-10 flex items-center px-6 py-6 sm:px-10">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-violet text-sm font-bold text-white shadow-lg shadow-accent-blue/30">
            Z
          </span>
          <span className="text-sm font-semibold tracking-wide text-ink dark:text-surface-snow">
            ZRAVITY
          </span>
        </div>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
        <div className="animate-fade-up">
          <Crane />
        </div>

        <div className="animate-fade-up mt-2 mb-5 inline-flex items-center gap-2 rounded-full border border-line/80 bg-white/60 px-4 py-1.5 text-xs font-medium text-grey-500 backdrop-blur-md [animation-delay:100ms] dark:border-white/10 dark:bg-white/5 dark:text-grey-400">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-warning" />
          Under construction
        </div>

        <h1 className="animate-fade-up max-w-2xl text-4xl leading-[1.1] font-semibold tracking-tight text-ink [animation-delay:150ms] dark:text-surface-snow sm:text-5xl">
          Site under construction.
        </h1>

        <p className="animate-fade-up mt-4 max-w-md text-base text-balance text-grey-500 [animation-delay:250ms] dark:text-grey-400 sm:text-lg">
          We&apos;re building something good. Check back soon.
        </p>
      </main>

      <footer className="relative z-10 flex items-center justify-center px-6 py-6 text-xs text-grey-400">
        © {new Date().getFullYear()} Zravity. All rights reserved.
      </footer>
    </div>
  );
}
