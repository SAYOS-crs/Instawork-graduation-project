import { Button } from "@heroui/button";
import Link from "next/link";
import React from "react";
import { FaRegHandshake } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Instawork_icon from "@/../public/Icon/Instawork-logo-white.png";
export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <div className="text-primry-background bg-linear-to-b from-main-background via-main-background to-slate-900 font-poppins">
      <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 container w-[90%] text-center m-auto pt-12 pb-8 pointer">
        <div className="SpanHover">
          <h3 className="my-5 bg-[#F8F6F0] text-main-background p-3 rounded-lg font-bold text-lg">
            {t("contact_us")}
          </h3>

          <div className="text-primry-background my-4 space-y-4">
            <div className="flex py-2 align-baseline w-fit lg:me-auto m-auto hover:translate-x-2 transition-all duration-300">
              <span className="">
                <svg
                  className="w-6 h-6 text-primry-background"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                  <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                </svg>
              </span>

              <span className="px-2">{t("email")}</span>
            </div>

            <div className="flex py-2 align-baseline w-fit lg:me-auto m-auto hover:translate-x-2 transition-all duration-300">
              <span className="">
                <svg
                  className="w-6 h-6 text-primry-background"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                </svg>
              </span>
              <span className="pe-2">{t("phone")}</span>
            </div>

            <div className="flex py-2 align-baseline w-fit lg:me-auto m-auto hover:translate-x-2 transition-all duration-300">
              <span className="">
                <svg
                  className="w-6 h-6 text-primry-background"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                  />
                </svg>
              </span>

              <span className="pe-2">{t("location")}</span>
            </div>
          </div>
        </div>

        <div className="SpanHover">
          <h3 className="my-5 bg-[#F8F6F0] text-main-background p-3 rounded-lg font-bold text-lg">
            {t("services")}
          </h3>

          <div className="my-4 text-primry-background space-y-3">
            <div className="py-2 hover:translate-x-2 transition-all duration-300">
              <span className="">{t("for_clients")}</span>
            </div>
            <div className="py-2 hover:translate-x-2 transition-all duration-300">
              <span>{t("for_workers")}</span>
            </div>
            <div className="py-2 hover:translate-x-2 transition-all duration-300">
              <span>{t("post_job")}</span>
            </div>
            <div className="py-2 hover:translate-x-2 transition-all duration-300">
              <span>{t("view_services")}</span>
            </div>
            <div className="py-2 hover:translate-x-2 transition-all duration-300">
              <span>{t("blog")}</span>
            </div>
          </div>
        </div>

        <div className="pointer SpanHover">
          <h3 className="my-5 bg-linear-to-r bg-[#F8F6F0] text-main-background p-3 rounded-lg font-bold text-lg">
            {t("quick_links")}
          </h3>

          <div className="my-4 text-primry-background space-y-3">
            <div className="py-2 hover:translate-x-2 transition-all duration-300">
              <Link href={"/services"}>
                <span>{t("about_site")}</span>
              </Link>
            </div>
            <div className="py-2 hover:translate-x-2 transition-all duration-300">
              <Link href={""}>
                <span>{t("how_it_works")}</span>
              </Link>
            </div>
            <div className="py-2 hover:translate-x-2 transition-all duration-300">
              <Link href={""}>
                <span>{t("faq")}</span>
              </Link>
            </div>
            <div className="py-2 hover:translate-x-2 transition-all duration-300">
              <Link href={""}>
                <span>{t("privacy_policy")}</span>
              </Link>
            </div>
            <div className="py-2 hover:translate-x-2 transition-all duration-300">
              <Link href={""}>
                <span>{t("terms_of_service")}</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-right">
          <h2 className="my-5 text-3xl  font-bold">
            {/* <FaRegHandshake className="text-5xl inline-block me-3 text-orange-400" />{" "}
            Instawork */}
            <Image
              className="mx-auto size-20"
              src={Instawork_icon}
              width={50}
              height={50}
              alt="s"
            />
          </h2>

          <div className="my-4 text-primry-background">
            <p className="py-3 px-5 leading-relaxed text-lg">
              {t("description")}
            </p>
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-4 py-8 text-primry-background font-Lyon border-t border-primry-background/20">
          <p className="inline-block text-lg font-semibold">{t("copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
