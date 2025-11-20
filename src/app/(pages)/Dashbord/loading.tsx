"use client";

import Loader from "@/components/Loader";
import React from "react";

export default function loading() {
  return (
    <div className="h-screen  flex flex-col justify-center text-center">
      <Loader />
      <span className="block  mb-30 ms-5"> Looding ... </span>
    </div>
  );
}
