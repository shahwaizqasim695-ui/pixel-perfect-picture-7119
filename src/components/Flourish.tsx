import { cn } from "@/lib/utils";

/** Champagne-gold ornamental divider: hairlines framing a diamond. */
export function Flourish({ className, tone = "gold" }: { className?: string; tone?: "gold" | "burgundy" }) {
  const stroke = tone === "gold" ? "var(--gold-deep)" : "var(--primary)";
  return (
    <svg
      viewBox="0 0 220 16"
      fill="none"
      aria-hidden="true"
      className={cn("h-4 w-44", className)}
    >
      <line x1="0" y1="8" x2="88" y2="8" stroke={stroke} strokeWidth="1" opacity="0.7" />
      <line x1="132" y1="8" x2="220" y2="8" stroke={stroke} strokeWidth="1" opacity="0.7" />
      <rect x="104" y="2" width="12" height="12" transform="rotate(45 110 8)" stroke={stroke} strokeWidth="1.2" />
      <circle cx="110" cy="8" r="2" fill={stroke} />
    </svg>
  );
}
