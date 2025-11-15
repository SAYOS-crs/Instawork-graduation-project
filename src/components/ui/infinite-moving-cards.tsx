"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import RogBorder from "../RogBorder/RogBorder";
import { GiBlacksmith, GiDrill } from "react-icons/gi";
import { RiBrush4Line } from "react-icons/ri";
import { IoIosHammer } from "react-icons/io";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    label: string;
    icon: any;
    NumberOfWorkers: number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <RogBorder>
            <li
              className="relative w-[350px] m-1 max-w-full shrink-0 rounded-xl   text-primry-background bg-main-background md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
              key={`${item}-${idx}`}
            >
              <div className=" h-fit flex flex-col gap-5 mx-auto  justify-center p-6 selection:bg-main-background  selection:text-primry-background ">
                <div className="bg-primry-background text-main-background   w-fit mx-auto cursor-pointer  hover:bg-primry-background hover:text-main-background transition-all my-3 p-4 rounded-full  ">
                  <item.icon className="text-5xl   mx-auto" />
                </div>
                <header className="my-1 text-3xl"> {item.label} </header>
                <span className="text-xl">
                  {" "}
                  {` Number of service providers in this field (${item.NumberOfWorkers}+) `}{" "}
                </span>
                <p className="mb-3 text-2xl">
                  {" "}
                  {" خدمات تساعدك في انجاز عملك مع الشخص المناسب للمهمه"}{" "}
                </p>
              </div>
            </li>
          </RogBorder>
        ))}
      </ul>
    </div>
  );
};
