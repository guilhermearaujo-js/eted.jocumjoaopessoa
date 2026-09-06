import { cn } from "@/lib/utils";

export function Logo({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <a href="#inicio" className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "grid size-11 place-items-center rounded-md",
          inverted ? "bg-foam/12 text-gold" : "bg-ocean text-gold",
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="size-7" fill="none">
          <path
            d="M8 14c3 4 5-4 8 0s5-4 8 0"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M6 19c3.5 4 6-4 10 0s6.5-4 10 0"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M16 7v5M14 9h4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block text-[0.68rem] font-semibold uppercase tracking-[0.2em]",
            inverted ? "text-gold-soft" : "text-gold",
          )}
        >
          JOCUM João Pessoa
        </span>
        <span
          className={cn(
            "font-display text-[1.35rem] font-semibold tracking-tight",
            inverted ? "text-foam" : "text-ocean",
          )}
        >
          ETED
        </span>
      </span>
    </a>
  );
}
