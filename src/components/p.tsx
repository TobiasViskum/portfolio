import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const P = React.forwardRef<HTMLHeadingElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        className={cn("xs:text-sm text-xs text-foreground", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
P.displayName = "P";

export { P };
