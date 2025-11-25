import React from "react";
import RogBorder from "../RogBorder/RogBorder";
import { GiBlacksmith, GiDrill } from "react-icons/gi";
import { RiBrush4Line } from "react-icons/ri";
import { IoIosHammer } from "react-icons/io";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCards";

export default function CommonProfessions() {
  return (
    <>
      <div className="relative bg-fixed mb-12 grid md:grid-cols-2 lg:grid-cols-4 overflow-hidden">
        <div className="md:col-span-2 lg:col-span-4 relative overflow-hidden py-8">
          <div className="absolute inset-0 bg-linear-to-r from-primry-background via-purple-400 to-primry-background opacity-90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnIHZpZXdCb3g9JzAgMCA2MCA2MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48Y2lyY2xlIGN4PSczMCcgY3k9JzMwJyByPScyJyBmaWxsPSd3aGl0ZScgb3BhY2l0eT0nMC4xJy8+PC9zdmc+')] opacity-20"></div>
          <div className="relative z-10 text-center px-6">
            <h2 className="text-main-background text-4xl font-bold tracking-wide mb-3 drop-shadow-lg">
              Common professions
            </h2>
            <div className="h-1 w-16 bg-white mx-auto mb-4 rounded-full shadow-lg"></div>
            <p className="text-lg text-white font-medium tracking-wide drop-shadow">
              Choose from a wide range of specializations.
            </p>
          </div>
        </div>
      </div>
      <div className="py-6">
        <InfiniteMovingCardsDemo />
      </div>
    </>
  );
}
