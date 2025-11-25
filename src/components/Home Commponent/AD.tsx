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
      <div className="w-full mx-auto gap-8 justify-center grid md:grid-cols-2 xl:grid-cols-3 px-4 font-poppins">
        {ADs.map((ad, index) => {
          const isPopular = index === 1;
          const gradients = [
            "from-blue-50 to-blue-100",
            "from-purple-50 to-purple-100",
            "from-orange-50 to-orange-100",
          ];
          const borderColors = [
            "border-blue-200 hover:border-blue-400",
            "border-purple-300 hover:border-purple-500",
            "border-main-background hover:border-orange-600",
          ];
          const accentColors = [
            "from-blue-500 to-blue-600",
            "from-purple-500 to-purple-600",
            "from-main-background to-orange-600",
          ];

          return (
            <div
              key={index}
              className={`relative transition-all duration-300 rounded-2xl border-2 ${
                borderColors[index]
              } bg-linear-to-br ${
                gradients[index]
              } h-full custom-grid-item flex flex-col gap-y-6 justify-between ${
                isPopular
                  ? "lg:scale-105 shadow-2xl ring-2 ring-purple-400"
                  : "hover:shadow-xl"
              } overflow-hidden`}
            >
              {/* Premium badge */}
              {isPopular && (
                <div className="absolute top-0 right-0 bg-linear-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-bl-xl text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="p-8 mx-auto w-full">
                <div className="border-b-2 border-gray-200 pb-6 mb-6">
                  <h3 className="text-3xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
                    {ad.plan}
                  </h3>
                  <div
                    className={`inline-block bg-linear-to-r ${accentColors[index]} text-white py-2 px-4 rounded-lg font-bold shadow-lg`}
                  >
                    {ad.price} EG
                  </div>
                </div>

                <div className="mb-6">
                  <span
                    className={`text-6xl font-black bg-linear-to-r ${accentColors[index]} bg-clip-text text-transparent`}
                  >
                    {ad.rank}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MdStarRate className="text-2xl text-yellow-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 font-medium">
                        {ad.postedService}
                      </p>
                      <span
                        className={`inline-block bg-linear-to-r ${accentColors[index]} text-white px-3 py-1 rounded-lg text-sm font-semibold mt-2`}
                      >
                        {ad.PostedDate}
                      </span>
                    </div>
                  </div>

                  {ad.Additionalfeatures?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <MdStarRate className="text-2xl text-yellow-500 shrink-0 mt-1" />
                      <p className="text-gray-700 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 text-sm text-gray-600 leading-relaxed border-t-2 border-gray-200 pt-6">
                  <p className="font-semibold text-gray-700">
                    🎯 Highlight your Service and get noticed first!
                  </p>
                  <p>
                    Stand out from the crowd with our custom upgrade packages
                    designed to increase your visibility, attract more clients,
                    and boost your chances of being selected for the perfect
                    projects.
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8">
                <Button
                  className={`w-full py-6 px-6 font-bold text-lg rounded-lg transition-all duration-300 bg-linear-to-r ${accentColors[index]} text-white hover:shadow-lg hover:scale-105`}
                >
                  Check out Plan
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
