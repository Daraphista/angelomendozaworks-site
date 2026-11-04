/** Wave divider line from the brand kit. Color follows currentColor. */
export default function Wave({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 24"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 12 Q15 0 30 12 T60 12 T90 12 T120 12 T150 12 T180 12 T210 12 T240 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
