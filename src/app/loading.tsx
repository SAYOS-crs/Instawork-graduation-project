"use client";
import React from "react";
import Loader from "@/components/Loader";

export default function Loading() {
  return (
    <div className="h-screen  flex flex-col justify-center text-center">
      <Loader />
      <span className="block  mb-30 ms-5"> Looding ... </span>
    </div>
  );
}
