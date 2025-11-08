"use client";
import Loading from "@/app/loading";
import { log } from "console";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

export default function page() {
  return <Loading />;
}
