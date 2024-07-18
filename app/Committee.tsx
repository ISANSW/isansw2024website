
import { navItems } from "@/data";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import React, { useEffect } from "react";


const Committee = () => {
  return (
  <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
      </div>
    </main>
  );
};

export default Committee;
