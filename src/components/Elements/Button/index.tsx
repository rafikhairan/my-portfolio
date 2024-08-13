import { cn } from "@/lib/utils.ts";
import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const GradientButton = ({ text, icon, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-11 overflow-hidden rounded-lg p-[1px] focus:outline-none",
        className,
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1C82AD_0%,#03C988_50%,#1C82AD_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-custom-black px-5 py-1 text-sm backdrop-blur-3xl">
        {text}
        {icon}
      </span>
    </button>
  );
};

export const ShimmerButton = ({
  text,
  icon,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex animate-shimmer items-center justify-center rounded-lg border border-white/[0.2] bg-[linear-gradient(110deg,#0e0e0e,45%,#1d1d1d,55%,#0e0e0e)] bg-[length:200%_100%] px-5 py-2.5 text-sm transition-colors focus:outline-none focus:ring-[2px] focus:ring-neutral-200",
        className,
      )}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  );
};
