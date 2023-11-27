import * as React from "react";

import { cn } from "@/lib/utils";

export interface Props extends React.HTMLAttributes<HTMLParagraphElement> {}

const P = React.forwardRef<HTMLParagraphElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <p
        className={cn("text-xs text-foreground xs:text-sm", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
P.displayName = "P";

export { P };
