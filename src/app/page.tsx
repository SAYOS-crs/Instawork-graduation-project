import AccordionCommponent from "@/components/Home Commponent/Accordin";
import CommonProfessions from "@/components/Home Commponent/CommonProfessions";
import AD from "@/components/Home Commponent/AD";
import Tastmonial from "@/components/Home Commponent/tastmonial";
import FloatingCards from "@/components/Home Commponent/FloatingCards";
import SpotlightHero from "@/components/Home Commponent/SpotlightHero";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");
  return (
    <>
      <section className="text-primry-background text-center flex flex-col justify-center">
        {/* Spotlight Hero */}
        <SpotlightHero />

        {/* Floating Cards Animation */}
        <FloatingCards />

        {/* tastmonial */}

        <div className="  overflow-hidden">
          <Tastmonial />
        </div>

        {/* CommonProfessions */}
        <CommonProfessions />

        {/* AD */}
        <div
          id="AD"
          className="my-20 py-12 bg-linear-to-b from-gray-50 to-white"
        >
          <div className="container mx-auto px-4">
            <header className="mb-16 text-center">
              <h3 className="text-4xl md:text-5xl font-bold tracking-wider text-main-background mb-4">
                {t("page_ad1")}
              </h3>
              <p className="text-xl text-gray-600 mb-6">{t("page_ad2")}</p>
              <div className="h-1 w-24 bg-linear-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </header>
            <AD />
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="w-full mx-auto my-20 py-16 bg-linear-to-b from-white via-gray-50 to-white">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-main-background tracking-wider mb-4">
                {t("title")}
              </h2>
              <p className="text-lg text-gray-600">{t("title")}</p>
              <div className="h-1 w-24 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
            </header>
            <div className="max-w-4xl mx-auto">
              <AccordionCommponent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
