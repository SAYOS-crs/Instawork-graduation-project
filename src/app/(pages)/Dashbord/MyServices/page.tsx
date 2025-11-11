"use client";
import { Button, Input } from "@heroui/react";
import React from "react";
import { Textarea } from "@heroui/react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";
export default function page() {
  const Skills = [
    { label: "نقاش" },
    { label: "حداد" },
    { label: "سيراميك" },
    { label: "كهربائي" },
    { label: "نجار" },
    { label: "سباك" },
  ];
  const ServiceAddress = [
    { Address: "الجيزه" },
    { Address: "البحيره" },
    { Address: "الدقهلية" },
    { Address: "الاسماعليه" },
    { Address: "مرسي مطروح" },
    { Address: "سكندريه" },
    { Address: "شمال سيناء" },
    { Address: "الخرطوم" },
  ];
  const KeyWords = [
    { keyword: "دهانات حديثه" },
    { keyword: "ديكور" },
    { keyword: "ورق حائط" },
    { keyword: "تشطيبات فاخرة" },
    { keyword: "أنظمة أمان" },
    { keyword: "صيانة" },
    { keyword: "تمديدات كهربائية" },
    { keyword: "إضاءة" },
    { keyword: "كشف تسربات" },
  ];

  return (
    <section className="bg-primry-background w-full h-screen flex flex-col">
      <div className="bg-red-600 h-fit  overflow-hidden">
        <div className=" m-3">
          <Input
            color="default"
            className="p-3"
            label="Titel"
            placeholder="Enter Service Titel"
            type="text  "
          />
        </div>

        <div className="m-3 ">
          <Input
            className="p-3"
            label="Email"
            placeholder="Enter your email"
            type="email"
          />
        </div>

        <div className=" m-3">
          <Input
            className="p-3 "
            label="Experince in the skill field"
            placeholder="Experince"
            type="Number"
          />
        </div>
        <div className=" ms-6 m-2">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            {/* /////////// Skill selection ///////////////  */}
            <Autocomplete className="max-w-xs" label="Skill">
              {Skills.map((skill) => (
                <AutocompleteItem key={skill.label}>
                  {skill.label}
                </AutocompleteItem>
              ))}
            </Autocomplete>
            {/* /////////// Skill selection ///////////////  */}
            {/* //////////////////////////////////////////////// */}
            {/* ///////////////////Address selection ///////////////// */}
            <Autocomplete className="max-w-xs" label="Address">
              {ServiceAddress.map((address) => (
                <AutocompleteItem key={address.Address}>
                  {address.Address}
                </AutocompleteItem>
              ))}
            </Autocomplete>
            {/* ///////////////////Address selection ///////////////// */}
            {/* //////////////////////////////////////////////// */}
            {/* ///////////////////KeyWord selection ///////////////// */}
            <Autocomplete className="max-w-xs" label="KeyWord">
              {KeyWords.map((keyword) => (
                <AutocompleteItem key={keyword.keyword}>
                  {keyword.keyword}
                </AutocompleteItem>
              ))}
            </Autocomplete>
            {/* ///////////////////KeyWord selection ///////////////// */}
            {/* //////////////////////////////////////////////// */}
          </div>
          <div>
            {" "}
            <Button>Supmit Service</Button>{" "}
          </div>
        </div>
      </div>
      <div className="bg-blue-600 "></div>
    </section>
  );
}
