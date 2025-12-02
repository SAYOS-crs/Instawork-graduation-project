"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { GiBlacksmith, GiDrill } from "react-icons/gi";
import { RiBrush4Line } from "react-icons/ri";
import { IoIosHammer } from "react-icons/io";
import { useTranslations } from "use-intl";
export function InfiniteMovingCardsDemo() {
  const t = useTranslations("InfiniteMovingCards");

  const services = [
    { label: t("items.0.label"), NumberOfWorkers: 50, icon: GiBlacksmith },
    { label: t("items.1.label"), NumberOfWorkers: 70, icon: RiBrush4Line },
    { label: t("items.2.label"), NumberOfWorkers: 20, icon: IoIosHammer },
    { label: t("items.3.label"), NumberOfWorkers: 120, icon: GiDrill },
  ];

  return (
    <div className="h-160 rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={services} direction="right" speed="normal" />
    </div>
  );
}
