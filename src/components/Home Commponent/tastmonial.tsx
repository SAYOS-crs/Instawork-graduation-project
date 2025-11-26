import React from "react";
import { useTranslations } from "next-intl";
import { IoCheckmark } from "react-icons/io5";
import { LuUserRoundSearch } from "react-icons/lu";
import { MdPostAdd } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { TfiGallery } from "react-icons/tfi";

export default function Tastmonial() {
	const t = useTranslations("Tastmonial");

	const provide = [
		{
			for: "client",
			header: t("prov_0_header"),
			text: t("prov_0_text"),
			icon: LuUserRoundSearch,
			color: "from-blue-500 to-blue-600",
		},
		{
			for: "client",
			header: t("prov_1_header"),
			text: t("prov_1_text"),
			icon: IoCheckmark,
			color: "from-main-background to-orange-600",
		},

		{
			for: "worker",
			header: t("prov_2_header"),
			text: t("prov_2_text"),
			icon: MdPostAdd,
			color: "from-purple-500 to-purple-600",
		},
		{
			for: "worker",
			header: t("prov_3_header"),
			text: t("prov_3_text"),
			icon: TbListDetails,
			color: "from-orange-500 to-orange-600",
		},
		{
			for: "worker",
			header: t("prov_4_header"),
			text: t("prov_4_text"),
			icon: TfiGallery,
			color: "from-rose-500 to-rose-600",
		},
	];
	return (
		<>
			<header className="relative overflow-hidden bg-linear-to-r from-main-background via-main-background to-primry-background text-primry-background py-8 shadow-lg font-poppins">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent"></div>
				</div>
				<h2 className="tracking-widest font-bold text-3xl md:text-4xl relative z-10 text-center font-poppins">
					{t("section_header")}
				</h2>
			</header>

			<div className="container mx-auto grid lg:grid-cols-2 gap-8 my-16 text-main-background">
				<div className="grid gap-y-8 my-3">
					<header className="mb-4">
						<h2 className="text-4xl font-bold bg-linear-to-r from-main-background to-primry-background bg-clip-text text-transparent">
							{t("section_artisans")}
						</h2>
						<div className="h-1 w-20 bg-linear-to-r mx-auto from-purple-500 to-pink-500 mt-3 rounded-full"></div>
					</header>
					{provide.map(
						(prov, index) =>
							prov.for === "worker" && (
								<div
									key={index}
									className={`group relative bg-white text-main-background hover:shadow-2xl max-lg:hover:scale-105 lg:hover:translate-x-[4%] lg:hover:translate-y-[-3%] transition-all duration-300 rounded-2xl p-8 border border-gray-100 flex flex-col justify-between overflow-hidden font-poppins`}
								>
									<div
										className={`absolute inset-0 bg-linear-to-br ${prov.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
									></div>
									<div className="relative z-10">
										<div
											className={`inline-block bg-linear-to-br ${prov.color} text-white text-4xl p-4 mb-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300`}
										>
											<prov.icon />
										</div>
									</div>
									<h3 className="text-xl font-bold mb-3 relative z-10">
										{prov.header}
									</h3>
									<article className="text-sm text-gray-600 leading-relaxed relative z-10">
										{prov.text}
									</article>
								</div>
							)
					)}
				</div>

				<div className="my-3">
					<header className="mb-4">
						<h2 className="text-4xl font-bold bg-linear-to-r from-main-background to-primry-background bg-clip-text text-transparent">
							{t("section_clients")}
						</h2>
						<div className="h-1 w-20 bg-linear-to-r from-blue-500 mx-auto to-cyan-500 mt-3 rounded-full"></div>
					</header>
					<div className="grid gap-8 my-10">
						{provide.map(
							(prov, index) =>
								prov.for === "client" && (
									<div
										key={index}
										className={`group relative bg-white text-main-background hover:shadow-2xl max-lg:hover:scale-105 lg:hover:translate-x-[-4%] lg:hover:translate-y-[-2%] transition-all duration-300 rounded-2xl p-8 border border-gray-100 flex flex-col justify-between overflow-hidden`}
									>
										<div
											className={`absolute inset-0 bg-linear-to-br ${prov.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
										></div>
										<div className="relative z-10">
											<div
												className={`inline-block bg-linear-to-br ${prov.color} text-white text-4xl p-4 mb-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300`}
											>
												<prov.icon />
											</div>
										</div>
										<h3 className="text-xl font-bold mb-3 relative z-10">
											{prov.header}
										</h3>
										<article className="text-sm text-gray-600 leading-relaxed relative z-10">
											{prov.text}
										</article>
									</div>
								)
						)}
					</div>
				</div>
			</div>
		</>
	);
}
