"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { GiBlacksmith, GiDrill } from "react-icons/gi";
import { RiBrush4Line } from "react-icons/ri";
import { IoIosHammer } from "react-icons/io";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-160 rounded-md flex flex-col antialiased bg-linear-to-r from-[#000000] to-[#434343] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={services} direction="right" speed="normal" />
    </div>
  );
}
const services = [
  { label: "حداد", NumberOfWorkers: 50, icon: GiBlacksmith },
  { label: "نقاش", NumberOfWorkers: 70, icon: RiBrush4Line },
  { label: "نجار", NumberOfWorkers: 20, icon: IoIosHammer },
  { label: "كهربائي", NumberOfWorkers: 120, icon: GiDrill },
];
