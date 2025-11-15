"use client";
import {
  redirect,
  useParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input } from "@heroui/react";
import { LogInScheme } from "../_Schemas/Schema";
import { useState } from "react";
import z, { json } from "zod";
import { decode } from "next-auth/jwt";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export default function Login() {
  const serchPrams = useSearchParams();
  const Route = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields, dirtyFields },
    reset,
  } = useForm<z.infer<typeof LogInScheme>>({
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
    resolver: zodResolver(LogInScheme),
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const session = useSession();
  const [isLooding, setIsLooding] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  interface dataformtype {
    phoneNumber: string;
    password: string;
  }

  async function SupmitLoginDataForm(data: dataformtype) {
    setIsLooding(true);
    setErrorMsg(null);
    try {
      const res = await signIn("credentials", {
        phoneNumber: "+" + data.phoneNumber,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        setErrorMsg(res.error);
        console.log(res);
      } else if (res?.ok) {
        Route.push("/");
        console.log(res);
        console.log(session);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLooding(false);
  }

  return (
    <section className=" h-screen content-center   bg-linear-to-r from-[#000000] to-[#434343] selection:bg-main-background selection:text-primry-background ">
      <div className=" md:w-2xl  mx-auto  md:rounded-xl p-10 md:p-15 md:shadow-2xl  ">
        <h1 className="text-4xl text-center text-primry-background pt-3">
          SIGN IN
        </h1>

        <form onSubmit={handleSubmit(SupmitLoginDataForm)}>
          {/* ----------------------------------------------------------- */}

          <Input
            variant="faded"
            isInvalid={
              Boolean(errors.phoneNumber?.message) && dirtyFields.phoneNumber
            }
            errorMessage={errors.phoneNumber?.message}
            className="my-6    "
            color="primary"
            label="phoneNumber"
            type="text"
            {...register("phoneNumber")}
          />
          {/* ----------------------------------------------------------- */}

          <Input
            color="primary"
            variant="faded"
            isInvalid={
              Boolean(errors.password?.message) && dirtyFields.password
            }
            errorMessage={errors.password?.message}
            className="my-6"
            label="Password"
            type="text"
            {...register("password")}
          />
          {/* ----------------------------------------------------------- */}
          {errorMsg === "Invalid phone number or password." && (
            <p className="text-red-600 text-center ">{errorMsg}</p>
          )}
          {/* ----------------------------------------------------------- */}
          <div className="text-center">
            <Button
              isDisabled={isLooding}
              isLoading={isLooding}
              type="submit"
              className="my-10 w-1/2 "
              color="primary"
            >
              Log In
            </Button>

            {/* ----------------------------------------------------------- */}
          </div>
          {/* {ErorrAPI && <span className="block text-red-600">{ErorrAPI}</span>}
          {success && <span className="block text-green-500">{success}</span>} */}
        </form>
        <p className="text-primry-background text-center">
          {" "}
          Dont Account yet !?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => {
              Route.push("/Register");
            }}
          >
            Register
          </span>{" "}
        </p>
      </div>
    </section>
  );
}
