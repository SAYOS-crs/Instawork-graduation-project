import AccordionCommponent from "@/components/Home Commponent/Accordin";
import CommonProfessions from "@/components/Home Commponent/CommonProfessions";
import AD from "@/components/Home Commponent/AD";
import Tastmonial from "@/components/Home Commponent/tastmonial";
import HeroParallaxDemo from "@/components/Home Commponent/Parallax";
import { useSession } from "next-auth/react";
import { cookies } from "next/headers";
import { decode, getToken } from "next-auth/jwt";

export default async function Home() {
  return (
    <>
      <section className="  bg-linear-to-r from-[#000000] to-[#434343] text-primry-background text-center flex flex-col justify-center  ">
        {/* header */}
        {/* <div
          className={` bg-[url(./_imgs/az9nwc.png)] max-md:bg-center bg-fixed bg-cover bg-bg-no-repeat flex flex-col justify-center h-screen`}
        >
          <header className="pb-7">
            <h1 className="text-5xl text-white font-bold">
              {" "}
              Match your skills to <br /> your career opportunities{" "}
            </h1>
            <p className="mt-5 text-white">
              Instajob is a platform that connects craftspeople with clients.{" "}
              <br /> Whether you're looking for a skilled craftsman or a new job
              opportunity, <br /> we're here to help.
            </p>
          </header>

          <div className="mt-5">
            <Button
              color="default"
              variant="ghost"
              className="text-white m-2 outline-none hover:text-black"
            >
              Find a job
            </Button>
            <Button
              color="default"
              variant="ghost"
              className="text-white m-2 outline-none hover:text-black"
            >
              View services
            </Button>
          </div>
        </div> */}
        <HeroParallaxDemo />
        {/* tastmonial */}

        <div className="  overflow-hidden">
          <Tastmonial />
        </div>

        {/* CommonProfessions */}
        <CommonProfessions />

        {/* AD */}
        <div id="AD" className="my-15">
          <header className="my-10">
            <h3 className="text-3xl tracking-widest">
              Distinguish your offer and make the customer notice you first
            </h3>
          </header>

          <AD />
        </div>

        {/* Comments and ratings */}
        {/* ؟؟ */}

        {/* Frequently Asked Questions */}

        <div className="w-7/8 mx-auto my-15 AccordianSpan ">
          <header>
            <h2 className="my-5 text-3xl tracking-wider">
              Frequently Asked Questions
            </h2>
          </header>
          <AccordionCommponent />
        </div>
      </section>
    </>
  );
}
