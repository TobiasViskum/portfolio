import * as React from "react";

import { cn } from "@/lib/utils";
import { H2 } from "./h2";
import { P } from "./p";
import Image, { StaticImageData } from "next/image";
import { H3 } from "./h3";

export interface InputProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  image: StaticImageData;
  direction?: "normal" | "reverse";
  children: React.ReactNode;
}

const SectionLayout2 = React.forwardRef<HTMLElement, InputProps>(
  (
    { className, title, image, children, direction = "normal", ...props },
    ref,
  ) => {
    return (
      <section className="clearfix" ref={ref} {...props}>
        <div className="w-full space-y-2 sm:space-y-0">
          <H3 className="block sm:hidden">{title}</H3>
          <div>
            <Image
              priority
              src={image}
              width={640}
              height={1280}
              alt="img"
              className={cn(
                "mb-2 rounded-md sm:w-7/12 sm:max-w-md",
                direction === "reverse"
                  ? "sm:float-right sm:ml-4"
                  : "sm:float-left sm:mr-4",
              )}
            />
          </div>
        </div>
        <div className="w-full">
          <H3 className="hidden pb-1 sm:block">{title}</H3>
          <P className="">{children}</P>
        </div>
      </section>
    );
  },
);
SectionLayout2.displayName = "SectionLayout2";

export { SectionLayout2 };
