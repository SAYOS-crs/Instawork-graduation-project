// src/components/LanguageSwitcher.tsx
"use client";

import React, { useEffect, useState } from "react";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
} from "@heroui/react";
import { ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
	const t = useTranslations("NavBar");
	const router = useRouter();

	// نستخدم useState + useEffect عشان نقرأ الكوكيز في الـ Client فقط
	const [currentLocale, setCurrentLocale] = useState<"ar" | "en">("ar");

	useEffect(() => {
		const match = document.cookie.match(/NEXT_LOCALE=([^;]+)/);
		setCurrentLocale((match ? match[1] : "ar") as "ar" | "en");
	}, []);

	const changeLocale = (newLocale: "ar" | "en") => {
		document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
		setCurrentLocale(newLocale);
		router.refresh();
	};

	return (
		<div className={currentLocale === "ar" ? "order-1" : "order-3"}>
			<Dropdown>
				<DropdownTrigger>
					<Button
						variant="ghost"
						className="flex items-center gap-2 px-3 py-1 text-sm font-medium capitalize"
					>
						<ReactCountryFlag
							countryCode={currentLocale === "ar" ? "EG" : "GB"}
							svg
							style={{ width: "25px", height: "25px" }}
							className="rounded-sm"
						/>
						<span>{currentLocale === "ar" ? t("arabic") : t("english")}</span>
						<ChevronDown className="h-4 w-4" />
					</Button>
				</DropdownTrigger>
				<DropdownMenu aria-label="Language selection">
					<DropdownItem
						key="en"
						onPress={() => changeLocale("en")}
						className={currentLocale === "en" ? "bg-blue-100" : ""}
					>
						<div className="flex items-center gap-2">
							<ReactCountryFlag
								countryCode="GB"
								svg
								style={{ width: "18px", height: "18px" }}
							/>
							<span>{t("english")}</span>
						</div>
					</DropdownItem>
					<DropdownItem
						key="ar"
						onPress={() => changeLocale("ar")}
						className={currentLocale === "ar" ? "bg-blue-100" : ""}
					>
						<div className="flex items-center gap-2">
							<ReactCountryFlag
								countryCode="EG"
								svg
								style={{ width: "18px", height: "18px" }}
							/>
							<span>{t("arabic")}</span>
						</div>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	);
}
