'use client'

import Calendario from "@/components/Calendario";
import FormModal from "@/components/FormModal";
import SideBar from "@/components/SideBar";
import { useGlobal } from "@/context/GlobalContext";

export default function Home() {
  const { formModal} = useGlobal()

  return (
    <main className="h-full flex flex-col items-center justify-around lg:flex-row">
      <SideBar />
      <Calendario />
      {
        formModal && <FormModal />
      }
    </main>
  );
}
