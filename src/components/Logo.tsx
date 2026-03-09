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
        <linearGradient id="logo-icon-grad" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      <g stroke="url(#logo-icon-grad)" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" fill="none">
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

export function LogoFull({ className = 'h-16' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="EcoDrone"
    >
      <defs>
        <linearGradient id="logo-full-grad" x1="45" y1="5" x2="45" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="40%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
        <linearGradient id="logo-glow" x1="45" y1="10" x2="45" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Glow behind drone */}
      <ellipse cx="50" cy="52" rx="38" ry="36" fill="url(#logo-glow)" />

      {/* Drone body */}
      <g stroke="url(#logo-full-grad)" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Center body */}
        <rect x="36" y="38" width="28" height="18" rx="4" strokeWidth="2.5" />

        {/* Camera/sensor */}
        <circle cx="50" cy="47" r="4" strokeWidth="2" />
        <circle cx="50" cy="47" r="1.5" fill="url(#logo-full-grad)" stroke="none" />

        {/* Arms */}
        <line x1="38" y1="40" x2="24" y2="26" strokeWidth="2.5" />
        <line x1="62" y1="40" x2="76" y2="26" strokeWidth="2.5" />
        <line x1="38" y1="54" x2="24" y2="68" strokeWidth="2.5" />
        <line x1="62" y1="54" x2="76" y2="68" strokeWidth="2.5" />

        {/* Propellers */}
        <ellipse cx="24" cy="24" rx="10" ry="3" strokeWidth="1.8" opacity="0.8" />
        <ellipse cx="76" cy="24" rx="10" ry="3" strokeWidth="1.8" opacity="0.8" />
        <ellipse cx="24" cy="70" rx="10" ry="3" strokeWidth="1.8" opacity="0.8" />
        <ellipse cx="76" cy="70" rx="10" ry="3" strokeWidth="1.8" opacity="0.8" />

        {/* Motor dots */}
        <circle cx="24" cy="26" r="2.5" fill="url(#logo-full-grad)" stroke="none" />
        <circle cx="76" cy="26" r="2.5" fill="url(#logo-full-grad)" stroke="none" />
        <circle cx="24" cy="68" r="2.5" fill="url(#logo-full-grad)" stroke="none" />
        <circle cx="76" cy="68" r="2.5" fill="url(#logo-full-grad)" stroke="none" />

        {/* Circuit/data lines below */}
        <polyline points="20,78 32,72 44,80 56,70 68,76 80,72" strokeWidth="1.8" opacity="0.6" />
        <circle cx="32" cy="72" r="2" fill="url(#logo-full-grad)" stroke="none" opacity="0.7" />
        <circle cx="56" cy="70" r="2" fill="url(#logo-full-grad)" stroke="none" opacity="0.7" />
        <circle cx="80" cy="72" r="2" fill="url(#logo-full-grad)" stroke="none" opacity="0.7" />
      </g>

      {/* EcoDrone text */}
      <text
        x="108"
        y="60"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontWeight="600"
        fontSize="42"
        fill="white"
        letterSpacing="-0.5"
      >
        EcoDrone
      </text>
    </svg>
  )
}
