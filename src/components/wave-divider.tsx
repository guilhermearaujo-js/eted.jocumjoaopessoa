import { cn } from "@/lib/utils";

export function WaveDivider({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div className={cn("pointer-events-none leading-none", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 88"
        preserveAspectRatio="none"
        className={cn("block h-12 w-full md:h-16", flip && "rotate-180")}
      >
        <path
          fill="currentColor"
          d="M0 44c160 36 320-36 480 0s320-36 480 0 320-36 480 0v44H0z"
        />
      </svg>
    </div>
  );
}
