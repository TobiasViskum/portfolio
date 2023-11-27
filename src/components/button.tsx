import * as React from "react";

import { cn } from "@/lib/utils";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn(
          "rounded-lg bg-first px-4 py-2 text-xs text-background transition-colors hover:bg-opacity-80 xs:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
