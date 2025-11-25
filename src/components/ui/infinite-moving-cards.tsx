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
        "scroller relative z-20 max-w-7xl overflow-hidden bg-linear-to-r from-transparent via-white to-transparent rounded-3xl",
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
          <li
            className="relative w-[350px] m-1 max-w-full shrink-0 rounded-2xl text-main-background bg-linear-to-br from-primry-background to-gray-100 md:w-[450px] border-2 border-primry-background/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            key={`${item}-${idx}`}
          >
            <div className="h-fit flex flex-col gap-5 mx-auto justify-center p-8 selection:bg-main-background selection:text-primry-background">
              <div className="bg-linear-to-br from-blue-500 to-cyan-600 text-white w-fit mx-auto cursor-pointer hover:shadow-xl transition-all my-3 p-5 rounded-full shadow-lg">
                <item.icon className="text-5xl mx-auto" />
              </div>
              <header className="my-2 text-3xl font-bold text-main-background">
                {item.label}
              </header>
              <span className="text-lg text-main-background font-semibold">
                عدد مقدمي الخدمات ({item.NumberOfWorkers}+)
              </span>
              <p className="mb-3 text-lg text-main-background leading-relaxed">
                خدمات تساعدك في إنجاز عملك مع الشخص المناسب للمهمة
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
