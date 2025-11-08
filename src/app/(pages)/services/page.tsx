"use client";
import { log } from "console";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

export default function page() {
  const session = useSession();
  console.log(session);

  return <div>heloooooooooooooo</div>;
}
