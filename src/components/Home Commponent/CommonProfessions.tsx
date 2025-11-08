import React from "react";
import RogBorder from "../RogBorder/RogBorder";
import { GiBlacksmith, GiDrill } from "react-icons/gi";
import { RiBrush4Line } from "react-icons/ri";
import { IoIosHammer } from "react-icons/io";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCards";

export default function CommonProfessions() {
  return (
    <>
      <div className="bg-linear-to-r from-[#000000] to-[#434343] bg-fixed mb-10 grid md:grid-cols-2 lg:grid-cols-4   ">
        <div className=" md:col-span-2 lg:col-span-4 relative overflow-hidden ">
          <h2 className="bg-primry-background text-main-background p-2 text-3xl font-bold my-1 CommonBorder tracking-widest">
            Common professions
          </h2>

          <p className="text-medium my-5">
            Choose from a wide range of speciali zations.
          </p>
        </div>
      </div>
      <div>
        <InfiniteMovingCardsDemo />
      </div>
      <div>
        <header className="mb-10">
          <h3 className="tracking-widest text-2xl p-2">Why instawork ?</h3>
          <p>{"مزايا تجعلنا الخيار الأفضل"}</p>
        </header>
        <div>
          {/*  fixed slider */}
          <div className="relative">
            <div className="sticky top-0 h-70 flex flex-col items-center justify-center bg-main-background">
              <h2 className="text-4xl">High reliability</h2>
              <p>All workers are certified and rated by real clients. </p>
            </div>

            <div className="sticky top-0 h-70 flex flex-col items-center justify-center bg-primry-background text-main-background">
              <h2 className="text-4xl">save time</h2>
              <p>Find the right worker in minutes instead of days</p>
            </div>
            <div className="sticky top-0 h-70 flex flex-col items-center justify-center bg-main-background text-primry-background">
              <h2 className="text-4xl">wide network</h2>
              <p>Access to thousands of skilled workers in all specialties</p>
            </div>
            <div className="sticky top-0 h-70 flex flex-col items-center justify-center bg-primry-background text-main-background">
              <h2 className="text-4xl">Quality guaranteed</h2>
              <p>A transparent evaluation system ensures quality of service.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
