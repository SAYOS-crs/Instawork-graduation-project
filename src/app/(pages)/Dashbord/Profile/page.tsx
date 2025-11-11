"use client";
import React from "react";
import { FaRegEdit } from "react-icons/fa";

export default function page() {
  return (
    <section className="bg-primry-background min-h-screen w-full">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* ///////////////// right side //////////////////// */}
        <div className=" h-screen w-full md:border-r-2 border-main-background p-2">
          <div className="-500 text-center my-15">
            <figure className="p-3">
              <span className="bg-main-background w-60 h-60 inline-block"></span>
            </figure>
            <figcaption className=" ps-5 p-3 text-left flex flex-col gap-3">
              <h3 className=" inline-block">Name : Lorem, ipsum dolor.</h3>

              <h3>Skills : Lorem, ipsum.</h3>
              <h3>Age : Lorem, ipsum.</h3>

              <span className="text-center border-t-2 border-main-background pt-2">
                {" "}
                - bio -
              </span>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, cum?
              </p>
            </figcaption>
          </div>
        </div>
        {/* ///////////////// right side //////////////////// */}
        {/* /// */}
        {/* /// */}
        {/* ////////////////// left side //////////////////// */}
        <div className=" md:col-span-2 min-h-screen w-full text-right">
          <div className=" px-5 my-15">
            {/* /////////////////////// */}
            <h3 className="border-b-1 border-main-background px-2 py-7">
              01141874204 : Phone Number
            </h3>
            {/* Phone Number */}
            {/* /// */}
            <h3 className="border-b-1 border-main-background px-2 py-7">
              01557212467 : Second Phone Number
            </h3>
            {/*Second Phone Number */}
            {/* /// */}
            <h3 className="border-b-1 border-main-background px-2 py-7">
              Eslam.mohamed.ki123@gmail.com : Email
            </h3>
            {/* Email */}
            {/* /// */}
            <address className="border-b-1 text-xl font-bold border-main-background px-2 py-7">
              egypt / giza : Address
            </address>
            {/* Address */}
            {/* /// */}
            <h3 className="border-b-1 border-main-background px-2 py-7">
              Male : Gender
            </h3>
            {/* Gender */}
            {/* /// */}
            <h3 className="border-b-1 border-main-background px-2 py-7">
              10 / 10 / 2000 : Date Of Birth
            </h3>
            {/* Date Of Birth */}
            {/* /////////////////////// */}
            {/* /////////////// work imges //////////////// */}
            {/* <div className="flex flex-row flex-wrap justify-center gap-8 my-10   ">
              <div className="h-45 w-45  bg-gray-700"></div>
              <div className="h-45 w-45  bg-gray-700"></div>
              <div className="h-45 w-45  bg-gray-700"></div>
              <div className="h-45 w-45  bg-gray-700"></div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
