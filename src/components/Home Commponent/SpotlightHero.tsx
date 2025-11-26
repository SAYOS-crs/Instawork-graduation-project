"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@heroui/button";
import Link from "next/link";

export default function SpotlightHero() {
	const t = useTranslations("SpotlightHero");
	return (
		<div className="w-full rounded-b-md flex md:items-center md:justify-center bg-black/90 antialiased bg-grid-white/[0.02] relative overflow-hidden min-h-screen font-poppins">
			<Spotlight />
			<div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
				<h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
					{t("header_title")}
				</h1>
				<p className="mt-4 font-light text-base text-neutral-300 max-w-lg text-center mx-auto">
					{t("header_paragraph")}
				</p>

				<div className="mt-10 flex gap-4 justify-center flex-wrap">
					<Link
						href="/Jobs"
						className=" transition-all border-2 border-main-background p-3 px-6 rounded-md font-semibold text-main-background hover:bg-main-background hover:text-black "
					>
						{t("find_job")}
					</Link>
					<Link
						href="/services"
						className="transition-all border-2 border-main-background p-3 px-6 rounded-md font-semibold text-main-background hover:bg-main-background hover:text-black "
					>
						{t("view_services")}
					</Link>
				</div>
			</div>
		</div>
	);
}
