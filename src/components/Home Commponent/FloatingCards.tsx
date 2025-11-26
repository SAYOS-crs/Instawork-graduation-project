"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function FloatingCards() {
	const t = useTranslations("FloatingCards");

	const cards = [
		{
			id: 1,
			title: t("card1_title"),
			description: t("card1_description"),
			icon: "✨",
			delay: 0,
		},
		{
			id: 2,
			title: t("card2_title"),
			description: t("card2_description"),
			icon: "🔒",
			delay: 0.2,
		},
		{
			id: 3,
			title: t("card3_title"),
			description: t("card3_description"),
			icon: "👥",
			delay: 0.4,
		},
		{
			id: 4,
			title: t("card4_title"),
			description: t("card4_description"),
			icon: "💬",
			delay: 0.6,
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const cardVariants: any = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
		hover: {
			y: -5,
			transition: {
				duration: 0.3,
			},
		},
	};

	return (
		<div className="w-full py-20 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-main-background mb-4">
						{t("header_title")}
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						{t("header_subtitle")}
					</p>
				</div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					{cards.map((card) => (
						<motion.div
							key={card.id}
							className="relative group"
							variants={cardVariants}
							whileHover="hover"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-main-background/20 to-orange-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-main-background/50 transition-colors duration-300">
								<div className="text-5xl mb-4">{card.icon}</div>
								<h3 className="text-xl font-bold text-gray-800 mb-2">
									{card.title}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed">
									{card.description}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
}
