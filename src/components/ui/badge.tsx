import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border px-2.5 py-0.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border border-solid border-color: #e5e7eb py-1.5 px-3 font-medium text-center text-xs uppercase text-#FFFFFF active:shadow-none rounded-lg shadow bg-#e5e7eb md:bg-[linear-gradient(180deg,_rgba(55,_55,_55,_0.9),_rgba(01,_01,_01,_0.8))] hover:bg-#161616 duration-150",
        outline: "text-neutral-300 text-xs py-1.5 px-3",
        hero: " text-neutral-300 text-xs py-1.5 px-3 border-transparent"
      },
      radius: {
        default: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, radius, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, radius }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
