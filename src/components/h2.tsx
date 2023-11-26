import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const H2 = React.forwardRef<HTMLHeadingElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <h2
        className={cn(
          "xs:text-4xl text-3xl font-extrabold text-blue-800 md:text-5xl",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
H2.displayName = "H2";

export { H2 };
