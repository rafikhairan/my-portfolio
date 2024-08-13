import React, { forwardRef } from "react";
import { cn } from "@/lib/utils.ts";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cn("mx-auto w-full max-w-7xl", className)}>
        {children}
      </div>
    );
  },
);

export default Container;
