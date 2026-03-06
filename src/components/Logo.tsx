export function LogoIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-grad" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      <g stroke="url(#logo-grad)" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" fill="none">
        <line x1="22" y1="22" x2="10" y2="10" />
        <line x1="42" y1="22" x2="54" y2="10" />
        <line x1="22" y1="42" x2="10" y2="54" />
        <line x1="42" y1="42" x2="54" y2="54" />
        <rect x="20" y="20" width="24" height="24" rx={4} />
      </g>
      <rect x="27" y="27" width="10" height="10" rx={1} fill="white" />
    </svg>
  )
}
