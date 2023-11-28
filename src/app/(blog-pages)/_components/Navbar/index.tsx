import { profile } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { SmartNavigation } from "../SmartNavigation";
import { ThemeSwitcher } from "@/app/_components/ThemeSwitcher";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex flex-col items-center border-b bg-background bg-opacity-70 backdrop-blur-[8px] 2xl:hidden">
      <nav className="mx-auto flex h-16 w-full items-center justify-center border-b px-4">
        <div className="flex w-full max-w-7xl justify-between">
          <Link href="/">
            <Image
              priority
              src={profile}
              alt="profile"
              width={48}
              height={48}
              className="aspect-square h-12 w-12 rounded-full"
            />
          </Link>
          <ThemeSwitcher inNavbar />
        </div>
      </nav>
      <div className="flex w-full max-w-7xl px-2 py-4 2xl:hidden">
        <SmartNavigation />
      </div>
    </header>
  );
}
