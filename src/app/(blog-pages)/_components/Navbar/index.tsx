import { profile } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white bg-opacity-30 backdrop-blur-[6px] dark:bg-black dark:bg-opacity-30 2xl:hidden">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center px-4">
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
      </nav>
    </header>
  );
}
