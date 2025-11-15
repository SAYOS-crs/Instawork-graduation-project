"use client";
import SideBar from "@/components/DashBord Commponents/SideBar";
import React from "react";

export default function DashbordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="  grid grid-cols-1 md:grid-cols-7  relative">
      <SideBar />
      <div className=" md:col-span-6">{children}</div>
    </div>
  );
}
