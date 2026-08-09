export function RibbonDivider({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      className="ribbon-divider"
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ribbon-grad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F6A623" />
          <stop offset="0.28" stopColor="#E31C5F" />
          <stop offset="0.52" stopColor="#7B2FF7" />
          <stop offset="0.76" stopColor="#3A5CF0" />
          <stop offset="1" stopColor="#2FA85A" />
        </linearGradient>
      </defs>
      <path
        d="M0 30 C 150 10, 300 50, 450 30 S 750 10, 900 30 S 1050 50, 1200 30"
        stroke="url(#ribbon-grad)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
