"use client";
import React from "react";
import Loader from "@/components/Loader";

export default function loading() {
  return (
    <div className="h-screen content-center text-center">
      <Loader />
      <span className="block p-4"> Looding ... </span>
    </div>
  );
}
