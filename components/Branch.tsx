"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { branch } from "@/data";
import { PinContainer } from "./ui/Pin";


const Branch = () => {
  return (
    <div id="branch" className="py-20">
      <h1 className="heading">
        PPIA NSW {" "}
        <span className="text-red">branches</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {branch.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title= {item.link}
              href= {item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute scale-50 "
                />
              </div>

              <h1 className="text-yellow-200 font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                 
                <div className="flex items-center">
                  {/* icons for events icon */}
                  {/* {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}*/}
                  {/*<a href={item.committee}>
                    <p className="flex lg:text-xl md:text-xs text-sm text-yellow-200">
                      Committee Introduction
                    </p>
                  </a>*/}
                </div>
                
                

                <div className="flex justify-center items-center">
                  <a href={item.link}>
                    <p className="flex lg:text-xl md:text-xs text-sm text-yellow-200">
                      Check out their Instagram
                    </p>
                  </a>
                  <FaLocationArrow className="ms-3" color="#D6C8A5" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branch;
