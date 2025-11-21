"use client";
import { UserData, UserDataRespons } from "@/app/types/UserInterface";
import UpdateingUserInfo from "@/services/UpdateUserInfo";
import CallingUserInfoAPI from "@/services/UserInfoAPI";
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
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdEdit, MdOutlineAddPhotoAlternate } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { Governorates } from "@/components/DashBord Commponents/Profile/Governorates";

export default function page() {
  //
  //
  //
  const { data } = useSession();
  //

  //
  //
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
      setErorrName("Cant let Name Empty");
    } else if (CountroledNameInput!?.length > 20) {
      setErorrName("name cant be more then 20 char");
    } else if (CountroledNameInput!?.length < 3) {
      setErorrName("name cant be less then 3 char");
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
      setErorrPhone_1("Cant let Phone Number Empty!");
    } else if (phoneRegix.test(CountroledPhone_1_Input!)) {
      formdata.append("PhoneNumber", "+" + CountroledPhone_1_Input);
      setErorrPhone_1(null);
    } else {
      setErorrPhone_1("Phone Number inValid");
    }
    ///////////////////////////////////////////////
    //
    //
    //////////////-----------phone (2) ////////////////
    if ("+" + CountroledPhone_2_Input === UserIFON?.secondPhoneNumber) {
    } else if (phoneRegix.test(CountroledPhone_2_Input!)) {
      formdata.append("SecondPhoneNumber", "+" + CountroledPhone_2_Input);
      setErorrPhone_2(null);
    } else if (CountroledPhone_2_Input === "") {
      setErorrPhone_2(null);
    } else {
      setErorrPhone_2("Second Phone Number inValid");
    }
    ///////////////////////////////////////////////
    //
    //
    ////////////--------------- Email
    if (CountroledEmailInput === "") {
      setErorrEmail("Cant let the fuckin Email Empty Man!!");
    } else if (EmailRegix.test(CountroledEmailInput!)) {
      formdata.append("Email", CountroledEmailInput + "");
      setErorrEmail(null);
    } else {
      setErorrEmail("Email inValid");
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
        title: "Error",
        color: "success",
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
    setCountroledPhone_1_Input(Data.phoneNumber.replace("+", ""));
    //
    //phone (2)
    setCountroledPhone_2_Input(Data.secondPhoneNumber!.replace("+", ""));
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
  const [test, settest] = useState<boolean>(false);
  // amount update
  useEffect(() => {
    //
    //
    if (
      (CountroledInputBIO != UserIFON?.bio && CountroledInputBIO != null) ||
      //
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
    UserInfo();
  }, [test]);

  useEffect(() => {
    //
    settest(!test);
    //
  }, []);

  return (
    <section
      className={` ${
        EditeMode && "mt-10"
      }   bg-primry-background min-h-screen w-full  selection:bg-main-background selection:text-primry-background  `}
    >
      {/* -Profile header- */}
      <header className="  w-full pt-7 grid max-md:justify-center  md:grid-cols-5 ">
        {/* ------------------ img ----------------------- */}
        <div className=" max-lg:col-span-2  rounded-full w-30 h-30 mx-auto my-2 group overflow-hidden relative ">
          <img
            src={
              ImgeInputURL
                ? ImgeInputURL
                : "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
            }
            className=" h-fit w-fit  "
            alt=""
          />
          <span className="absolute cursor-pointer  bottom-0 left-0 right-0 h-40 translate-y-40 group-hover:translate-y-30 transition-all bg-main-background opacity-80">
            <MdOutlineAddPhotoAlternate className="text-2xl my-2 mx-auto text-white" />
            <label
              htmlFor="ImgInput"
              className="absolute inset-0 cursor-pointer "
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
        {/* -------------------- Name & email--------------------- */}
        <div className="  col-span-3 max-md:text-center  grid grid-cols-1 ">
          <div className="my-auto pb-3 ">
            <h3 className="py-1 text-md text-gray-800 ">
              {" "}
              {UserIFON?.fullname}{" "}
            </h3>
            <span className=" text-md text-gray-700 "> {UserIFON?.email} </span>
          </div>
        </div>
        {/* ---------------------- Edit Btn & Save --------------- */}
        <div
          className={` ${
            EditeMode &&
            "fixed top-0  translate-y-15 bg-main-background w-full z-40"
          }   col-span-1 flex justify-center gap-10 p-2 `}
        >
          {EditeMode && (
            <>
              {/* save */}
              <Button
                color="success"
                variant="shadow"
                isLoading={LoadingSaveBtn}
                onPress={() => {
                  CollectNewData();
                }}
                className={` `}
              >
                Save
              </Button>
              {/* cancel */}
              <Button
                color="warning"
                variant="shadow"
                onPress={() => {
                  setEditeMode(!EditeMode),
                    setUnlockGenderInput(false),
                    setUnlockInput(false);
                  BindingData(UserIFON!);
                  setLoadingSaveBtn(false);
                }}
                className=""
              >
                Cancel
              </Button>
            </>
          )}
        </div>
      </header>
      {/* ------------ bio --------------------- */}
      <div className="p-5 w-2/3 mx-auto  ">
        <Textarea
          isInvalid={Boolean(ErorrBio)}
          errorMessage={ErorrBio}
          onChange={(e) => setCountroledInputBIO(e.target.value)}
          value={CountroledInputBIO!}
          maxLength={200}
          variant="faded"
          type="text"
          label="Bio."
        />
        {CountroledInputBIO && (
          <span className="text-gray-600 ms-2">
            {" "}
            {200 - CountroledInputBIO.length}{" "}
          </span>
        )}
      </div>
      {/* -Profile Body- */}
      <div className="  w-full grid grid-cols-2 ">
        <div className="  ">
          {/* ----------------- name ------------- */}
          <div className="p-10   ">
            <Input
              isInvalid={Boolean(ErorrName)}
              errorMessage={ErorrName}
              onChange={(e) => setCountroledNameInput(e.target.value)}
              value={CountroledNameInput!}
              variant="faded"
              type="text"
              label="Name"
            />
          </div>
          {/* ----------------- Phone 1 -----------  */}
          <div className="p-10   ">
            <Input
              isInvalid={Boolean(ErorrPhone_1)}
              errorMessage={ErorrPhone_1}
              onChange={(e) => setCountroledPhone_1_Input(e.target.value)}
              value={CountroledPhone_1_Input!}
              variant="faded"
              type="text"
              label="Phone Number"
            />
          </div>
          {/* ------------------- Phone 2 ------------- */}
          <div className="p-10   ">
            <Input
              isInvalid={Boolean(ErorrPhone_2)}
              errorMessage={ErorrPhone_2}
              onChange={(e) => setCountroledPhone_2_Input(e.target.value)}
              value={CountroledPhone_2_Input!}
              type="text"
              variant="faded"
              label="Second Phone Number"
            />
          </div>
        </div>
        {/* --////-------/////----------//////------///////-----////////-------/////////---/////--- */}
        {/* --////-------/////----------//////------///////-----////////-------/////////---/////--- */}
        <div className="">
          {/* ---------------- Email ------------ */}
          <div className="p-10 ">
            <Input
              isInvalid={Boolean(ErorrEmail)}
              errorMessage={ErorrEmail}
              onChange={(e) => setCountroledEmailInput(e.target.value)}
              value={CountroledEmailInput!}
              variant="faded"
              type="text"
              label="Email"
            />
          </div>
          {/* ----------- Address & Gender ------------ */}
          <div className="flex max-lg:flex-col">
            {/* addres */}
            <div className="p-10  w-fit ">
              {UnlockInput ? (
                <Autocomplete
                  isInvalid={Boolean(ErorrAddress)}
                  errorMessage={ErorrAddress}
                  onInputChange={(S) => setCountroledAddress_Selection(S)}
                  className="max-w-xs"
                  defaultItems={Governorates}
                  label="المكان"
                  placeholder="المحافظة"
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
                  className="p-7 w-47 text-gray-600"
                >
                  {CountroledAddress_Selection}
                </Button>
              )}
            </div>
            {/*  gender */}
            <div className="p-10  w-fit ">
              {UnlockGenderInput ? (
                <Autocomplete
                  isRequired
                  isInvalid={Boolean(ErorrGender)}
                  errorMessage={ErorrGender}
                  onInputChange={(S) => setCountroledGender_Selection(S)}
                  value={CountroledGender_Selection!}
                  className="max-w-xs"
                  defaultItems={Governorates}
                  label="Gender"
                >
                  <AutocompleteItem>Male</AutocompleteItem>
                  <AutocompleteItem>Female</AutocompleteItem>
                </Autocomplete>
              ) : (
                <Button
                  onPress={() => setUnlockGenderInput(!UnlockGenderInput)}
                  className="p-7 w-47 text-gray-600"
                >
                  {CountroledGender_Selection}
                </Button>
              )}
            </div>
          </div>
          {/* ------------ DateOfBarth ------------ */}
          <div className="p-10 ">
            <div className="flex w-full flex-wrap  md:flex-nowrap gap-4">
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
                className="max-w-sm mx-auto"
                label={"Birth date"}
                type="date"
                // placeholderValue={new CalendarDate(1995, 11, 6)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
