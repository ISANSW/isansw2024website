'use client'
import React from 'react';

import { useEffect } from 'react'
import Cursor from '@/components/committeeCursor'
import Gallery from '@/components/committeeGallery'
import Navigation from '@/components/committeeNavigation'
import Footer from '@/components/Footer'

const committee = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Implement scroll logic here if needed
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Cursor />
        <Navigation />
        <Gallery />
        
      </div>
    </main>
  )
}

export default committee;