"use client";
import { MdDashboardCustomize } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import Link from "next/link";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { usePathname } from "next/navigation";
const items = [
  {
    key: "new",
    label: "New file",
  },
  {
    key: "copy",
    label: "Copy link",
  },
  {
    key: "edit",
    label: "Edit file",
  },
  {
    key: "delete",
    label: "Delete file",
  },
];
export default function SideBar() {
  const pathname = usePathname();

  return (
    <>
      <div className="h-fit w-full md:h-screen  border-primry-background bg-white/5 rounded-r-xl">
        <nav className="flex flex-col gap-2 px-2">
          <Link
            href={"/Dashbord/Profile"}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              pathname === "/Dashbord/Profile"
                ? "bg-linear-to-r from-main-background to-primry-background text-white"
                : "hover:bg-primry-background/20"
            }`}
          >
            <MdDashboardCustomize className="text-xl" />
            <span>Profile</span>
          </Link>

          <Link
            href={"/Dashbord/MyServices"}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              pathname === "/Dashbord/MyServices"
                ? "bg-linear-to-r from-main-background to-primry-background text-white"
                : "hover:bg-primry-background/20"
            }`}
          >
            <MdArrowForwardIos className="text-sm rotate-180" />
            <span>MyServices</span>
          </Link>

          <Link
            href={"/Dashbord/MyJobs"}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              pathname === "/Dashbord/MyJobs"
                ? "bg-linear-to-r from-main-background to-primry-background text-white"
                : "hover:bg-primry-background/20"
            }`}
          >
            <MdArrowForwardIos className="text-sm" />
            <span>MyJobs</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
