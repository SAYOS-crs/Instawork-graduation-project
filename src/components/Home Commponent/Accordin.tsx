"use client";
import { Accordion, AccordionItem } from "@heroui/react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function AccordionCommponent() {
	const t = useTranslations("Accordin");

	const Content = [
		// gude >> header = label  ,   content   ,  href = Navigation Path  ,  LinkContent  ,  ContentAfterLink //

		{
			label: t("What_is_InstaWork_label"),
			content: t("What_is_InstaWork_content"),
		},

		{
			label: t("InstaWork-objectives_label"),
			content: t("Instawork-objectives_content"),
		},

		{
			label: t("About-creating-an-account_label"),
			content: t("About-creating-an-account_content"),
			href: "/Register",
			LinkConent: t("Create-Account"),
			ContentAfterLink: t("ContentAfterLink_create-account"),
		},

		{
			label: t("Services-Dashboard_label"),
			content: t("Services-Dashboard_content"),
			href: "#AD",
			LinkConent: t("View-Plans"),
		},

		{
			label: t("Jobs-Dashboard_label"),
			content: t("Jobs-Dashboard_content"),
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
