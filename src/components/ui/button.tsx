import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-[transform,background-color,color,box-shadow,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        gold: "bg-gold text-ocean-deep shadow-[0_8px_24px_rgb(196_163_90/0.28)] hover:bg-gold-soft",
        ocean: "bg-ocean text-foam hover:bg-ocean-mid",
        outline:
          "bg-transparent text-ocean shadow-[inset_0_0_0_1px_rgb(10_77_104/0.22)] hover:bg-sky",
        ghost: "bg-transparent text-foam hover:bg-foam/12",
        light: "bg-foam text-ocean hover:bg-paper",
      },
      size: {
        md: "h-11 rounded-md px-5 text-sm",
        lg: "h-12 rounded-lg px-6 text-[0.95rem]",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
