'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { isaCommittee2024 } from '@/data'

export default function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const numberOfItems = isaCommittee2024.length
    const radius = 1100
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const angleIncrement = (2 * Math.PI) / numberOfItems

    isaCommittee2024.forEach((isaCommittee2024, i) => {
      const item = document.createElement('div')
      item.className = 'item absolute top-0 left-0 w-[800px] h-[80px] cursor-pointer'
      const p = document.createElement('p')
      const count = document.createElement('span')
      p.textContent = isaCommittee2024.commName
      count.textContent = `(${i + 1})`
      item.appendChild(p)
      p.appendChild(count)
      galleryRef.current?.appendChild(item)

      const angle = i * angleIncrement
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      const rotation = (angle * 180) / Math.PI

      gsap.set(item, {
        x: x + "px",
        y: y + "px",
        rotation: rotation,
      })

      // Add mouseover and mouseout event listeners here
      // (Similar to the original code, but use TypeScript syntax)
      item.addEventListener("mouseover", () => {
            const imgSrc = `./isanswCommittee/img${i + 1}.jpeg`;
            const img = document.createElement("img");
            img.src = imgSrc;
            img.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
            cursorRef.current?.appendChild(img);

            gsap.to(img, {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                duration: 1,
                ease: "power3.out"
            });
        });

        item.addEventListener("mouseout", function () {
            const imgs = cursorRef.current?.getElementsByTagName("img");
            if (imgs && imgs.length > 0) {
                const lastImg = imgs[imgs.length - 1];
                Array.from(imgs).forEach((img, index) => {
                if (img !== lastImg) {
                    gsap.to(img, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    duration: 1,
                    ease: "power3.out",
                    onComplete: () => {
                        setTimeout(() => {
                        img.remove();
                        }, 1000);
                    },
                    });
                }
                });

                gsap.to(lastImg, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1,
                ease: "power3.out",
                delay: 0.25,
                });
            }
            });
    })

    const updatePosition = () => {
      const scrollAmount = window.scrollY * 0.0005
      document.querySelectorAll('.item').forEach((item, index) => {
        const angle = index * angleIncrement + scrollAmount
        const x = centerX + radius * Math.cos(angle)
        const y = centerY + radius * Math.sin(angle)
        const rotation = (angle * 180) / Math.PI

        gsap.to(item, {
          duration: 0.05,
          x: x + "px",
          y: y + "px",
          rotation: rotation,
          ease: "elastic.out(1, 0.3)",
        })
      })
    }

    updatePosition()
    document.addEventListener('scroll', updatePosition)

    return () => {
        document.removeEventListener('scroll', updatePosition)
        document.querySelectorAll('.item').forEach(item => {
            item.removeEventListener('mouseover', () => {})
            item.removeEventListener('mouseout', () => {})
        })
    }
  }, [])

  return (
    <div ref={galleryRef} className="fixed w-[200%] h-full left-[-75%] overflow-hidden" />
  )
}