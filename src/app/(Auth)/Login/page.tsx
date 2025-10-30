"use client";
import Loader from "@/components/Loader";
import { Spinner } from "@heroui/react";
import React from "react";
import { Input } from "@heroui/react";

export default function Login() {
  return (
    <section className="h-screen grid grid-cols-3 ">
      <div className="col-start-2">
        <Input label="Email" type="email" variant="underlined" />
      </div>
    </section>
  );
}
