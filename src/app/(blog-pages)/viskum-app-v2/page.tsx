import { fitnessHomePage } from "@/assets/viskum-app-v1";
import { H1 } from "@/components/h1";
import { H2 } from "@/components/h2";
import { H3 } from "@/components/h3";
import { P } from "@/components/p";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function ViskumAppProjectPage() {
  const buttonTw =
    "flex w-full items-center rounded-lg bg-blue-600 py-4 md:w-fit text-white font-bold text-xl";

  return (
    <div className="space-y-2 pb-24">
      <div className="space-y-6">
        <H1>Viskum App V2</H1>
        <P className="text-black">Begyndelse: 05/09-2023</P>
      </div>
      <p>Kommer senere</p>
    </div>
  );
}
