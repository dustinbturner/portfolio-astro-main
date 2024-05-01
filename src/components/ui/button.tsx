import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "border border-solid border-color: #e5e7eb py-1.5 px-3 font-medium text-center text-xs text-#FFFFFF active:shadow-none shadow bg-#e5e7eb md:bg-[linear-gradient(180deg,_rgba(55,_55,_55,_0.9),_rgba(01,_01,_01,_0.8))] hover:bg-#161616 duration-150",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "py-2.5 px-3 font-medium text-center text-white active:shadow-none rounded-lg shadow bg-neutral-700 md:bg-[linear-gradient(179.23deg,_#1E293B_0.66%,_rgba(30,_41,_59,_0)_255.99%)] hover:bg-neutral-800 duration-150",
        secondary:
          "bg-secondary text-xs border border-solid border-gray-400 border-opacity-25 p-1.5 shadow-md transition-shadow hover:shadow-lg rounded-lg md:bg-[linear-gradient(to_top,_#0A0A0A,_#121212)] text-secondary-foreground hover:bg-neutral-800 duration-150",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-3 hover:underline text-xs hover:text-xs hover:underline-offset-4 duration-150",
        email:
          "border border-solid border-color: #e5e7eb py-1.5 px-3 font-medium text-center text-xs text-#FFFFFF active:shadow-none shadow bg-#e5e7eb md:bg-[linear-gradient(180deg,_rgba(55,_55,_55,_0.9),_rgba(01,_01,_01,_0.8))] hover:bg-#161616 duration-150",
      },
      size: {
        default: "h-8 py-1.5 px-3",
        sm: "h-8 px-3",
        lg: "h-8 px-8",
      },
      rounded: {
        default: "rounded-md",
        sm: "rounded-sm",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
);


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
