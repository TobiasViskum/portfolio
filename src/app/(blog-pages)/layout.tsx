import { ReactNode } from "react";
import { Navbar } from "./_components/Navbar";
import { SmartNavigation } from "./_components/SmartNavigation";

export default function BlogPagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col items-center px-4 pt-4">
        <main className="w-full max-w-5xl pb-20">
          <div className="flex w-full items-start py-4">
            <SmartNavigation />
          </div>
          {children}
        </main>
      </div>
    </>
  );
}
