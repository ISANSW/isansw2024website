import React from "react"
import MagicButton from "./ui/MagicButton";
import { FaUser, FaBullseye, FaEye } from "react-icons/fa6";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const MISSIONISA = () => {
  return (
    <div className="pb-20 pt-36">
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center "
      >
        
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
        
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Association Organisation Chapter with 7 Branches
          </p>

          <TextGenerateEffect
            words="Indonesian Student Association New South Wales"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            A non-profit organization that serves as the NSW chapter of Perhimpunan Pelajar Indonesia Australia, the Indonesian Student Association of Australia.
          </p>
          <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
            <a href="#vision">
              <MagicButton
                title="VISION"
                icon={<FaEye />}
                position="right"
              />
            </a>
            <a href="#mission">
              <MagicButton
                title="MISSION"
                icon={<FaBullseye />}
                position="right"
              />
            </a>
            <a href="#committee">
              <MagicButton
                title="COMMITTEES"
                icon={<FaUser />}
                position="right"
              />
            </a>
          </div>

          <div className="my-20 flex flex-col  items-center justify-center w-full gap-4">
            <h1 className="heading" id="vision">
              Our
              <span className="text-red"> Vision</span>
            </h1>
            <p className="my-10 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Enhance ISA NSW into a vibrant and inclusive community for Indonesian students.
            </p>
          </div>
          <div className="my-20 flex flex-col items-center justify-center w-full gap-4">
            <h1 className="heading" id="mission">
              Our
              <span className="text-red"> Mission</span>
            </h1>
            <p className="my-10 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Connect Indonesian students by building a supportive community that shares knowledge and expertise.
            </p>
            <p className="my-10 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Empower to support, connect, and collaborate with NSW PPIA branches, inspiring a positive relationship.
            </p>
            <p className="my-10 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Establish relationships with PPI branches, NGOs, and external parties to create unity among Indonesian students.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MISSIONISA
