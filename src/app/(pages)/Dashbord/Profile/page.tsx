"use client";
import { Button, Input, Textarea } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { DashBoardSchema } from "../_Schemas/DashboardSchema";

export default function page() {
  const [CountroledNameInput, setCountroledNameInput] = useState<string | null>(
    null
  );
  const [EditInputName, setEditInputName] = useState<boolean>(false);
  // ///////////////////////////////////////////////////////
  const [EditInputPhone1, setEditInputPhone1] = useState<boolean>(true);
  const [EditInputPhone1Value, setEditInputPhone1Value] =
    useState<string>("null");
  // ///////////////////////////////////////////////////////
  const [EmailInputValue, setEmailInputValue] = useState<string>("null");
  const [EmailInputToggel, setEmailInputToggel] = useState<boolean>(false);

  const { data } = useSession();

  console.log();

  useEffect(() => {
    if (data?.user.phoneNumber) {
      setEditInputPhone1Value(data?.user.phoneNumber);
      setEmailInputValue(data.user.email);
    }
  }, [data?.user]);

  const { handleSubmit, register } = useForm({
    defaultValues: {
      Fullname: "",
      // PhoneNumber: "",
      // SecondPhoneNumber: "",
      // Gender: "",
      // DateOfBirth: "",
      // Bio: "",
      // Email: "",
      // ProfileImage: '',
    },
    resolver: zodResolver(DashBoardSchema),
  });
  async function EditUserInfo(data: any) {}
  return (
    <section className="bg-primry-background min-h-screen w-full selection:bg-main-background selection:text-primry-background ">
      <form
        onSubmit={handleSubmit(EditUserInfo)}
        className="grid grid-cols-1 md:grid-cols-3"
      >
        {/* ///////////////// right side //////////////////// */}
        <div className=" h-screen w-full md:border-r-2 border-main-background p-2">
          <div className="-500 text-center my-15 ">
            <figure className="rounded-md overflow-hidden  mx-auto w-60 h-60 group  relative">
              <i className="absolute bottom-0 left-0 right-0 opacity-80  h-9 transition-all cursor-pointer group-hover:translate-y-0 translate-y-9 text-2xl text-primry-background text-center bg-main-background">
                <MdOutlineAddPhotoAlternate className="inline-block mx-2" />{" "}
              </i>
              <img
                src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                className=" bg-contain bg-center w-full  inline-block"
                alt=""
              />
            </figure>
            {/* //////////////////////////////////////////////////////////////////////////////////////// */}

            <figcaption className=" ps-5 p-3 text-left flex flex-col gap-3">
              <div className="   py-3 border-b-1 border-main-background">
                <h3 className="flex gap-3 justify-center">
                  <span>Name:</span>
                  <Input
                    {...register("Fullname")}
                    isDisabled={!EditInputName}
                    onChange={(e) => setCountroledNameInput(e.target.value)}
                    value={CountroledNameInput!}
                    className="inline-block"
                  >
                    {" "}
                  </Input>{" "}
                  {EditInputName ? (
                    <MdCancel
                      className="inline-block text-3xl cursor-pointer"
                      onClick={() => setEditInputName(false)}
                    />
                  ) : (
                    <FaEdit
                      onClick={() => setEditInputName(true)}
                      className="inline-block text-3xl cursor-pointer"
                    />
                  )}
                </h3>
              </div>
              {/* //////////////////////////////////////////////////////////////////////////////////////// */}

              <div className="  py-3 border-b-1 border-main-background">
                <h3 className="grid grid-cols-1 gap-3 justify-center">
                  <span className="block">Bio :</span>
                  <Textarea
                    {...register("Fullname")}
                    isDisabled={!EditInputName}
                    onChange={(e) => setCountroledNameInput(e.target.value)}
                    value={CountroledNameInput!}
                    className="block"
                  >
                    {" "}
                  </Textarea>{" "}
                  {EditInputName ? (
                    <MdCancel
                      className="inline-block text-3xl cursor-pointer"
                      onClick={() => setEditInputName(false)}
                    />
                  ) : (
                    <FaEdit
                      onClick={() => setEditInputName(true)}
                      className="inline-block text-3xl cursor-pointer"
                    />
                  )}
                </h3>
              </div>
              {/* //////////////////////////////////////////////////////////////////////////////////////// */}

              {/* //////////////////////////////////////////////////////////////////////////////////////// */}
            </figcaption>
          </div>
        </div>
        {/* ///////////////// right side //////////////////// */}
        {/* /// */}
        {/* /// */}
        {/* ////////////////// left side //////////////////// */}
        <div className=" md:col-span-2 min-h-screen w-full text-right">
          <div className=" px-5 my-15">
            {/* /////////////////////// */}
            <h3 className="border-b-1 flex justify-end align-middle  gap-4 text-center  border-main-background px-2 py-7">
              {EditInputPhone1 ? (
                <FaEdit
                  onClick={() => setEditInputPhone1(false)}
                  className="text-2xl inline-block cursor-pointer my-2"
                />
              ) : (
                <MdCancel
                  onClick={() => setEditInputPhone1(true)}
                  className="text-2xl inline-block cursor-pointer my-2"
                />
              )}
              <Input
                onChange={(e) => setEditInputPhone1Value(e.target.value)}
                value={EditInputPhone1Value}
                isDisabled={EditInputPhone1}
                className="w-fit "
              ></Input>
              <h3 className="py-1">: Phone Number</h3>
            </h3>
            {/* Phone Number */}
            {/* /// */}
            <h3 className="border-b-1 border-main-background px-2 py-7">
              01557212467 : Second Phone Number
            </h3>
            {/*Second Phone Number */}
            {/* /// */}
            <h3 className="border-b-1 flex gap-4 justify-end border-main-background px-2 py-7">
              <div className="w-fit gap-4 flex">
                <Input
                  onChange={(e) => {
                    setEmailInputValue(e.target.value);
                  }}
                  value={EmailInputValue}
                  isDisabled={!EmailInputToggel}
                  className="w-full order-2 "
                ></Input>

                {EmailInputToggel ? (
                  <MdCancel
                    onClick={() => setEmailInputToggel(false)}
                    className="cursor-pointer text-3xl order-1"
                  />
                ) : (
                  <FaEdit
                    onClick={() => setEmailInputToggel(true)}
                    className=" cursor-pointer text-3xl order-1"
                  />
                )}
              </div>
              <span className="my-1">:Email</span>
            </h3>
            {/* Email */}
            {/* /// */}
            <address className="border-b-1 text-xl font-bold border-main-background px-2 py-7">
              egypt / giza : Address
            </address>
            {/* Address */}
            {/* /// */}
            <h3 className="border-b-1 border-main-background px-2 py-7">
              Male : Gender
            </h3>
            {/* Gender */}
            {/* /// */}
            <h3 className="border-b-1 border-main-background px-2 py-7">
              10 / 10 / 2000 : Date Of Birth
            </h3>
            {/* Date Of Birth */}
            {/* /////////////////////// */}
            {/* /////////////// work imges //////////////// */}
            {/* <div className="flex flex-row flex-wrap justify-center gap-8 my-10   ">
              <div className="h-45 w-45  bg-gray-700"></div>
              <div className="h-45 w-45  bg-gray-700"></div>
              <div className="h-45 w-45  bg-gray-700"></div>
              <div className="h-45 w-45  bg-gray-700"></div>
            </div> */}
          </div>
        </div>
      </form>
    </section>
  );
}
