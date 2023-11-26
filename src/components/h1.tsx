import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const H1 = React.forwardRef<HTMLHeadingElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        className={cn(
          "xs:text-5xl text-gradient py-1 text-4xl font-extrabold md:text-6xl",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
H1.displayName = "H1";

export { H1 };
