"use client";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterScheme } from "../_Schemas/Schema";
import { useRouter } from "next/navigation";
import { DatePicker } from "@heroui/react";
import { motion } from "framer-motion";

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
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phoneNumber: "",
      gender: "",
      dateOfBirth: "",
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

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 selection:bg-main-background selection:text-primry-background flex items-center justify-center p-4 font-poppins py-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-main-background/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-main-background to-orange-600 rounded-full mb-4">
              <span className="text-2xl text-white font-bold">⭐</span>
            </div>
            <h1 className="text-4xl font-bold text-white">CREATE ACCOUNT</h1>
            <p className="text-gray-300 text-sm mt-2">
              Join InstaWork and start your freelance journey
            </p>
          </motion.div>

          <form onSubmit={handleSubmit(sendData)} className="space-y-4">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                custom={0}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
              >
                <Input
                  isInvalid={Boolean(errors.name)}
                  errorMessage={errors.name?.message}
                  variant={"faded"}
                  label="Full Name"
                  placeholder="John Doe"
                  type="text"
                  className="bg-white/5"
                  {...register("name")}
                />
              </motion.div>

              <motion.div
                custom={1}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
              >
                <Input
                  isInvalid={Boolean(errors.email) && dirtyFields.email}
                  errorMessage={errors.email?.message}
                  variant={"faded"}
                  label="Email"
                  placeholder="john@example.com"
                  type="email"
                  className="bg-white/5"
                  {...register("email")}
                />
              </motion.div>
            </div>

            {/* Row 2: Password & Confirm Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                custom={2}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
              >
                <Input
                  isInvalid={Boolean(errors.password) && dirtyFields.password}
                  errorMessage={errors.password?.message}
                  variant={"faded"}
                  label="Password"
                  placeholder="Enter your password"
                  type={`${
                    process.env.NODE_ENV === "development" ? "text" : "password"
                  }`}
                  className="bg-white/5"
                  {...register("password")}
                />
              </motion.div>

              <motion.div
                custom={3}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
              >
                <Input
                  isInvalid={
                    Boolean(errors.rePassword) && dirtyFields.rePassword
                  }
                  errorMessage={errors.rePassword?.message}
                  variant={"faded"}
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  type={`${
                    process.env.NODE_ENV === "development" ? "text" : "password"
                  }`}
                  className="bg-white/5"
                  {...register("rePassword")}
                />
              </motion.div>
            </div>

            {/* Row 3: Phone Number & Date of Birth */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                custom={4}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
              >
                <Input
                  isInvalid={
                    Boolean(errors.phoneNumber) && dirtyFields.phoneNumber
                  }
                  errorMessage={errors.phoneNumber?.message}
                  variant={"faded"}
                  color="default"
                  label="Phone Number"
                  placeholder="01XXXXXXXXX"
                  type="text"
                  className="bg-white/5"
                  {...register("phoneNumber")}
                />
              </motion.div>

              <motion.div
                custom={5}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
              >
                <Input
                  label="Date of Birth"
                  type="date"
                  variant="faded"
                  className="bg-white/5"
                  {...register("dateOfBirth")}
                />
              </motion.div>
            </div>

            {/* Row 4: Gender */}
            <motion.div
              custom={6}
              variants={inputVariants}
              initial="hidden"
              animate="visible"
            >
              <Select
                label="Gender"
                variant="faded"
                placeholder="Select your gender"
                isInvalid={
                  Boolean(errors.gender?.message) && dirtyFields.gender
                }
                errorMessage={errors.gender?.message}
                className="bg-white/5"
                {...register("gender")}
              >
                <SelectItem key={"Male"}>Male</SelectItem>
                <SelectItem key={"Female"}>Female</SelectItem>
              </Select>
            </motion.div>

            {/* Error/Success Message */}
            {ApiRespons && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-center text-sm p-3 rounded-lg border ${
                  ApiRespons === "User registered successfully."
                    ? "text-green-400 bg-green-500/10 border-green-500/20"
                    : "text-red-400 bg-red-500/10 border-red-500/20"
                }`}
              >
                {ApiRespons === "User registered successfully." ? "✅" : "❌"}{" "}
                {ApiRespons}
              </motion.p>
            )}

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex gap-3 pt-4"
            >
              <Button
                isLoading={isLooding}
                isDisabled={isLooding}
                type="submit"
                className="flex-1 bg-linear-to-r from-main-background to-orange-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-main-background/50 transition-all duration-300"
              >
                {isLooding ? "Creating Account..." : "Create Account"}
              </Button>
            </motion.div>
          </form>

          {/* Sign In Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center mt-8 pt-6 border-t border-white/10"
          >
            <p className="text-gray-300 text-sm">
              Have Already an Account?{" "}
              <span
                className="text-main-background font-semibold cursor-pointer hover:text-orange-600 transition-colors duration-300"
                onClick={() => Route.push("/Login")}
              >
                LogIn here
              </span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
