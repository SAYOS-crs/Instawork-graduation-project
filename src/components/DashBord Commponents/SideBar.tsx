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
      <div className="  h-fit  w-full md:h-screen shadow-2xl border-r-2 border-primry-background ">
        <Link
          className={` ${
            pathname === "/Dashbord/Profile" &&
            "bg-main-background text-primry-background hover:text-main-background"
          } block p-5 my-3 hover:bg-primry-background transition-all`}
          href={"/Dashbord/Profile"}
        >
          Profile
        </Link>

        <Link
          className={` ${
            pathname === "/Dashbord/MyServices" &&
            "bg-main-background text-primry-background hover:text-main-background"
          } block p-5 my-3 hover:bg-primry-background transition-all`}
          href={"/Dashbord/MyServices"}
        >
          MyServices
        </Link>

        <Link
          className={` ${
            pathname === "/Dashbord/MyJobs" &&
            "bg-main-background text-primry-background hover:text-main-background"
          } block p-5 my-3 hover:bg-primry-background transition-all`}
          href={"/Dashbord/MyJobs"}
        >
          MyJobs
        </Link>
      </div>
    </>
  );
}
