"use client";
import { MdDashboardCustomize } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import Link from "next/link";
import { useEffect, useState } from "react";              // ← سطر 2 (جديد)
import { useTranslations } from "next-intl";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";           // ← سطر 1 (جديد)
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
  const t = useTranslations("SideBar");

  const { data: session, status } = useSession();         
const [isAdmin, setIsAdmin] = useState(false);         

useEffect(() => {
  if (status === "authenticated" && (session?.user as any)?.role === "Admin") {
    setIsAdmin(true);
  } else {
    setIsAdmin(false);
  }
}, [session, status]);
  return (
    <>
      <div className="h-fit w-full md:h-screen  border-primry-background bg-white/5 rounded-r-xl">
        <nav className="flex flex-col gap-2 px-2">
          <Link
            href={"/Dashbord/Profile"}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              pathname === "/Dashbord/Profile"
                ? "bg-linear-to-r from-main-background to-primry-background text-black"
                : "hover:bg-primry-background/20"
            }`}
          >
            <MdDashboardCustomize className="text-xl" />
            <span>{t("profile")}</span>
          </Link>

          <Link
            href={"/Dashbord/MyServices"}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              pathname === "/Dashbord/MyServices"
                ? "bg-linear-to-r from-main-background to-primry-background text-black"
                : "hover:bg-primry-background/20"
            }`}
          >
            <MdArrowForwardIos className="text-sm rotate-180" />
            <span>{t("my_services")}</span>
          </Link>

          <Link
            href={"/Dashbord/MyJobs"}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              pathname === "/Dashbord/MyJobs"
                ? "bg-linear-to-r from-main-background to-primry-background text-black"
                : "hover:bg-primry-background/20"
            }`}
          >
            <MdArrowForwardIos className="text-sm" />
            <span>{t("my_jobs")}</span>
          </Link>
           {isAdmin && (
          <Link
            href="/Dashbord/Admin"
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              pathname.includes("/Dashbord/Admin")
                ? "bg-linear-to-r from-main-background to-primry-background text-black"
                : "hover:bg-primry-background/20"
            }`}
          >
            <MdArrowForwardIos className="text-sm" />
            <span>{t("Admin")}</span>
          </Link>
        )}
        </nav>
      </div>
    </>
  );
}
