"use client";
import { addToast, Button, Input } from "@heroui/react";
import React, { useEffect, useState } from "react";
import { Textarea } from "@heroui/react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { MdAddPhotoAlternate, MdCancel } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import AddServiceAPI from "@/services/ServicesAPI/AddService";

import AddServiceRespons from "@/Interface/Service/AddService";
import { GoPlus } from "react-icons/go";
import { Skills } from "@/components/DashBord Commponents/MyService/ServiceLists";
import GetUserServices from "@/services/ServicesAPI/GetUserServices";
import { useSession } from "next-auth/react";
import ServiceCard from "@/components/Services Commponents/ServiceCard";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { fromUnixTime, format, formatDistanceToNow } from "date-fns";
import { ar } from "date-fns/locale/ar";
import DeleteUserService from "@/services/ServicesAPI/DeleteService";
{
  /* يتوفيييق انا عامل التاريخ عربي */
}
export default function page() {
  const { data } = useSession();
  const t = useTranslations("MyServices");

  // {-----------------------------------State section----------------------------------------}
  const [TitelInput, setTitelInput] = useState<string | null>(null);
  const [ErrorTitelInput, setErrorTitelInput] = useState<string | null>(null);
  // {--------------------------------------------------------------------------------------------}
  const [descriptionInput, setdescriptionInput] = useState<string | null>("");
  const [ErrordescriptionInput, setErrordescriptionInput] = useState<
    string | null
  >(null);
  // {--------------------------------------------------------------------------------------------}
  const [UserServices, setUserServices] = useState<UserServicesData | null>(
    null
  );
  // {--------------------------------------------------------------------------------------------}
  // {------------------------------------- {imges } ---------------------------------------------}
  const [Imge_1, setImge_1] = useState<any>(null);
  const [imgeURl_1, setimgeURl_1] = useState<any>(null);
  // {--------------------------------------------------------------------------------------------}
  const [Imge_2, setImge_2] = useState<any>(null);
  const [imgeURl_2, setimgeURl_2] = useState<any>(null);
  // {--------------------------------------------------------------------------------------------}
  const [Imge_3, setImge_3] = useState<any>(null);
  const [imgeURl_3, setimgeURl_3] = useState<any>(null);
  // {--------------------------------------------------------------------------------------------}
  const [Imge_4, setImge_4] = useState<any>(null);
  const [imgeURl_4, setimgeURl_4] = useState<any>(null);
  // {--------------------------------------------------------------------------------------------}
  const [Imge_5, setImge_5] = useState<any>(null);
  const [imgeURl_5, setimgeURl_5] = useState<any>(null);
  // {--------------------------------------------------------------------------------------------}
  // {---------------------------------------------add service mode ------------------------------}
  const [AddServiceTogel, setAddServiceTogel] = useState<boolean>(false);
  // {--------------------------------------------------------------------------------------------}
  // {--------------------------------------- loading state -----------------------------------------------------}
  const [Isloading, setIsloading] = useState<boolean>(false);
  // {--------------------------------------------------------------------------------------------}

  async function CallingUserServicesAPI(id: string) {
    const respos: UserServicesRespons = await GetUserServices(id);
    if (respos.message === "User services retrieved successfully.") {
      setUserServices(respos.data);
    }
  }

  useEffect(() => {
    console.log(UserServices);
  }, [UserServices]);

  useEffect(() => {
    if (data?.user.userId) {
      CallingUserServicesAPI(data.user.userId);
    }
  }, [data?.user.userId]);

  useEffect(() => {
    if (Imge_1 && Imge_1.type === "image/jpeg") {
      console.log(Imge_1);
      setimgeURl_1(URL.createObjectURL(Imge_1));
    } else if (Imge_1 && Imge_1.type !== "image/jpeg") {
      setimgeURl_1(null);
      setImge_1(null);
      addToast({
        title: t("upload_image_jpg_only"),
        color: "danger",
      });
    }
    if (Imge_2 && Imge_2.type === "image/jpeg") {
      setimgeURl_2(URL.createObjectURL(Imge_2));
    } else if (Imge_2 && Imge_2.type !== "image/jpeg") {
      setimgeURl_2(null);
      setImge_2(null);
      addToast({
        title: t("upload_image_jpg_only"),
        color: "danger",
      });
    }
    if (Imge_3 && Imge_3.type === "image/jpeg") {
      setimgeURl_3(URL.createObjectURL(Imge_3));
    } else if (Imge_3 && Imge_3.type !== "image/jpeg") {
      setimgeURl_3(null);
      setImge_3(null);
      addToast({
        title: t("upload_image_jpg_only"),
        color: "danger",
      });
    }
    if (Imge_4 && Imge_4.type === "image/jpeg") {
      setimgeURl_4(URL.createObjectURL(Imge_4));
    } else if (Imge_4 && Imge_4.type !== "image/jpeg") {
      setimgeURl_4(null);
      setImge_4(null);
      addToast({
        title: t("upload_image_jpg_only"),
        color: "danger",
      });
    }
    if (Imge_5 && Imge_5.type === "image/jpeg") {
      setimgeURl_5(URL.createObjectURL(Imge_5));
    } else if (Imge_5 && Imge_5.type !== "image/jpeg") {
      setimgeURl_5(null);
      setImge_5(null);
      addToast({
        title: t("upload_image_jpg_only"),
        color: "danger",
      });
    }
  }, [Imge_1, Imge_2, Imge_3, Imge_4, Imge_5]);

  async function CollectingValuesOfServiceInputs() {
    setIsloading(true);
    const formdata = new FormData();
    if (TitelInput) {
      formdata.append("title", TitelInput);
      setErrorTitelInput(null);
    } else if (TitelInput === "" || TitelInput === null) {
      setErrorTitelInput(t("title_required"));
    } else {
      setErrorTitelInput(t("invalid_title"));
    }
    if (descriptionInput) {
      formdata.append("description", descriptionInput);
      setErrordescriptionInput(null);
    } else if (descriptionInput === "") {
      setErrordescriptionInput(t("description_required"));
    }
    if (Imge_1) {
      formdata.append("serviceImages", Imge_1);
    }
    if (Imge_2) {
      formdata.append("serviceImages", Imge_2);
    }
    if (Imge_3) {
      formdata.append("serviceImages", Imge_3);
    }
    if (Imge_4) {
      formdata.append("serviceImages", Imge_4);
    }
    if (Imge_5) {
      formdata.append("serviceImages", Imge_5);
    }

    if (formdata.has("title") && formdata.has("description")) {
      if (formdata.has("serviceImages")) {
        await CallingServiceAPI(formdata);
        setIsloading(false);
      } else {
        addToast({
          title: t("image_required"),
          color: "danger",
        });
      }
    } else {
      addToast({
        title: t("title_or_description_required"),
        color: "danger",
      });
      setIsloading(false);
    }
    setIsloading(false);
  }

  async function CallingServiceAPI(formData: any) {
    const respons: AddServiceRespons = await AddServiceAPI(formData);
    if (respons.message) {
      CallingUserServicesAPI(data!.user.userId);
      addToast({
        title: respons.message,
        color: "success",
      });
      setIsloading(false);
      if (data?.user.userId) {
        CallingUserServicesAPI(data?.user.userId);
      }
      ClearServiceFilds();
      console.log(respons);
      setAddServiceTogel(false);
    } else {
      setIsloading(false);
    }
    setIsloading(false);
  }

  function ClearServiceFilds() {
    setTitelInput(null);
    setdescriptionInput("");
    //
    setImge_1(null);
    setimgeURl_1(null);
    //
    //
    setImge_2(null);
    setimgeURl_2(null);
    //
    //
    setImge_3(null);
    setimgeURl_3(null);
    //
    //
    setImge_4(null);
    setimgeURl_4(null);
    //
    //
    setImge_5(null);
    setimgeURl_5(null);
    //
  }

  async function DeleteService(ServiceID: string) {
    const res = await DeleteUserService(ServiceID);
    console.log(res);
    if (res.message) {
      CallingUserServicesAPI(data?.user.userId!);
      addToast({
        title: res.message,
        color: "danger",
      });
    }
  }
  return (
    <section className="min-h-screen w-full flex flex-col bg-linear-to-b from-white to-gray-50 py-8">
      {AddServiceTogel ? (
        <div className="   ">
          {/* skill - titel */}
          <div className=" md:flex gap-4  justify-around   m-3">
            <div className="flex w-2/5 m-3  me-auto flex-wrap md:flex-nowrap gap-4">
              {/* /////////// Skill selection ///////////////  */}
              <Autocomplete
                onInputChange={(S) => setTitelInput(S)}
                isClearable={true}
                className=" cursor-pointer"
                label={t("title_label")}
                isInvalid={Boolean(ErrorTitelInput)}
                errorMessage={ErrorTitelInput}
              >
                {Skills.map((skill) => (
                  <AutocompleteItem key={skill.label}>
                    {skill.label}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
              {/* /////////// Skill selection ///////////////  */}
              {/* //////////////////////////////////////////////// */}

              {/* //////////////////////////////////////////////// */}
              {/* ///////////////////KeyWord selection ///////////////// */}
              {/* <Autocomplete className="max-w-xs cursor-pointer" label="KeyWord">
              {KeyWords.map((keyword) => (
                <AutocompleteItem key={keyword.keyword}>
                  {keyword.keyword}
                </AutocompleteItem>
              ))}
            </Autocomplete> */}
              {/* ///////////////////KeyWord selection ///////////////// */}
              {/* //////////////////////////////////////////////// */}
            </div>
          </div>
          {/* description */}
          <div className=" m-3 mb-4">
            <Textarea
              isInvalid={Boolean(ErrordescriptionInput)}
              errorMessage={ErrordescriptionInput}
              onChange={(e) => setdescriptionInput(e.target.value)}
              value={descriptionInput!}
              maxLength={200}
              className="p-3 cursor-pointer"
              label={t("skill_description")}
              placeholder={t("description_placeholder")}
              type="text"
            />
            <span className="ms-5 text-sm text-gray-500">
              {200 - descriptionInput?.length!}
            </span>
          </div>
          {/* imges */}
          <div className="flex justify-center flex-wrap gap-5  ">
            {/* --------- imge 1 --------------- */}
            <div className="w-30 h-30 relative rounded-2xl overflow-hidden group shadow-lg border border-gray-100">
              {Imge_1 ? (
                <div className="relative">
                  <img src={imgeURl_1} alt="" />
                  <MdCancel
                    onClick={() => {
                      setimgeURl_1(null);
                      setImge_1(null);
                    }}
                    className=" cursor-pointer absolute top-0 right-0 text-2xl text-main-background"
                  />
                </div>
              ) : (
                <span className="absolute inset-0 cursor-pointer flex flex-col justify-center items-center gap-2 bg-white/70 p-3">
                  <CiSquarePlus className="text-6xl transition-all text-main-background" />
                  <label
                    htmlFor="Imge_1"
                    className="absolute inset-0 cursor-pointer"
                  ></label>
                  <input
                    onChange={(e) => setImge_1(e.target.files![0])}
                    id="Imge_1"
                    type="file"
                    className="hidden"
                  />
                </span>
              )}{" "}
            </div>
            {/* ---------- imge 2 ------------- */}
            <div className="w-30 h-30 relative rounded-2xl overflow-hidden group shadow-lg border border-gray-100">
              {Imge_2 ? (
                <div className="relative">
                  <img src={imgeURl_2} alt="" />
                  <MdCancel
                    onClick={() => {
                      setimgeURl_2(null);
                      setImge_2(null);
                    }}
                    className=" cursor-pointer absolute top-0 right-0 text-2xl text-main-background"
                  />
                </div>
              ) : (
                <span className="absolute inset-0 cursor-pointer flex flex-col justify-center items-center gap-2 bg-white/70 p-3">
                  <CiSquarePlus className="text-6xl transition-all text-main-background" />
                  <label
                    htmlFor="Imge_2"
                    className="absolute inset-0 cursor-pointer"
                  ></label>
                  <input
                    onChange={(e) => setImge_2(e.target.files![0])}
                    id="Imge_2"
                    type="file"
                    className="hidden"
                  />
                </span>
              )}{" "}
            </div>
            {/* --------- imge 3 ------------- */}
            <div className="w-30 h-30 relative rounded-2xl overflow-hidden group shadow-lg border border-gray-100">
              {Imge_3 ? (
                <div className="relative">
                  <img src={imgeURl_3} alt="" />
                  <MdCancel
                    onClick={() => {
                      setimgeURl_3(null);
                      setImge_3(null);
                    }}
                    className=" cursor-pointer absolute top-0 right-0 text-2xl text-main-background"
                  />
                </div>
              ) : (
                <span className="absolute inset-0 cursor-pointer flex flex-col justify-center items-center gap-2 bg-white/70 p-3">
                  <CiSquarePlus className="text-6xl transition-all text-main-background" />
                  <label
                    htmlFor="Imge_3"
                    className="absolute inset-0 cursor-pointer"
                  ></label>
                  <input
                    onChange={(e) => setImge_3(e.target.files![0])}
                    id="Imge_3"
                    type="file"
                    className="hidden"
                  />
                </span>
              )}{" "}
            </div>
            {/* ---------- imge 4 ----------- */}
            <div className="w-30 h-30 relative rounded-2xl overflow-hidden group shadow-lg border border-gray-100">
              {Imge_4 ? (
                <div className="relative">
                  <img src={imgeURl_4} alt="" />
                  <MdCancel
                    onClick={() => {
                      setimgeURl_4(null);
                      setImge_4(null);
                    }}
                    className=" cursor-pointer absolute top-0 right-0 text-2xl text-main-background"
                  />
                </div>
              ) : (
                <span className="absolute inset-0 cursor-pointer flex flex-col justify-center items-center gap-2 bg-white/70 p-3">
                  <CiSquarePlus className="text-6xl transition-all text-main-background" />
                  <label
                    htmlFor="Imge_4"
                    className="absolute inset-0 cursor-pointer"
                  ></label>
                  <input
                    onChange={(e) => setImge_4(e.target.files![0])}
                    id="Imge_4"
                    type="file"
                    className="hidden"
                  />
                </span>
              )}{" "}
            </div>
            {/* ----------- imge 5 ----------- */}
            <div className="w-30 h-30 relative rounded-2xl overflow-hidden group shadow-lg border border-gray-100">
              {Imge_5 ? (
                <div className="relative">
                  <img src={imgeURl_5} alt="" />
                  <MdCancel
                    onClick={() => {
                      setimgeURl_5(null);
                      setImge_5(null);
                    }}
                    className=" cursor-pointer absolute top-0 right-0 text-2xl text-main-background"
                  />
                </div>
              ) : (
                <span className="absolute inset-0 cursor-pointer flex flex-col justify-center items-center gap-2 bg-white/70 p-3">
                  <CiSquarePlus className="text-6xl transition-all text-main-background" />
                  <label
                    htmlFor="Imge_5"
                    className="absolute inset-0 cursor-pointer"
                  ></label>
                  <input
                    onChange={(e) => setImge_5(e.target.files![0])}
                    id="Imge_5"
                    type="file"
                    className="hidden"
                  />
                </span>
              )}{" "}
            </div>
          </div>
          {/* btn */}
          <div className=" content-center w-fit flex gap-5  mx-auto my-5 ">
            <Button
              isLoading={Isloading}
              onPress={CollectingValuesOfServiceInputs}
              className=" cursor-pointer"
              color="success"
            >
              {t("submit_service")}
            </Button>
            <Button
              onPress={() => {
                setAddServiceTogel(!AddServiceTogel), setIsloading(false);
              }}
              color="danger"
            >
              {t("cancel")}
            </Button>
          </div>
        </div>
      ) : (
        <div className="m-5   ">
          <Button
            onPress={(e) => setAddServiceTogel(!AddServiceTogel)}
            className="bg-main-background text-primry-background"
          >
            {" "}
            <GoPlus className="text-4xl inline-block " /> {t("add_service")}
          </Button>
        </div>
      )}
      {/*  ------------- user services  -------------- */}
      <div className="w-full p-4 md:p-8">
        {/* Header section */}
        <div className="mb-8">
          <div className="flex items-end justify-between gap-4 mb-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {" "}
             {t("your_services")}{" "}
            </h2>
            <span className="inline-block px-4 py-2 bg-linear-to-r from-orange-100 to-orange-50 border border-orange-200 rounded-full text-sm font-medium text-orange-700">
              {UserServices?.services.length ?? 0} {t("service_label_plural")}
            </span>
          </div>
          <div className="h-1 w-16 bg-linear-to-r from-orange-500 to-orange-400 rounded-full"></div>
        </div>

        {/* Services grid - stacked layout */}
        <div className="space-y-8 ">
          {UserServices?.services.map((UserService, index) => (
            <>
              <div className=" group relative ">
                <article
                  key={index}
                  className="z-10 relative group-hover:translate-x-17 bg-white  border border-orange-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6 md:p-8 border-l-5  border-main-background">
                    <span className=" pb-3 block text-right text-main-background">
                      {" "}
                      {formatDistanceToNow(
                        fromUnixTime(UserService.createdAt),
                        {
                          addSuffix: true,
                          locale: ar,
                        }
                      )}{" "}
                      {/* يتوفيييق انا عامل التاريخ عربي */}
                    </span>
                    {/* Top section: Title + Meta */}
                    <div className="mb-2 pb-3 border-b border-orange-100">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900  transition-colors">
                          <span className="text-main-background  font-bold">
                            Skill type :
                          </span>{" "}
                          {UserService.serviceName}
                        </h3>
                        <span className="inline-flex px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-lg w-fit">
                          ID: {UserService.serviceId}
                        </span>
                      </div>
                      <p className="text-gray-600 font-medium text-lg">
                        <span className="text-main-background  font-bold">
                          Provider:
                        </span>{" "}
                        {UserServices?.fullname}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        <span className="text-main-background font-bold">
                          Description
                        </span>{" "}
                        : {UserService.description}
                      </p>
                    </div>

                    {/* Images gallery */}
                    {UserService.serviceImages &&
                      UserService.serviceImages.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-orange-500 rounded-full"></span>
                            {t("gallery")} ({UserService.serviceImages.length})
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {UserService.serviceImages.map((img, i) => (
                              <div
                                key={i}
                                className="relative rounded-xl overflow-hidden bg-linear-to-br from-gray-100 to-gray-50 border border-orange-200 group/image hover:border-orange-400 transition-all duration-300 aspect-video"
                              >
                                <Image
                                  src={`https://gp2025.runasp.net${img}`}
                                  alt={`${UserService.serviceName}-${i}`}
                                  width={400}
                                  height={300}
                                  className="object-cover w-full h-full group-hover/image:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                  <span className="opacity-0 group-hover/image:opacity-100 text-white text-xs font-bold transition-opacity duration-300">
                                    {i + 1}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* Footer: User info + Stats */}
                    <div className="pt-4 border-t border-orange-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold">
                          {UserServices?.fullname?.charAt(0).toUpperCase() ??
                            "U"}
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Provider
                          </p>
                          <p className="text-sm font-semibold text-gray-900">
                            {UserServices?.fullname}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="px-3 py-1 bg-gray-100 rounded-lg">
                          User ID:{" "}
                          <span className="font-mono font-bold">
                            {UserServices?.userId}
                          </span>
                        </span>
                        <span className="px-3 py-1 bg-linear-to-r from-orange-100 to-orange-50 border border-orange-200 rounded-lg font-medium text-orange-700">
                          {UserService.serviceImages?.length ?? 0} Image
                          {(UserService.serviceImages?.length ?? 0) !== 1
                            ? "s"
                            : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
                {/*  Delete & Edite ICons -- */}
                <span className=" bg-green-500 absolute left-0 top-0 bottom-0 z-0 text-5xl flex flex-col rounded-md  justify-evenly p-3">
                  <MdDelete
                    onClick={() => DeleteService(UserService.serviceId)}
                    className=" cursor-pointer  hover:text-red-600 transition-all "
                  />
                  <FaEdit className="  cursor-pointer  hover:text-yellow-300  transition-all" />
                </span>
              </div>
            </>
          ))}

          {/* Empty state */}
          {(!UserServices?.services || UserServices.services.length === 0) && (
            <div className="py-16 text-center">
              <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m0 0h6m-6-6h-6m0 0H6m6 6H6m6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("no_services_yet_title")}</h3>
              <p className="text-gray-600 mb-6">{t("no_services_yet_paragraph")}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
