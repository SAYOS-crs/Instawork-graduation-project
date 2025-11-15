"use client";
import Login from "@/services/Login";
import Register from "@/services/Register";
import React from "react";

export default function Btn({
  content,
  color,
}: {
  content: string;
  color: 1 | 2;
}) {
  return (
    <>
      {color === 1 ? (
        <button
          onClick={() => Register(3)}
          className={` border-2 border-main-background text-sm   py-2 m-2 px-5 rounded-xl cursor-pointer text-white  bg-main-background hover:bg-inherit hover:text-black transition-all  `}
        >
          {content}
        </button>
      ) : (
        <button
          className={` border-2 border-main-background text-sm   py-2 m-2 px-5 rounded-xl cursor-pointer hover:bg-main-background hover:text-white transition-all  `}
        >
          {content}
        </button>
      )}
    </>
  );
}
