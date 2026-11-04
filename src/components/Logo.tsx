/**
 * Angelo Mendoza mark: AM letters in currentColor with one coral paddle.
 * This is the single place to change the logo.
 */
export default function Logo({
  className = "",
  paddleClassName = "fill-coral",
  title = "Angelo Mendoza",
}: {
  className?: string;
  paddleClassName?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 150 120"
      className={className}
      role="img"
      aria-label={title}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="13"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      >
        <path d="M12 104 L38 26 L64 104" />
        <path d="M82 104 V26 L107 74 L132 26 V104" />
      </g>
      <g transform="rotate(-18 75 64)" className={paddleClassName}>
        <rect x="2" y="61" width="112" height="6" rx="3" />
        <rect x="104" y="54" width="36" height="20" rx="10" />
      </g>
    </svg>
  );
}
