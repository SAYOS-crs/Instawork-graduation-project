"use client";
import {
  redirect,
  useParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useTranslations } from "use-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SlLogin } from "react-icons/sl";

import { Button, Input } from "@heroui/react";
import { LogInScheme } from "../_Schemas/Schema";
import { useState } from "react";
import z, { json } from "zod";
import { decode } from "next-auth/jwt";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { motion } from "framer-motion";

export default function Login() {
  const t = useTranslations("Login");
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
    <section className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 selection:bg-main-background selection:text-primry-background flex items-center justify-center p-4 font-poppins relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-main-background/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-main-background to-orange-600 rounded-full mb-4">
              <span className="text-2xl text-white font-bold text-center">
                {" "}
                <SlLogin className="" />
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white">
              {t("sign_in_title")}
            </h1>
            <p className="text-gray-300 text-sm mt-2">{t("welcome_back")}</p>
          </motion.div>

          <form
            onSubmit={handleSubmit(SupmitLoginDataForm)}
            className="space-y-5"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Input
                variant="faded"
                isInvalid={
                  Boolean(errors.phoneNumber?.message) &&
                  dirtyFields.phoneNumber
                }
                errorMessage={errors.phoneNumber?.message}
                color="primary"
                label={t("phone_label")}
                placeholder={t("phone_placeholder")}
                type="text"
                className=""
                {...register("phoneNumber")}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Input
                color="primary"
                variant="faded"
                isInvalid={
                  Boolean(errors.password?.message) && dirtyFields.password
                }
                errorMessage={errors.password?.message}
                label={t("password_label")}
                placeholder={t("password_placeholder")}
                type="password"
                className=""
                {...register("password")}
              />
            </motion.div>

            {errorMsg && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-center text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20"
              >
                ❌{" "}
                {errorMsg === "Invalid phone number or password."
                  ? t("invalid_credentials")
                  : errorMsg}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex gap-3 pt-4"
            >
              <Button
                isDisabled={isLooding}
                isLoading={isLooding}
                type="submit"
                className="flex-1 bg-linear-to-r from-main-background to-orange-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-main-background/50 transition-all duration-300"
              >
                {isLooding ? t("signing_in") : t("sign_in_button")}
              </Button>
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center mt-8 pt-6 border-t border-white/10"
          >
            <p className="text-gray-300 text-sm">
              {t("no_account")}{" "}
              <span
                className="text-main-background font-semibold cursor-pointer hover:text-orange-600 transition-colors duration-300"
                onClick={() => Route.push("/Register")}
              >
                {t("register_link")}
              </span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
