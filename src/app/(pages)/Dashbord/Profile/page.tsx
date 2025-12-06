"use client";
import { UserData, UserDataRespons } from "@/app/types/UserInterface";
import UpdateingUserInfo from "@/services/ProfileAPI/UpdateUserInfo";
import CallingUserInfoAPI from "@/services/ProfileAPI/UserInfoAPI";
import { AiOutlineLoading } from "react-icons/ai";
import { CalendarDate } from "@internationalized/date";
import {
  addToast,
  Autocomplete,
  AutocompleteItem,
  Button,
  DateInput,
  Input,
  Textarea,
  ToastProvider,
} from "@heroui/react";
import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdEdit, MdOutlineAddPhotoAlternate } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { Governorates } from "@/components/DashBord Commponents/Profile/Governorates";
import Loader from "@/components/Loader";
import DeleteUser from "@/services/ProfileAPI/DeleteUser";

export default function page() {
  const t = useTranslations("Profile");
  //
  //
  //
  const { data } = useSession();
  //

  //
  //
  const [LoadingPage, setLoadingPage] = useState<boolean>(true);
  //
  /////////////--------- Edit mode trigger ---------////////////
  const [EditeMode, setEditeMode] = useState<boolean>(false);
  ///
  //  ///////////////// saveing btn loading /////////////////

  const [LoadingSaveBtn, setLoadingSaveBtn] = useState<boolean>(false);
  //////////////////////////////////////////
  //
  ///////////////// IMGE FILE /////////////////////////
  const [ImgeInputURL, setImgeInputURL] = useState<any>(null);
  const [ImgeInputFILES, setImgeInputFILES] = useState<any>();
  //////////////////////////////////////////
  //
  /////////////--------- UserInfo -- state ---------////////////
  const [UserIFON, setUserIFON] = useState<UserData>();
  //--------------
  //------------------
  //----------------------
  //--------------------------
  /////////////--------- Input---Bio -- state ---------///////////////////////////////////////////
  const [CountroledInputBIO, setCountroledInputBIO] = useState<string | null>(
    null
  );
  // error state
  const [ErorrBio, setErorrBio] = useState<string | null>(null);
  //
  /////////////--------- Input---Name -- state ---------////////////////////////////////////////
  const [CountroledNameInput, setCountroledNameInput] = useState<string | null>(
    null
  );
  // error state
  const [ErorrName, setErorrName] = useState<string | null>(null);
  //
  /////////////--------- Input---PhoneNumber(1) --state  ---------////////////////////////////////
  const [CountroledPhone_1_Input, setCountroledPhone_1_Input] = useState<
    string | null
  >();
  const [ErorrPhone_1, setErorrPhone_1] = useState<string | null>(null);
  //
  /////////////--------- Input---PhoneNumber(2) --state  ---------////////////////////////////////
  const [CountroledPhone_2_Input, setCountroledPhone_2_Input] = useState<
    string | null
  >();
  const [ErorrPhone_2, setErorrPhone_2] = useState<string | null>(null);
  //
  /////////////--------- Input---Email--state  ---------/////////////////////////////////////////
  const [CountroledEmailInput, setCountroledEmailInput] = useState<
    string | null
  >(null);
  const [ErorrEmail, setErorrEmail] = useState<string | null>(null);
  //
  ///-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/---------- [Selection inputs] ---------/-/-/-/-/-/-/-/--/--/-/-/-/-/-/-/-//-/-/--/
  //
  //
  /////////////////////////--------- Input---Address--state  ---------////////////////////////////////
  const [CountroledAddress_Selection, setCountroledAddress_Selection] =
    useState<string | null>(null);
  const [UnlockInput, setUnlockInput] = useState<boolean>(false);
  const [ErorrAddress, setErorrAddress] = useState<string | null>(null);
  //
  //
  /////////////////////////--------- Input---Gender--state  ---------////////////////////////////////
  const [CountroledGender_Selection, setCountroledGender_Selection] = useState<
    string | null
  >(null);
  const [UnlockGenderInput, setUnlockGenderInput] = useState<boolean>(false);

  const [ErorrGender, setErorrGender] = useState<string | null>(null);
  //
  //
  /////////////////////////--------- Input---DateOfBirth--state  ---------////////////////////////////////
  const [CountroledDateOfBirth_Selection, setCountroledDateOfBirth_Selection] =
    useState<any>(null);
  const [ErorrDateOfBirth, setErorrDateOfBirth] = useState<any>();
  //
  //
  //
  // const [ImgeInputFiles, setImgeInputFiles] = useState<any>();

  function ExtraxtingImgeFile(e: any) {
    setImgeInputURL(URL.createObjectURL(e.target.files[0]));
    setImgeInputFILES(e.target.files[0]);
    // get the img file and display it
    console.log(ImgeInputURL);
  }

  //
  //console.log(ImgeInputFiles);
  //
  //

  const phoneRegix = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/;
  const EmailRegix = /^[\w\.-]+@[\w\.-]+\.\w{2,}$/;

  async function CollectNewData() {
    setLoadingSaveBtn(true);
    const formdata = new FormData();
    //

    formdata.append("Bio", CountroledInputBIO + "");
    //
    //
    //
    ////////////////-----name ////////////////////////
    if (CountroledNameInput === "") {
      setErorrName(t("cant_let_empty"));
    } else if (CountroledNameInput!?.length > 20) {
      setErorrName(t("name_max_length"));
    } else if (CountroledNameInput!?.length < 3) {
      setErorrName(t("name_min_length"));
    } else {
      formdata.append("Fullname", CountroledNameInput + "");
      setErorrName(null);
    }
    ///////////////////////////////////////////////
    //
    //
    //////////////-----------phone (1) ////////////////
    if ("+" + CountroledPhone_1_Input === UserIFON?.phoneNumber) {
    } else if (CountroledPhone_1_Input === "") {
      setErorrPhone_1(t("cant_let_empty"));
    } else if (phoneRegix.test(CountroledPhone_1_Input!)) {
      formdata.append("PhoneNumber", "+" + CountroledPhone_1_Input);
      setErorrPhone_1(null);
    } else {
      setErorrPhone_1(t("phone_invalid"));
    }
    ///////////////////////////////////////////////
    //
    //
    //////////////-----------phone (2) ////////////////
    if ("+" + CountroledPhone_2_Input === UserIFON?.secondPhoneNumber) {
      setErorrPhone_2(null);
    } else if (phoneRegix.test(CountroledPhone_2_Input!)) {
      formdata.append("SecondPhoneNumber", "+" + CountroledPhone_2_Input);
      setErorrPhone_2(null);
    } else if (CountroledPhone_2_Input === "") {
      setErorrPhone_2(null);
    } else if (
      CountroledPhone_2_Input !== null &&
      CountroledPhone_2_Input! !== ""
    ) {
      setErorrPhone_2(t("phone_invalid"));
    }
    ///////////////////////////////////////////////
    //
    //
    ////////////--------------- Email
    if (CountroledEmailInput === "") {
      setErorrEmail(t("cant_let_empty"));
    } else if (EmailRegix.test(CountroledEmailInput!)) {
      formdata.append("Email", CountroledEmailInput + "");
      setErorrEmail(null);
    } else {
      setErorrEmail(t("email_invalid"));
    }
    // //////////////////////////////////////////////
    //
    //
    //
    //
    //
    formdata.append("Address", CountroledAddress_Selection + "");
    //
    //
    //
    formdata.append("Gender", CountroledGender_Selection + "");
    //
    //
    //
    formdata.append("DateOfBirth", CountroledDateOfBirth_Selection + "");
    //
    //
    //
    ///////////// img img img img img img img
    if (ImgeInputFILES) {
      formdata.append("ProfileImage", ImgeInputFILES);
    }
    //
    //

    console.log(formdata.get("Bio"));
    console.log(formdata.get("Fullname"));
    console.log(formdata.get("PhoneNumber"));
    console.log(formdata.get("SecondPhoneNumber"));
    console.log(formdata.get("Email"));
    console.log(formdata.get("Address"));
    console.log(formdata.get("Gender"));
    console.log(formdata.get("DateOfBirth"));
    console.log(formdata.get("ProfileImage"));

    //
    //
    //
    //
    //
    //
    await CallingAPI(formdata);
    //
    //
    await setLoadingSaveBtn(false);
  }

  async function CallingAPI(data: any) {
    const res = await UpdateingUserInfo(data);
    console.log(res);
    setLoadingSaveBtn(false);
    if (res.message) {
      UserInfo();
      addToast({
        title: res.message,
        color: "success",
      });
      console.log(res);
      setEditeMode(false);
      console.log("okokok");
    } else {
      addToast({
        title: t("error"),
        color: "danger",
      });
    }
  }
  //
  //
  //
  //CountroledInputBIO
  //ErorrBio
  //

  //CountroledNameInput
  //ErorrName
  //

  //CountroledPhone_1_Input
  //ErorrPhone_1
  //

  //CountroledPhone_2_Input
  //ErorrPhone_2
  //

  //CountroledEmailInput
  //ErorrEmail
  //
  //CountroledAddress_Selection
  //ErorrAddress
  //
  //CountroledGender_Selection
  //ErorrGender
  //
  //CountroledDateOfBirth_Selection
  //ErorrDateOfBirth
  //

  async function UserInfo() {
    if (data?.user.userId) {
      const respons: UserDataRespons = await CallingUserInfoAPI(
        data?.user.userId
      );
      if (respons) {
        setLoadingPage(false);
        setUserIFON(respons.data);
        BindingData(respons.data);
      }
    }
  }
  //

  function BindingData(Data: UserData) {
    console.log(Data);

    setCountroledInputBIO(Data.bio!);
    //
    //name
    setCountroledNameInput(Data.fullname);
    //
    //phone (1)
    // guard replace in case values are null/undefined
    try {
      setCountroledPhone_1_Input(
        Data.phoneNumber ? Data.phoneNumber.replace("+", "") : null
      );
    } catch (e) {
      setCountroledPhone_1_Input(Data.phoneNumber ?? null);
    }
    //
    //phone (2)
    try {
      setCountroledPhone_2_Input(
        Data.secondPhoneNumber ? Data.secondPhoneNumber.replace("+", "") : null
      );
    } catch (e) {
      setCountroledPhone_2_Input(Data.secondPhoneNumber ?? null);
    }
    //
    //emile
    setCountroledEmailInput(Data.email);

    //Address
    setCountroledAddress_Selection(Data.address);
    //
    //Gender
    setCountroledGender_Selection(Data.gender);
    //
    //DateOfBirth
    setCountroledDateOfBirth_Selection(Data.dateOfBirth);
    //
    // img
    setImgeInputURL(Data.profileImage);
  }
  //
  //
  // did amount
  // amount update
  useEffect(() => {
    //
    //
    if (
      (CountroledInputBIO != UserIFON?.bio && CountroledInputBIO != null) ||
      (CountroledNameInput != UserIFON?.fullname &&
        CountroledNameInput != null) ||
      //
      ("+" + CountroledPhone_1_Input != UserIFON?.phoneNumber &&
        CountroledPhone_1_Input != null) ||
      ("+" + CountroledPhone_2_Input != UserIFON?.secondPhoneNumber &&
        CountroledPhone_2_Input != null) ||
      (CountroledEmailInput != UserIFON?.email &&
        CountroledEmailInput != null) ||
      //
      (CountroledAddress_Selection != UserIFON?.address &&
        CountroledAddress_Selection != null) ||
      //
      (CountroledGender_Selection != UserIFON?.gender &&
        CountroledGender_Selection != null) ||
      //
      (CountroledDateOfBirth_Selection != UserIFON?.dateOfBirth &&
        CountroledDateOfBirth_Selection != null) ||
      (ImgeInputURL != UserIFON?.profileImage && ImgeInputURL != null)
      //
    ) {
      setEditeMode(true);
    }
    //
    //
    //
  }, [
    CountroledInputBIO,
    CountroledNameInput,
    CountroledPhone_1_Input,
    CountroledPhone_2_Input,
    CountroledEmailInput,
    CountroledAddress_Selection,
    CountroledGender_Selection,
    CountroledDateOfBirth_Selection,
    ImgeInputURL,
  ]);

  useEffect(() => {
    //

    UserInfo();
    //
  }, [data?.user.userId]);

  async function DeleteAccount() {
    const respons = await DeleteUser();
    if (respons) {
      signOut();
      console.log(respons);
    }
  }

  return (
    <>
      {LoadingPage ? (
        <div className="h-screen content-center text-center">
          <div className="-translate-y-full">
            <Loader />
            <span className="ps-6  my-3">{t("loading")}</span>
          </div>
        </div>
      ) : (
        <section
          className={` bg-linear-to-b from-primry-background via-gray-50 to-white min-h-screen w-full selection:bg-main-background selection:text-primry-background`}
        >
          {/* -Profile header- */}
          <header className="relative w-full pt-8 pb-12 bg-linear-to-r from-main-background to-orange-700 shadow-xl rounded-b-2xl overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="grid max-md:justify-center md:grid-cols-5 gap-6 items-center">
                {/* Profile Image */}
                <div className="max-lg:col-span-2 mx-auto">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden group shadow-2xl ring-2 ring-white border-4 border-primry-background hover:shadow-3xl transition-all duration-300">
                    <img
                      src={
                        ImgeInputURL
                          ? ImgeInputURL
                          : "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                      }
                      className="h-full w-full object-cover"
                      alt="Profile"
                    />
                    <span className="absolute cursor-pointer bottom-0 left-0 right-0 h-full bg-main-background/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center">
                      <MdOutlineAddPhotoAlternate className="text-4xl text-primry-background mb-2" />
                      <p className="text-primry-background text-sm font-semibold">
                        {t("change_photo")}
                      </p>
                      <label
                        htmlFor="ImgInput"
                        className="absolute inset-0 cursor-pointer"
                      >
                        <input
                          onChange={(e) => ExtraxtingImgeFile(e)}
                          id="ImgInput"
                          className="hidden"
                          type="file"
                        />
                      </label>
                    </span>
                  </div>
                </div>

                {/* User Info */}
                <div className="col-span-3 max-md:text-center text-primry-background">
                  <h2 className="text-4xl font-bold mb-2">
                    {UserIFON?.fullname}
                  </h2>
                  <p className="text-lg font-semibold opacity-90">
                    {UserIFON?.email}
                  </p>
                  <p className="text-sm mt-3 opacity-75 max-w-md">
                    {UserIFON?.bio || t("add_bio")}
                  </p>
                </div>

                {/* Action Buttons */}
                <div
                  className={`${
                    EditeMode &&
                    " fixed top-0 left-0 right-0 bg-main-background shadow-xl z-40 py-4"
                  } col-span-1 flex justify-center gap-4 p-2`}
                >
                  {EditeMode && (
                    <div className="flex gap-3">
                      {/* Save Button */}
                      <Button
                        onPress={() => CollectNewData()}
                        isLoading={LoadingSaveBtn}
                        className="bg-linear-to-r from-main-background to-orange-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <span className="text-lg">✓</span> {t("save")}
                      </Button>
                      {/* Cancel Button */}
                      <Button
                        onPress={() => {
                          setEditeMode(!EditeMode),
                            setUnlockGenderInput(false),
                            setUnlockInput(false);
                          BindingData(UserIFON!);
                          setLoadingSaveBtn(false);
                        }}
                        className="bg-linear-to-r from-red-500 to-red-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <span className="text-lg">✕</span> {t("cancel")}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>
          {/* ------------ bio --------------------- */}
          <div className="p-5  ">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-8 border-main-background">
              <label className="block text-main-background font-bold text-lg mb-3">
                {t("about_yourself")}
              </label>
              <Textarea
                isInvalid={Boolean(ErorrBio)}
                errorMessage={ErorrBio}
                onChange={(e) => setCountroledInputBIO(e.target.value)}
                value={
                  CountroledInputBIO! === "null" ? "" : CountroledInputBIO!
                }
                maxLength={200}
                placeholder={t("bio_placeholder")}
                variant="faded"
                type="text"
                className="rounded-lg"
              />
              {CountroledInputBIO && (
                <span className="text-gray-500 text-sm mt-2 block">
                  {t("remaining_characters")}: {200 - CountroledInputBIO.length}{" "}
                  {t("characters")}
                </span>
              )}
            </div>
          </div>

          {/* -Profile Body- */}
          <div className="w-full bg-linear-to-b from-white to-gray-50 py-12">
            <div className="container mx-auto px-4">
              <div className="grid max-sm:grid-cols-1 grid-cols-2  gap-8">
                {/* Column 1 - Name, Phone Numbers - Email */}
                {/* Name Input */}
                <div className="p-6 bg-white rounded-2xl shadow-lg border-l-8 border-blue-500 mb-6 hover:shadow-xl transition-all duration-300">
                  <label className="block text-main-background font-bold text-lg mb-2">
                    {t("full_name")}
                  </label>
                  <Input
                    isInvalid={Boolean(ErorrName)}
                    errorMessage={ErorrName}
                    onChange={(e) => setCountroledNameInput(e.target.value)}
                    value={CountroledNameInput!}
                    variant="faded"
                    type="text"
                    placeholder={t("full_name_placeholder")}
                  />
                </div>

                {/* Phone 1 Input */}
                <div className="p-6 bg-white rounded-2xl shadow-lg border-l-8 border-main-background mb-6 hover:shadow-xl transition-all duration-300">
                  <label className="block text-main-background font-bold text-lg mb-2">
                    {t("first_phone")}
                  </label>
                  <Input
                    isInvalid={Boolean(ErorrPhone_1)}
                    errorMessage={ErorrPhone_1}
                    onChange={(e) => setCountroledPhone_1_Input(e.target.value)}
                    value={CountroledPhone_1_Input!}
                    variant="faded"
                    type="text"
                    placeholder={t("phone_placeholder")}
                  />
                </div>

                {/* Phone 2 Input */}
                <div className="p-6 bg-white rounded-2xl shadow-lg border-l-8 border-purple-500 mb-6 hover:shadow-xl transition-all duration-300">
                  <label className="block text-main-background font-bold text-lg mb-2">
                    {t("second_phone")}
                  </label>
                  <Input
                    isInvalid={Boolean(ErorrPhone_2)}
                    errorMessage={ErorrPhone_2}
                    onChange={(e) => setCountroledPhone_2_Input(e.target.value)}
                    value={CountroledPhone_2_Input!}
                    type="text"
                    variant="faded"
                    placeholder={t("phone_placeholder")}
                  />
                </div>
                {/* Email Input */}
                <div className="p-6 bg-white rounded-2xl shadow-lg border-l-8 border-red-500 mb-6 hover:shadow-xl transition-all duration-300">
                  <label className="block text-main-background font-bold text-lg mb-2">
                    {t("email")}
                  </label>
                  <Input
                    isInvalid={Boolean(ErorrEmail)}
                    errorMessage={ErorrEmail}
                    onChange={(e) => setCountroledEmailInput(e.target.value)}
                    value={CountroledEmailInput!}
                    variant="faded"
                    type="email"
                    placeholder={t("email_placeholder")}
                  />
                </div>
              </div>
            </div>

            {/* Column 2 - Email, Address, Gender, Date */}
            <div className="  ">
              {/* Address & Gender */}
              <div className="grid max-sm:grid-cols-1 grid-cols-3 gap-6 mb-6 p-4">
                {/* Address */}
                <div className="p-6 bg-white rounded-2xl shadow-lg border-l-8 border-orange-500 hover:shadow-xl transition-all duration-300">
                  <label className="block text-main-background font-bold text-lg mb-2">
                    {t("governorate")}
                  </label>
                  {UnlockInput ? (
                    <Autocomplete
                      isInvalid={Boolean(ErorrAddress)}
                      errorMessage={ErorrAddress}
                      onInputChange={(S) => setCountroledAddress_Selection(S)}
                      className="w-full"
                      defaultItems={Governorates}
                      placeholder={t("governorate")}
                    >
                      {(Governorate) => (
                        <AutocompleteItem key={Governorate.label}>
                          {Governorate.label}
                        </AutocompleteItem>
                      )}
                    </Autocomplete>
                  ) : (
                    <Button
                      onPress={() => setUnlockInput(!UnlockInput)}
                      className="w-full bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold p-3 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      {CountroledAddress_Selection === "null" ? (
                        <span className="text-purple-700">"add address !"</span>
                      ) : (
                        CountroledAddress_Selection
                      )}
                    </Button>
                  )}
                </div>

                {/* Gender */}
                <div className="p-6 bg-white rounded-2xl shadow-lg border-l-8 border-pink-500 hover:shadow-xl transition-all duration-300">
                  <label className="block text-main-background font-bold text-lg mb-2">
                    {t("gender")}
                  </label>
                  {UnlockGenderInput ? (
                    <Autocomplete
                      isRequired
                      isInvalid={Boolean(ErorrGender)}
                      errorMessage={ErorrGender}
                      onInputChange={(S) => setCountroledGender_Selection(S)}
                      value={CountroledGender_Selection!}
                      className="w-full"
                      placeholder={t("gender")}
                    >
                      <AutocompleteItem>{t("male")}</AutocompleteItem>
                      <AutocompleteItem>{t("female")}</AutocompleteItem>
                    </Autocomplete>
                  ) : (
                    <Button
                      onPress={() => setUnlockGenderInput(!UnlockGenderInput)}
                      className="w-full bg-linear-to-r from-pink-500 to-pink-600 text-white font-semibold p-3 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      {CountroledGender_Selection}
                    </Button>
                  )}
                </div>

                {/* Date of Birth */}
                <div className="p-6 w-full mx-auto bg-white rounded-2xl shadow-lg border-l-8 border-cyan-500 hover:shadow-xl transition-all duration-300">
                  <label className="block text-main-background font-bold text-lg mb-2">
                    {t("date_of_birth")}
                  </label>
                  <div className="flex w-full gap-4">
                    <Input
                      isInvalid={Boolean(ErorrDateOfBirth)}
                      errorMessage={ErorrDateOfBirth}
                      onChange={(e) =>
                        setCountroledDateOfBirth_Selection(e.target.value)
                      }
                      value={
                        CountroledDateOfBirth_Selection &&
                        CountroledDateOfBirth_Selection.split("T")[0]
                      }
                      className="w-full"
                      type="date"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //////// delete account  */}
          <div className=" border-y-2 p-4 border-red-600 text-center">
            <Button onPress={DeleteAccount} className="px-10" color="danger">
              Delete
            </Button>
            <span className="px-3 text-red-600 "> : Delete Account</span>
          </div>
        </section>
      )}
    </>
  );
}
