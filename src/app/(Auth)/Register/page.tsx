"use client";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterScheme } from "../_Schemas/Schema";
import { useRouter } from "next/navigation";
import { DatePicker } from "@heroui/react";

// import RegisterRoute from "../RoutHandler/RegisterRoute";
import { log } from "console";
import { data, RegisterAPICall } from "../RoutHandler/RegisterRoute";
import { promises } from "dns";

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields, dirtyFields },
    reset,
  } = useForm({
    defaultValues: {
      name: " ",
      email: " ",
      password: " ",
      rePassword: " ",
      phoneNumber: " ",
      gender: " ",
      dateOfBirth: " ",
    },
    resolver: zodResolver(RegisterScheme),
    mode: "onSubmit",
  });

  const Route = useRouter();

  console.log(errors);

  const [isLooding, setisLooding] = useState(false);
  // const [ErorrAPI, setErorrAPI] = useState(false);
  const [ApiRespons, isApiRespons] = useState<string | null>(null);

  async function sendData(data: any) {
    console.log(data);
    setisLooding(true);
    isApiRespons(null);
    const respons = await RegisterAPICall(data);
    if (respons.message) {
      console.log(respons.message);
      isApiRespons(respons.message);
      Route.push("/Login");
    } else {
      console.log(respons.error);
      isApiRespons(respons.error);
    }
    setisLooding(false);
  }

  return (
    <>
      <section className=" py-20 min-h-screen bg-linear-to-r from-[#000000] to-[#434343] selection:bg-main-background selection:text-primry-background ">
        <div className="  p-10 shadow-2xl border-primry-background border-1 text-center md:w-3xl lg:w-4xl xl:w-5xl mx-auto  rounded-xl text-primry-background">
          <form
            className=" grid  gap-6 md:grid-cols-2 "
            onSubmit={handleSubmit(sendData)}
          >
            <h1 className="text-4xl md:col-span-2 mb-2   pt-3">Register</h1>

            {/* --------------------- name */}
            <div className=" ">
              <Input
                isInvalid={Boolean(errors.name)}
                errorMessage={errors.name?.message}
                variant={"flat"}
                className=" h-20 "
                label="Name"
                type="text"
                {...register("name")}
              />
            </div>

            {/* --------------------- email */}
            <div className="">
              <Input
                isInvalid={Boolean(errors.email) && dirtyFields.email}
                errorMessage={errors.email?.message}
                variant={"flat"}
                className=" h-20 "
                label="Email"
                type="text"
                {...register("email")}
              />
            </div>

            {/* --------------------- password */}
            <div className="">
              <Input
                isInvalid={Boolean(errors.password) && dirtyFields.password}
                errorMessage={errors.password?.message}
                variant={"flat"}
                className=" h-20 "
                label="Password"
                type="text"
                {...register("password")}
              />
            </div>

            {/* --------------------- rePassword */}
            <div className="">
              <Input
                isInvalid={Boolean(errors.rePassword) && dirtyFields.rePassword}
                errorMessage={errors.rePassword?.message}
                variant={"flat"}
                className=" h-20 "
                label="Confirm Password"
                type="text"
                {...register("rePassword")}
              />
            </div>

            {/* --------------------- phoneNumber */}
            <div className="">
              <Input
                isInvalid={
                  Boolean(errors.phoneNumber) && dirtyFields.phoneNumber
                }
                errorMessage={errors.phoneNumber?.message}
                variant={"flat"}
                color="default"
                className=" h-20 "
                label="phoneNumber"
                type="text"
                {...register("phoneNumber")}
              />
            </div>

            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 ">
              <Input
                className=""
                label="Date of Burth"
                type="date"
                {...register("dateOfBirth")}
              />

              <Select className="" label="Gender" {...register("gender")}>
                <SelectItem key={"Male"}>Male</SelectItem>
                <SelectItem key={"Female"}>Female</SelectItem>
              </Select>
            </div>

            {ApiRespons === "User registered successfully." ? (
              <span className="block text-green-500 md:col-span-2 ">
                {ApiRespons}
              </span>
            ) : (
              <span className="block text-red-600 md:col-span-2">
                {ApiRespons}
              </span>
            )}

            <div className="content-center  md:col-span-2  text-center ">
              <Button
                isLoading={isLooding}
                isDisabled={isLooding}
                type="submit"
                className="my-10 w-1/2 text-md"
                color="primary"
              >
                SignUp
              </Button>
            </div>
          </form>

          <p>
            {" "}
            Have Already an Account ?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => {
                Route.push("/Login");
              }}
            >
              LogIn
            </span>{" "}
          </p>
        </div>
      </section>
    </>
  );
}
