import React from "react";
import RogBorder from "../RogBorder/RogBorder";
import { MdStarRate } from "react-icons/md";
import { Button } from "@heroui/button";

export default function AD() {
  const ADs = [
    {
      plan: "Plan 1",
      price: 50,
      rank: "I",
      postedService: "- Post one Service for ",
      PostedDate: "10 days",
    },
    {
      plan: "Plan 2",
      price: 100,
      rank: "I I",
      postedService: "- Post your Services for ",
      PostedDate: "20 days",
      Additionalfeatures: [
        "Show up among the first applicants on the list of job applicants",
      ],
    },
    {
      plan: "Plan 3",
      price: 125,
      rank: "I I I",
      postedService: "- Post your Services for ",
      PostedDate: "30 days",
      Additionalfeatures: [
        "Show up among the first applicants on the list of job applicants",
        "Recommend clients who are interested in your fields.",
      ],
    },
  ];

  return (
    <>
      <div className="w-8/10 mx-auto gap-6 justify-center grid md:grid-cols-2 xl:grid-cols-3">
        {ADs.map((ad, index) => (
          <div
            key={index}
            className=" transition-all  custom-grid-item  flex flex-col gap-y-6 justify-between"
          >
            <RogBorder>
              <div className="p-5 mx-auto">
                <div className="border-b-1 p-5 my-2">
                  <h3 className="text-3xl border-x-1 tracking-wider">
                    {ad.plan}
                  </h3>
                  <h4 className="bg-primry-background text-main-background inline-block py-2 px-3 my-2 rounded-sm">
                    {ad.price} EG
                  </h4>
                </div>

                <span className="text-5xl ">{ad.rank}</span>
                <p className="text-xl py-2 px-3 border-x-1">
                  {" "}
                  <MdStarRate className="inline-block text-2xl" />{" "}
                  {ad.postedService}{" "}
                  <span className="bg-primry-background text-main-background p-1 rounded-sm block">
                    {" "}
                    {ad.PostedDate}{" "}
                  </span>
                </p>

                {ad.Additionalfeatures?.map((feature, index) => (
                  <p key={index} className="py-7">
                    {" "}
                    <MdStarRate className="inline-block text-2xl" /> {feature}{" "}
                  </p>
                ))}
                <p className="my-4 text-lg">
                  {" "}
                  Highlight your Service. This will put you on the early offer
                  lists, which means you have a long window of time until the
                  earliest date you can reach investigators.
                </p>

                <p>
                  Make your offering stand out from the crowd! Artisanes' custom
                  upgrade packages help you increase your visibility, attract
                  clients, and increase your chances of being selected for the
                  right projects.
                </p>
              </div>
            </RogBorder>
            <Button className="outline-none">Check out</Button>
          </div>
        ))}
      </div>
    </>
  );
}
