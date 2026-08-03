export default function ImagePlaceholder({
  label,
  variant = "light",
  className = "",
}: {
  label: string;
  variant?: "light" | "dark";
  className?: string;
}) {
  const styles =
    variant === "dark"
      ? "bg-white/5 border-white/20 text-white/40 text-white/60"
      : "bg-surface-container border-outline-variant/40 text-outline-variant text-on-surface-variant/60";
  const [bg, border, iconColor, labelColor] = styles.split(" ");

  return (
    <div
      className={`relative aspect-[4/5] rounded-2xl ${bg} border ${border} flex flex-col items-center justify-center gap-3 overflow-hidden ${className}`}
    >
      <span className={`material-symbols-outlined text-6xl ${iconColor}`}>
        image
      </span>
      <span
        className={`font-label-bold text-label-bold uppercase tracking-widest ${labelColor}`}
      >
        {label}
      </span>
    </div>
  );
}
