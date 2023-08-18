import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-block rounded-full border-[1.5px] border-black bg-gradient-to-t px-8 py-4 leading-none tracking-widest transition-all duration-200 ease-out group-enabled:group-hover:-translate-x-2 group-enabled:group-hover:-translate-y-2 group-disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "from-logo-gradients-primary-from to-logo-gradients-primary-to",
        secondary:
          "from-logo-gradients-secondary-from via-logo-gradients-secondary-via to-logo-gradients-secondary-to",
        tertiary: "bg-logo-gradients-tertiary text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export const button = (variants: any) => twMerge(buttonVariants(variants));

const buttonChildOneVariants = cva(
  "absolute left-0 top-0 -z-10 h-full w-full rounded-full border-[1.5px] border-black bg-logo-secondary transition-all duration-200 ease-out group-enabled:group-hover:-translate-x-1 group-enabled:group-hover:-translate-y-1",
);

export const buttonChildOne = () => twMerge(buttonChildOneVariants());

const buttonChildTwoVariants = cva(
  "absolute left-0 top-0 -z-20 h-full w-full rounded-full border-[1.5px] border-black bg-logo-tertiary",
);

export const buttonChildTwo = () => twMerge(buttonChildTwoVariants());
