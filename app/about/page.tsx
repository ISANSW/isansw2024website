import React from 'react'
import { aboutItems } from "@/data";

import MissionISA from "@/components/MissionISA";
import Committee from "@/components/CommitteeISA";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const about = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={aboutItems} />
        <MissionISA />
        <Committee />
        <Footer />
      </div>
    </main>
  )
}

export default about;