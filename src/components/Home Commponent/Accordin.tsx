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
    <Accordion className="outline-none">
      {Content.map((i, index) => (
        <AccordionItem
          className="outline-none my-5 p-2 border-b-1"
          key={index + 1}
          aria-label={i.label}
          title={i.label}
        >
          <article className="text-left outline-none">
            <p className="inline-block tracking-widest ">{i.content} </p>{" "}
            {i.href && (
              <Link
                className="inline-block px-1 text-primary-400 "
                href={i.href}
              >
                {" "}
                {i.LinkConent}{" "}
              </Link>
            )}{" "}
            {i.ContentAfterLink && <p> {i.ContentAfterLink} </p>}{" "}
          </article>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
