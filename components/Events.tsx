import React from "react";

import { bigEvents } from "@/data";
import { Button } from "./ui/MovingBorders";
import Link from 'next/link';

const Events = () => {
  return (
    <div id="events" className="py-20 w-full">
      <h1 className="heading">
        NSW <span className="text-red">Events</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {bigEvents.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(10,16,38)",
              backgroundColor: 
                "linear-gradient(90deg, rgba(10,16,38,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <Link href={card.link} passHref legacyBehavior>
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-yellow-200 text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-300 mt-3 font-semibold" dangerouslySetInnerHTML={{ __html: card.desc }} />
              </div>
            </div>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Events;
