"use client";
import React from "react";
import { Card, CardFooter, Image, Button } from "@heroui/react";
import { useTranslations } from "next-intl";

export default function HomeCart() {
	const t = useTranslations("HomeCart");

	return (
		<>
			<Card isFooterBlurred className="border-none" radius="lg">
				<Image
					alt="Woman listing to music"
					className="object-cover"
					height={200}
					src="https://heroui.com/images/hero-card.jpeg"
					width={200}
				/>
				<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
					<p className="text-tiny text-white/80">{t("available_soon")}</p>
					<Button
						className="text-tiny text-white bg-black/20"
						color="default"
						radius="lg"
						size="sm"
						variant="flat"
					>
						{t("notify_me")}
					</Button>
				</CardFooter>
			</Card>
		</>
	);
}
