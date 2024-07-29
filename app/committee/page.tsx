'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';

const committee = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading placeholder
  }

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      {/*<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">*/}
      
        <h1 className="font-extrabold tracking-widest text-white text-9xl">COMING</h1>
        <div className="bg-[#92140C] px-2 text-sm rounded rotate-12 z-10 absolute">
        Page is in Progress
        </div>
        <button className="mt-5">
          <Link href="/" passHref legacyBehavior>
            <a className="relative inline-block text-sm font-medium text-[#D8A543] group active:text-blue-200 focus:outline-none focus:ring">
              <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#F9F6EE] group-hover:translate-y-0 group-hover:translate-x-0" />
              <span className="relative block px-8 py-3 bg-[#92140C] border border-current">
                Go Home
              </span>
            </a>
          </Link>
        </button>
    </main>
  )
}

export default committee;