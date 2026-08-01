export function Crane() {
  return (
    <svg
      viewBox="0 0 320 200"
      className="mx-auto h-40 w-auto sm:h-48"
      role="img"
      aria-label="Animated construction crane"
    >
      <line
        x1="16"
        y1="178"
        x2="304"
        y2="178"
        stroke="var(--color-line)"
        strokeWidth="2"
        strokeDasharray="4 6"
      />

      <rect x="66" y="166" width="34" height="12" rx="2" fill="var(--color-ink)" className="dark:fill-surface-snow" />
      <line x1="83" y1="168" x2="83" y2="40" stroke="var(--color-ink)" strokeWidth="6" strokeLinecap="round" className="dark:stroke-surface-snow" />

      <line x1="83" y1="22" x2="26" y2="38" stroke="var(--color-grey-400)" strokeWidth="1.5" />
      <line x1="83" y1="22" x2="262" y2="40" stroke="var(--color-grey-400)" strokeWidth="1.5" />
      <line x1="70" y1="40" x2="26" y2="38" stroke="var(--color-ink)" strokeWidth="5" strokeLinecap="round" className="dark:stroke-surface-snow" />
      <rect x="14" y="34" width="16" height="12" rx="1.5" fill="var(--color-grey-400)" />
      <line x1="83" y1="40" x2="270" y2="40" stroke="var(--color-ink)" strokeWidth="5" strokeLinecap="round" className="dark:stroke-surface-snow" />
      <circle cx="83" cy="22" r="3.5" fill="var(--color-ink)" className="dark:fill-surface-snow" />

      <rect x="64" y="30" width="40" height="24" rx="3" fill="var(--color-ink)" className="dark:fill-surface-snow" />
      <circle cx="100" cy="28" r="3" fill="var(--color-accent-warning)" className="animate-pulse" />

      <g transform="translate(64,30)" className="animate-flag-wave" style={{ transformOrigin: "0px 0px" }}>
        <line x1="0" y1="0" x2="0" y2="-16" stroke="var(--color-grey-400)" strokeWidth="1.5" />
        <path d="M0,-16 L14,-12 L0,-8 Z" fill="var(--color-accent-warning)" />
      </g>

      <g className="animate-crane-move" style={{ transformOrigin: "0px 0px" }}>
        <g transform="translate(150,0)">
          <rect x="-6" y="36" width="12" height="8" rx="1.5" fill="var(--color-accent-blue)" />
          <g transform="translate(0,44)">
            <g className="animate-crane-swing" style={{ transformOrigin: "0px 0px" }}>
              <line x1="0" y1="0" x2="0" y2="48" stroke="var(--color-grey-400)" strokeWidth="1.5" />
              <g transform="translate(-15,48)">
                <rect width="30" height="24" rx="4" fill="var(--color-accent-blue)" />
                <text
                  x="15"
                  y="17"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill="white"
                  fontFamily="var(--font-sans, sans-serif)"
                >
                  Z
                </text>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
