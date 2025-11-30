"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";
import {
  Navbar as NavbarComponent,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";
import { FaRegHandshake } from "react-icons/fa6";
import Instawork_icon from "@/../public/Icon/Instawork-logo-white.png";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const t = useTranslations("NavBar");
  const path = usePathname();
  const { status, data } = useSession();
  const session = useSession();

  const NavItems = [
    { lable: t("services_lab"), href: "/services" },
    { lable: t("jobs_lab"), href: "/Jobs" },
    { lable: t("dashbord_lab"), href: "/Dashbord/Profile" },
  ];
  console.log(isMenuOpen);

  return (
    <NavbarComponent
      className="backgroundNavBar py-2 overflow-hidden  "
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden "
        />
        <NavbarBrand className={`${path === "/" && "text-white"}`}>
          {/* <FaRegHandshake className="text-4xl" /> */}
          <Link href={"/"} className="font-bold text-inherit text-xl  ps-3">
            <Image
              className="mx-auto "
              src={Instawork_icon}
              width={60}
              height={60}
              alt="s"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 relative "
        justify="center"
      >
        {NavItems.map((item, index) => (
          <NavbarItem
            key={`${item}-${index}`}
            className="custom-active-class text-lg font-semibold mx-3 text-primry-background hover:text-white transition-all duration-300"
            isActive={item.href === path}
          >
            <Link className="relative" color="foreground" href={item.href}>
              {item.lable}
            </Link>
          </NavbarItem>
        ))}
        
        
      </NavbarContent>
          <LanguageSwitcher />

      <NavbarContent justify="end">
        <NavbarItem className="flex ">
          {status === "authenticated" ? (
            <Button
              onPress={() => signOut({ callbackUrl: "/" })}
              className="hover:bg-primry-background hover:text-main-background transition-all duration-300 py-2 px-6 min-w-24 m-2 rounded-lg text-center bg-main-background text-primry-background border-2 border-primry-background font-semibold shadow-lg hover:shadow-xl"
            >
              {t("logout")}
            </Button>
          ) : (
            <>
              <Link
                className="hover:bg-primry-background hover:text-main-background transition-all duration-300 py-2 px-6 min-w-24 m-2 rounded-lg text-center bg-main-background text-primry-background border-2 border-primry-background font-semibold shadow-lg hover:shadow-xl"
                href={"/Register"}
              >
                {t("signup")}
              </Link>

              <Link
                className="hover:bg-main-background hover:text-primry-background transition-all duration-300 py-2 px-6 min-w-24 m-2 rounded-lg text-center bg-primry-background text-main-background border-2 border-primry-background font-semibold shadow-lg hover:shadow-xl"
                href={"/Login"}
              >
                {t("login")}
              </Link>
            </>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="py-10">
        <LanguageSwitcher />
        {NavItems.map((item, index) => (
          <NavbarMenuItem
            className="p-5 hover:bg-main-background rounded-md"
            key={`${item}-${index}`}
          >
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === NavItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.href}
            >
              {item.lable}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarComponent>
  );
}
