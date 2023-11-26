import { ReactNode } from "react";

export default function BlogPagesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center pt-8">
      <div className="w-full max-w-5xl">{children}</div>
    </div>
  );
}
