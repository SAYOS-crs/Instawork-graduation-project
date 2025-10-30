import React from "react";
import { IoCheckmark } from "react-icons/io5";
import { LuUserRoundSearch } from "react-icons/lu";
import { MdPostAdd } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { TfiGallery } from "react-icons/tfi";

export default function tastmonial() {
  const provide = [
    {
      for: "client",
      header: "Find the right worker",
      text: "Choose the right person for the task and investigate him according to the ratings and his portfolio.",
      icon: LuUserRoundSearch,
    },
    {
      for: "client",
      header: "Post your Job",
      text: "Post your job with the ability to include details such as budget, location, and required skills.",
      icon: IoCheckmark,
    },

    {
      for: "worker",
      header: "Post your service",
      text: "Publish your services to be easily found by Clients, with service details such as availability, location, and more.",
      icon: MdPostAdd,
    },
    {
      for: "worker",
      header: "Facilitate finding a job ",
      text: "Search the jobs section for the job that suits your field and find out the details of the task, budget and specifications.",
      icon: TbListDetails,
    },
    {
      for: "worker",
      header: "Display your Work ",
      text: "Display photos of your most prominent work in the Gallery to reflect the quality of your work and build trust between the worker and the client.",
      icon: TfiGallery,
    },
  ];
  return (
    <>
      <header className="bg-primry-background  text-main-background py-2  relative ">
        <h2 className="tastmonial tracking-widest font-bold">
          What does the InstaWork provide?
        </h2>
      </header>

      <div className="container mx-auto grid lg:grid-cols-2 gap-10  my-15">
        <div className="grid gap-y-10   my-3">
          <header>
            <h2 className="text-3xl font-bold">For the Artisanes</h2>
          </header>
          {provide.map(
            (prov) =>
              prov.for === "worker" && (
                <div className="group hover hover:bg-primry-background hover:text-main-background max-lg:hover:scale-105 lg:hover:translate-x-[2%] lg:hover:translate-y-[2%] transition-all max-h-65 p-7  border-1 flex flex-col justify-between border-primry-background text-center">
                  <div>
                    <i className="group-hover:text-primry-background group-hover:bg-main-background inline-block bg-primry-background text-main-background text-4xl p-4 my-3  rounded-full  ">
                      <prov.icon />
                    </i>
                  </div>
                  <h3>{prov.header}</h3>
                  <article className="p-4">{prov.text}</article>
                </div>
              )
          )}
        </div>

        <div className="  my-3">
          <header className="">
            <h2 className="text-3xl font-bold">For the Clients</h2>
          </header>
          <div className="grid gap-10 my-10">
            {provide.map(
              (prov) =>
                prov.for === "client" && (
                  <div className="group hover: max-lg:hover:scale-105 lg:hover:translate-x-[-2%] lg:hover:translate-y-[2%] hover:bg-primry-background hover:text-main-background transition-all max-h-65 p-9  flex flex-col justify-between border-1 border-primry-background text-center">
                    <div>
                      <i className=" inline-block bg-primry-background text-main-background text-4xl p-4 my-3 group-hover:text-primry-background group-hover:bg-main-background  rounded-full  ">
                        <prov.icon />
                      </i>
                    </div>

                    <h3>{prov.header}</h3>
                    <article className="p-4">{prov.text}</article>
                  </div>
                )
            )}
          </div>
        </div>

        {/*  */}
      </div>
    </>
  );
}
