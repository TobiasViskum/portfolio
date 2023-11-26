import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const H3 = React.forwardRef<HTMLHeadingElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        className={cn(
          "xs:text-3xl text-2xl font-extrabold text-blue-900 md:text-4xl",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
H3.displayName = "H3";

export { H3 };
