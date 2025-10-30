"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Navbar as NavbarComponent,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { FaRegHandshake } from "react-icons/fa6";

import Link from "next/link";

import { Button } from "@heroui/button";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const path = usePathname();

  const NavItems = [
    { lable: "services", href: "/services" },
    { lable: "Jobs", href: "/Jobs" },
    { lable: "Dashbord", href: "/Dashbord" },
  ];

  return (
    <NavbarComponent
      className="backgroundNavBar "
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className={path === "/" && "text-white"}>
          <FaRegHandshake className="text-4xl" />
          <Link href={"/"} className="font-bold text-inherit text-xl ps-3">
            InstaWork
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        {NavItems.map((item) => (
          <NavbarItem
            className="custom-active-class text-xl font-sans mx-3"
            isActive={item.href === path}
          >
            <Link className="relative" color="foreground" href={item.href}>
              {item.lable}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex ">
          <Link
            className="hover:bg-primry-background hover:text-main-background transition-all py-2 px-4 min-w-20 m-2 rounded-lg text-center bg-main-background border-primry-background border-1"
            href={"/Register"}
          >
            sign up
          </Link>
          <Link
            className="hover:bg-main-background hover:text-primry-background transition-all py-2 px-4 min-w-20 m-2 rounded-lg text-center bg-primry-background text-main-background border-1 border-primry-background"
            href={"/Login"}
          >
            Login
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarComponent>
  );
}
