"use client";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
  Textarea,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdEdit, MdOutlineAddPhotoAlternate } from "react-icons/md";
import { MdCancel } from "react-icons/md";

{
  titel: "sdasd";
  des: "asdasd";
  tags: [
    "keyword-1",
    "keyword-2",
    "keyword-3",
    "keyword-4",
    "keyword-5",
    "keyword-6",
    "keyword-7",
    "keyword-8",
  ];
}

export default function page() {
  // /////////////// Name Name Name Name Name ////////////////////
  const [CountroledNameInput, setCountroledNameInput] = useState<string>("");
  const [EditInputName, setEditInputName] = useState<boolean>(false);
  let NameErorrHandeling = null;
  // ///////////////////////////////////////////////////////
  //
  //
  // //////////////////// bio bio bio bio bio //////////////////////////
  const [CountroledInputBIO, setCountroledInputBIO] = useState<string>("");
  const [EditInputBIO, setEditInputBIO] = useState<boolean>(false);
  // ///////////////////////////////////////////////////////
  //
  //
  //
  ////////////// Phone 1  Phone 1  Phone 1  Phone 1
  const [EditInputPhone1, setEditInputPhone1] = useState<boolean>(true);
  const [EditInputPhone1Value, setEditInputPhone1Value] =
    useState<string>("null");
  const [erorrEditInputPhone1, seterorrEditInputPhone1] = useState<
    string | null
  >(null);
  // ///////////////////////////////////////////////////////

  //
  //
  //
  ////////////////  Phone 2 Phone 2 Phone 2 Phone 2 Phone 2 ///////////////////////////////
  const [EditInputPhone2Value, setEditInputPhone2Value] =
    useState<string>("null");
  const [EditInputPhone2, setEditInputPhone2] = useState<boolean>(false);
  // ///////////////////////////////////////////////////////

  //
  //
  //
  // ///////////////////// Email Email Email Email Email //////////////////////////////////
  const [EmailInputValue, setEmailInputValue] = useState<string>("null");
  const [EmailInputToggel, setEmailInputToggel] = useState<boolean>(false);
  // ///////////////////////////////////////////////////////

  //
  //
  //
  // //////////////////// Address Address Address Address ////////////////////////////////////////
  const [EditAddressInput, setEditAddressInput] = useState<boolean>(false);
  const [AddressInputValue, setAddressInputValue] = useState<any>("");
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
  // ///////////////////////////////////////////////////////

  //
  //
  //
  // //////////////////////////Gender Gender Gender Gender Gender//////////////////////////////////////
  const [EditGenderInput, setEditGenderInput] = useState<boolean>(false);
  const [GenderInputValue, setGenderInputValue] = useState<string>("");
  // ///////////////////////////////////////////////////////

  //
  //
  //
  //
  // /////////////////////// DateOFberth DateOFberth DateOFberth DateOFberth //////////////////////////////////////
  const [EditDateOFberthInput, setEditDateOFberthInput] =
    useState<boolean>(false);
  const [DateOFberthValue, setDateOFberthValue] = useState<string>("");
  // ///////////////////////////////////////////////////////

  //
  //
  //
  //
  //

  const { data } = useSession();
  useEffect(() => {
    if (data?.user) {
      setCountroledNameInput(data.user.fullname);
      //
      setCountroledInputBIO(data.user.bio);
      //
      setEditInputPhone1Value(data?.user.phoneNumber);
      //
      setEmailInputValue(data.user.email);
      //
      setGenderInputValue("Male");
    }
  }, [data?.user]);
  // /////////////////////////////////////////////////////////////////
  // /////////////////////////////////////////////////////////////////

  // /////////////////////////////////////////////////////////////////
  interface UpDatedInfo {
    Fullname?: string;
    Bio?: string;
    PhoneNumber?: string;
    SecondPhoneNumber?: string;
    Email?: string;
    Address?: string;
    Gender?: string;
    DateOfBirth?: string;
  }

  const phoneRegix = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/;
  const EmailRegix = /^[\w\.-]+@[\w\.-]+\.\w{2,}$/;

  async function EditUserInfo() {
    const Updated_data: UpDatedInfo = {
      Fullname: CountroledNameInput,
      Bio: CountroledInputBIO,
      SecondPhoneNumber: EditInputPhone2Value.replace("+", ""),
      Email: EmailInputValue,
      Address: AddressInputValue,
      Gender: GenderInputValue,
      DateOfBirth: DateOFberthValue,
    };
    console.log(Updated_data);
    // regix for the rest of the inputs and handel erorrs also and in the last send the updated data to api
    if (phoneRegix.test(EditInputPhone1Value.replace("+", ""))) {
      const PhoneNumber1 = EditInputPhone1Value;
      Updated_data.PhoneNumber = PhoneNumber1;
      seterorrEditInputPhone1(null);
    } else {
      seterorrEditInputPhone1("Phone Number inValid");
    }
  }

  // /////////////////////////////////////////////////////////////////

  // /////////////////////////////////////////////////////////////////
  // /////////////////////////////////////////////////////////////////

  return (
    <section className="bg-primry-background min-h-screen w-full selection:bg-main-background selection:text-primry-background ">
      <form className="grid grid-cols-1 md:grid-cols-3">
        {/* ///////////////// right side //////////////////// */}
        <div className=" h-screen w-full md:border-r-2 border-main-background p-2">
          <div className="-500 text-center my-15 ">
            {/* //////////////////////////////////////////////////////////////////////////////////////// */}
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
              {/* name */}
              <div className="   py-3 border-b-1 border-main-background">
                <div className="flex gap-3 justify-center">
                  <span className="font-bold text-xl">Name:</span>
                  <Input
                    required
                    // isInvalid={Boolean(errors.Fullname?.message)}
                    // errorMessage={errors.Fullname?.message}
                    isDisabled={!EditInputName}
                    value={CountroledNameInput!}
                    onChange={(e) => setCountroledNameInput(e.target.value)}
                    className="inline-block"
                  >
                    {" "}
                  </Input>{" "}
                  {EditInputName ? (
                    <MdCancel
                      className="inline-block text-3xl cursor-pointer"
                      onClick={() => {
                        setEditInputName(false);
                        setCountroledNameInput(data?.user.fullname!);
                      }}
                    />
                  ) : (
                    <FaEdit
                      onClick={() => setEditInputName(true)}
                      className="inline-block text-3xl cursor-pointer"
                    />
                  )}
                </div>
              </div>
              {/* //////////////////////////////////////////////////////////////////////////////////////// */}
              {/* bio */}
              <div className="  py-3 border-b-1 border-main-background">
                <h3 className="grid grid-cols-1 gap-3 justify-center">
                  <span className="block">Bio :</span>
                  <Textarea
                    // isInvalid={Boolean(errors.Bio?.message)}
                    // errorMessage={errors.Bio?.message}
                    isDisabled={!EditInputBIO}
                    onChange={(e) => setCountroledInputBIO(e.target.value)}
                    value={CountroledInputBIO!}
                    className="block"
                  >
                    {" "}
                  </Textarea>{" "}
                  {EditInputBIO ? (
                    <MdCancel
                      className="inline-block text-3xl cursor-pointer"
                      onClick={() => {
                        setEditInputBIO(false);
                        setCountroledInputBIO(data?.user.bio!);
                      }}
                    />
                  ) : (
                    <FaEdit
                      onClick={() => setEditInputBIO(true)}
                      className="inline-block text-3xl cursor-pointer"
                    />
                  )}
                </h3>
              </div>
              {/* //////////////////////////////////////////////////////////////////////////////////////// */}

              {/* //////////////////////////////////////////////////////////////////////////////////////// */}
            </figcaption>
            {/* //////////////////////////////////////////////////////////////////////////////////////// */}
          </div>
        </div>

        {/* ///////////////// right side //////////////////// */}
        {/* /// */}
        {/* /// */}
        {/* ////////////////// left side //////////////////// */}
        <div className=" md:col-span-2 min-h-screen w-full text-right">
          <div className=" px-5 my-15">
            {/* /////////////////////// */}
            <div className="border-b-1 flex justify-end align-middle  gap-4 text-center  border-main-background px-2 py-7">
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
                isInvalid={Boolean(erorrEditInputPhone1)}
                errorMessage={erorrEditInputPhone1}
                onChange={(e) => setEditInputPhone1Value(e.target.value)}
                value={EditInputPhone1Value.replace("+", "")}
                isDisabled={EditInputPhone1}
                className="w-fit "
              ></Input>
              <h3 className="py-1">: Phone Number</h3>
            </div>
            {/* Phone Number */}
            {/* /// */}
            <div className="border-b-1 flex justify-end gap-4 border-main-background px-2 py-7">
              {EditInputPhone2 ? (
                <MdCancel
                  onClick={() => setEditInputPhone2(false)}
                  className="text-2xl font-bold cursor-pointer my-1"
                />
              ) : (
                <FaEdit
                  onClick={() => setEditInputPhone2(true)}
                  className="text-2xl font-bold cursor-pointer my-1"
                />
              )}
              <Input
                required
                onChange={(e) => setEditInputPhone2Value(e.target.value)}
                value={EditInputPhone2Value.replace("+", "")}
                // isInvalid={Boolean(errors.SecondPhoneNumber?.message)}
                // errorMessage={errors.SecondPhoneNumber?.message}
                isDisabled={!EditInputPhone2}
                className="w-fit"
              ></Input>
              <span className="font-bold py-1">: Second Phone Number</span>
            </div>
            {/*Second Phone Number */}
            {/* /// */}
            <div className="border-b-1 flex gap-4 justify-end border-main-background px-2 py-7">
              <div className="w-fit gap-4 flex">
                <Input
                  required
                  // isInvalid={Boolean(errors.Email?.message)}
                  // errorMessage={errors.Email?.message}
                  onChange={(e) => {
                    setEmailInputValue(e.target.value);
                  }}
                  value={EmailInputValue}
                  isDisabled={!EmailInputToggel}
                  className="w-full order-2 "
                ></Input>

                {EmailInputToggel ? (
                  <MdCancel
                    onClick={() => {
                      setEmailInputToggel(false);
                      setEmailInputValue(data?.user.email!);
                    }}
                    className="cursor-pointer text-3xl order-1"
                  />
                ) : (
                  <FaEdit
                    onClick={() => setEmailInputToggel(true)}
                    className=" cursor-pointer text-3xl order-1"
                  />
                )}
              </div>
              <span className="my-1 font-bold text-xl">:Email</span>
            </div>
            {/* Email */}
            {/* /// */}
            <address className="border-b-1 flex gap-4  justify-end text-xl font-bold border-main-background px-2 py-7">
              {EditAddressInput ? (
                <MdCancel
                  onClick={() => setEditAddressInput(false)}
                  className="text-2xl my-1 cursor-pointer"
                />
              ) : (
                <FaEdit
                  onClick={() => setEditAddressInput(true)}
                  className="text-2xl my-1 cursor-pointer"
                />
              )}

              <Autocomplete
                required
                onSelectionChange={(key) => setAddressInputValue(key)}
                className="w-fit cursor-pointer"
                label="Address"
              >
                {ServiceAddress.map((address) => (
                  <AutocompleteItem key={address.Address}>
                    {address.Address}
                  </AutocompleteItem>
                ))}
              </Autocomplete>

              <span className="py-1">: Address</span>
            </address>
            {/* Address */}
            {/* /// */}
            <div className="border-b-1 flex justify-end gap-4 border-main-background px-2 py-7">
              {EditGenderInput ? (
                <MdCancel
                  onClick={() => setEditGenderInput(false)}
                  className="text-2xl font-bold cursor-pointer my-1"
                />
              ) : (
                <FaEdit
                  onClick={() => setEditGenderInput(true)}
                  className="text-2xl font-bold cursor-pointer my-1"
                />
              )}
              <Input
                // isInvalid={Boolean(errors.Gender?.message)}

                // errorMessage={errors.Gender?.message}

                onChange={(e) => setGenderInputValue(e.target.value)}
                value={GenderInputValue}
                isDisabled={!EditGenderInput}
                className="w-fit"
              ></Input>{" "}
              <span className="text-xl font-bold py-1">: Gender</span>
            </div>
            {/* Gender */}
            {/* /// */}
            <div className="border-b-1 flex justify-end gap-4 border-main-background px-2 py-7">
              {EditDateOFberthInput ? (
                <MdCancel
                  onClick={() => setEditDateOFberthInput(false)}
                  className="text-2xl font-bold cursor-pointer my-3"
                />
              ) : (
                <FaEdit
                  onClick={() => setEditDateOFberthInput(true)}
                  className="text-2xl font-bold cursor-pointer my-3"
                />
              )}
              <Input
                required
                // isInvalid={Boolean(errors.DateOfBirth?.message)}
                // errorMessage={errors.DateOfBirth?.message}
                onChange={(e) => setDateOFberthValue(e.target.value)}
                value={DateOFberthValue}
                isDisabled={!EditDateOFberthInput}
                className="w-fit"
                label="Date of Burth"
                type="date"
              />{" "}
              <span className="font-bold text-xl py-2">: Date Of Birth</span>
            </div>
            <div>
              {" "}
              <Button
                onPress={EditUserInfo}
                className="my-5 mx-auto block px-10"
              >
                {" "}
                supmit{" "}
              </Button>{" "}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
