"use client";
import SideBar from "@/components/DashBord Commponents/SideBar";
import React from "react";

export default function DashbordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-linear-to-b from-primry-background via-white to-white grid grid-cols-1 md:grid-cols-7 relative">
      <aside className="md:col-span-1 bg-white/5 backdrop-blur-sm border-r border-primry-background px-4 py-6">
        <SideBar />
      </aside>
      <main className="md:col-span-6 p-6">{children}</main>
    </div>
  );
}
