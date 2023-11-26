import { ReactNode } from "react";
import { Navbar } from "./_components/Navbar";

export default function BlogPagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col items-center px-4 pt-8">
        <main className="w-full max-w-5xl">{children}</main>
      </div>
    </>
  );
}
