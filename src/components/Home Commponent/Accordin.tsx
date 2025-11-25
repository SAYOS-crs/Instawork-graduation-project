"use client";
import { Accordion, AccordionItem } from "@heroui/react";
import Link from "next/link";

export default function AccordionCommponent() {
  const Content = [
    // gude >> header = label  ,   content   ,  href = Navigation Path  ,  LinkContent  ,  ContentAfterLink //

    {
      label: "What is InstaWork ?",
      content: `InstaWork is a freelance platform specifically designed for skilled tradespeople in Egypt. The platform aims to address the current challenges faced by both clients and workers in this sector. For clients, finding reliable and skilled workers for services like painting or electrical work is often difficult and relies heavily on personal connections, with no clear mechanism for pre-evaluating work quality. For workers, their livelihood depends primarily on their network of contacts, limiting their opportunities to secure new tasks and making them vulnerable to market fluctuations. InstaWork seeks to bridge this gap by providing a structured environment that connects clients with skilled workers, making it easier for them to find the skills they need and for workers to expand their client base.`,
    },
    // arabic = docs > { ملخص مشروع ومتطلبات التصميم} > { وصف المشروع والفكرة الرئيسية }

    {
      label: "InstaWork objectives",
      content: `The InstaWork app aims to achieve several key objectives. First, it aims to provide an easy and efficient way for clients to find qualified workers for the jobs they need, reducing the effort and time spent on traditional searches.
    Second, it seeks to enable workers to professionally showcase their portfolios, allowing clients to assess the quality of their work before hiring. Third, the app makes it easy for clients to post the tasks they need, with the ability to specify a precise job description and budget. Fourth, the app provides workers with ongoing job opportunities, freeing them from complete dependence on personal relationships and opening up new horizons for them. A further objective is to regulate and secure payments between clients and workers through the platform, ensuring the satisfaction of both parties and protecting their financial rights. `,
    },
    // arabic = docs > { ملخص مشروع ومتطلبات التصميم} > {ألهداف الرئيسية للتطبيق}

    {
      label: "About creating an account",
      content: `You can easily create an account from `,
      href: "/Register",
      LinkConent: " Create Account",
      ContentAfterLink:
        "Users can post their services as providers or their work as clients, and they can subscribe to packages designed to feature their services or work at the top of the page and ensure they are seen first.",
    },

    {
      label: "Services Dashbord",
      content: `In the Services section of the Dashbord , you can create, modify, or delete services, and you can post your published services. `,
      href: "#AD",
      LinkConent: "View Plans",
    },

    {
      label: "Jobs Dashbord",
      content: `You can add, modify, or delete a job from your Dashbord. You can also browse applicants for a job you posted, select an applicant, and view their details. `,
    },
  ];

  return (
    <div className="space-y-4 font-poppins">
      <Accordion className="outline-none space-y-3" variant="light">
        {Content.map((i, index) => {
          const colors = [
            {
              bg: "from-blue-50 to-blue-100",
              border: "border-blue-200 hover:border-blue-400",
              accent: "bg-linear-to-r from-blue-500 to-blue-600",
              icon: "💡",
            },
            {
              bg: "from-purple-50 to-purple-100",
              border: "border-purple-200 hover:border-purple-400",
              accent: "bg-linear-to-r from-purple-500 to-purple-600",
              icon: "🎯",
            },
            {
              bg: "from-orange-50 to-orange-100",
              border: "border-orange-200 hover:border-orange-400",
              accent: "bg-linear-to-r from-main-background to-orange-600",
              icon: "📝",
            },
            {
              bg: "from-orange-50 to-orange-100",
              border: "border-orange-200 hover:border-orange-400",
              accent: "bg-linear-to-r from-orange-500 to-orange-600",
              icon: "🚀",
            },
            {
              bg: "from-rose-50 to-rose-100",
              border: "border-rose-200 hover:border-rose-400",
              accent: "bg-linear-to-r from-rose-500 to-rose-600",
              icon: "📊",
            },
          ];
          const color = colors[index % colors.length];

          return (
            <AccordionItem
              className={`outline-none p-0 border-2 ${color.border} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg`}
              key={index + 1}
              aria-label={i.label}
              title={
                <div
                  className={`flex items-center gap-3 bg-linear-to-r ${color.bg} px-6 py-4 font-bold text-lg text-gray-800`}
                >
                  <span className="text-2xl">{color.icon}</span>
                  <span>{i.label}</span>
                </div>
              }
            >
              <article className="text-left outline-none bg-white px-6 py-6 space-y-4">
                <p className="text-gray-700 leading-relaxed tracking-wide text-base">
                  {i.content}
                  {i.href && (
                    <Link
                      className={`${color.accent} text-white px-3 py-1 rounded-lg inline-block ml-2 font-semibold hover:shadow-lg transition-all`}
                      href={i.href}
                    >
                      {i.LinkConent}
                    </Link>
                  )}
                </p>
                {i.ContentAfterLink && (
                  <p className="text-gray-600 leading-relaxed text-sm bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
                    {i.ContentAfterLink}
                  </p>
                )}
              </article>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
