"use client";

import React from "react";

import { companies, SponsorList } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Sponsor = () => {
  return (
    <section id="sponsor" className="py-20">
      <h1 className="heading">
        Our
        <span className="text-red"> Sponsor</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={SponsorList}
            direction="right"
            speed="slow"
          />
        </div>
        <br/>
        <h2 className=" text-xl text-white-300 font-semibold">
          Hover On Sponsor our Business Sponsor to Know More
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-20 md:gap-20 max-lg:mt-10">
          
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="relative group flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className=" object-scale-down md:w-20 w-30"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 ? 100 : 185}
                  className=" object-scale-down md:w-48 w-20"
                />
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  // Use `dangerouslySetInnerHTML` to inject HTML content safely
                  dangerouslySetInnerHTML={{ __html: company.promo }}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
