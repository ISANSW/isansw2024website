import React from 'react'
import Link from 'next/link';

const NotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="font-extrabold tracking-widest text-white text-9xl">404</h1>
      <div className="bg-[#92140C] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <div className="mt-5">
        <Link href="/" passHref legacyBehavior>
          <a className="relative inline-block text-sm font-medium text-[#D8A543] group active:text-blue-200 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#F9F6EE] group-hover:translate-y-0 group-hover:translate-x-0" />
            <span className="relative block px-8 py-3 bg-[#92140C] border border-current">
              Go Home
            </span>
          </a>
        </Link>
      </div>
    </main>
  )
}

export default NotFound