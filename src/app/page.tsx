import { profile } from "@/assets";
import Image from "next/image";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-fit flex-col items-center pb-24 pt-52 text-center sm:pt-72 ">
        <Image
          src={profile}
          alt="profile"
          className="profile-blur h-24 w-24 rounded-full"
        />
        <div className="space-y-2">
          <p className="text-4xl font-extrabold text-blue-500">
            Tobias T. Viskum
          </p>
          <p className="font-medium tracking-tight text-blue-800">Hej</p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center space-y-8">
        <div className="w-full sm:w-[500px]">
          <p className="pb-2 text-sm text-blue-900">Projekter</p>
          <Link
            href="/viskum-app"
            className="group flex items-center justify-between rounded-xl border border-black border-opacity-30 bg-white px-8 py-6 font-medium underline-offset-2 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50"
          >
            <p className="text-2xl text-blue-800 transition-all group-hover:text-blue-700 group-focus-visible:text-blue-700">
              Første projekt (V1, V2, V3)
            </p>
            <ChevronRightIcon className="h-7 w-7 text-blue-800 transition-all group-hover:translate-x-2 group-hover:scale-110 group-hover:text-blue-700 group-focus-visible:translate-x-2 group-focus-visible:scale-110 group-focus-visible:text-blue-700" />
          </Link>
        </div>
        <div className="w-full sm:w-[500px]">
          <p className="pb-2 text-sm text-blue-900">Teknologier</p>
          <div>
            Tailwind, NextJS, Vite, React, CSS, CSS-Modules, MySQL, Redis
          </div>
        </div>
      </div>
    </div>
  );
}
