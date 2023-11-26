import { profile } from "@/assets";
import Image from "next/image";
import Project from "./_components/Project";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center px-4">
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
          <Project link="/viskum-app-v1" text="Viskum App" />
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
