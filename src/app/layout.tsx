import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLocaleFromCookie } from "@/lib/i18n/get-locale-from-cookie";
import { NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Metadata");
	return {
		title: t("title"),
		description: t("description"),
	};
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocaleFromCookie();
	const messages = (await import(`@/locales/${locale}.json`)).default;
	return (
		<html
			lang={locale}
			dir={locale === "ar" ? "rtl" : "ltr"}
			suppressHydrationWarning
		>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-white font-poppins`}
			>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<Providers>
						<Navbar />
						{children}
						<Footer />
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
