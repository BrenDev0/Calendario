'use client'

import Calendario from "@/components/Calendario";
import SideBar from "@/components/SideBar";

export default function Home() {

  return (
    <main className="h-full flex items-center justify-around">
      <SideBar />
      <Calendario />
    </main>
  );
}
