"use client";
import { UserData, UserDataRespons } from "@/app/types/UserInterface";
import UpdateingUserInfo from "@/services/UpdateUserInfo";
import CallingUserInfoAPI from "@/services/UserInfoAPI";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
  Textarea,
} from "@heroui/react";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdEdit, MdOutlineAddPhotoAlternate } from "react-icons/md";
import { MdCancel } from "react-icons/md";

export default function page() {
  // /////////////// Name Name Name Name Name ////////////////////
  const [CountroledNameInput, setCountroledNameInput] = useState<string | null>(
    null
  );
  const [EditInputName, setEditInputName] = useState<boolean>(false);
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
  // const [EditInputPhone1, setEditInputPhone1] = useState<boolean>(true);
  // const [EditInputPhone1Value, setEditInputPhone1Value] =
  //   useState<string>("null");
  // const [erorrEditInputPhone1, seterorrEditInputPhone1] = useState<
  //   string | null
  // >(null);
  // ///////////////////////////////////////////////////////
  //
  //
  //
  ////////////////  Phone 2 Phone 2 Phone 2 Phone 2 Phone 2 ///////////////////////////////
  // const [EditInputPhone2Value, setEditInputPhone2Value] = useState<string>("");
  // const [EditInputPhone2, setEditInputPhone2] = useState<boolean>(false);
  // const [ErorrPhoneNumber2, setErorrPhoneNumber2] = useState<string | null>(
  //   null
  // );
  // ///////////////////////////////////////////////////////

  //
  //
  //
  // ///////////////////// Email Email Email Email Email //////////////////////////////////
  // const [EmailInputValue, setEmailInputValue] = useState<string>("null");
  // const [EmailInputToggel, setEmailInputToggel] = useState<boolean>(false);
  // const [ErorrEmailInput, setErorrEmailInput] = useState<string | null>(null);
  // ///////////////////////////////////////////////////////

  //
  //
  //
  // //////////////////// Address Address Address Address ////////////////////////////////////////
  // const [EditAddressInput, setEditAddressInput] = useState<boolean>(false);
  // const [AddressInputValue, setAddressInputValue] = useState<any>("");
  // const ServiceAddress = [
  //   { Address: "الجيزه" },
  //   { Address: "البحيره" },
  //   { Address: "الدقهلية" },
  //   { Address: "الاسماعليه" },
  //   { Address: "مرسي مطروح" },
  //   { Address: "سكندريه" },
  //   { Address: "شمال سيناء" },
  //   { Address: "الخرطوم" },
  // ];
  // ///////////////////////////////////////////////////////
  //
  //
  //
  // //////////////////////////Gender Gender Gender Gender Gender//////////////////////////////////////
  // const [EditGenderInput, setEditGenderInput] = useState<boolean>(false);
  // const [GenderInputValue, setGenderInputValue] = useState<string>("");
  // ///////////////////////////////////////////////////////
  //
  //
  // /////////////////////// DateOFberth DateOFberth DateOFberth DateOFberth //////////////////////////////////////
  // const [EditDateOFberthInput, setEditDateOFberthInput] =
  //   useState<boolean>(false);
  // const [DateOFberthValue, setDateOFberthValue] = useState<string>("");
  // ///////////////////////////////////////////////////////

  //
  //
  //
  //////////////////////////Role/////////////////////////
  //
  //
  const [ImgURL, setImgURL] = useState("s");
  const { data } = useSession();
  const userID = data?.user.userId;

  // Calling API hir

  // /////////////////////////////////////////////////////////////////
  // /////////////////////////////////////////////////////////////////

  // /////////////////////////////////////////////////////////////////
  interface UpDatedInfo {
    Fullname?: string;
    bio?: string;
    PhoneNumber?: string;
    SecondPhoneNumber?: string;
    Email?: string;
    Address?: string;
    Gender?: string;
    DateOfBirth?: string;
  }

  // const phoneRegix = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/;
  // const EmailRegix = /^[\w\.-]+@[\w\.-]+\.\w{2,}$/;

  async function EditUserInfo() {
    // const Updated_data: UpDatedInfo = await {
    //   Fullname: CountroledNameInput,
    //   bio: CountroledInputBIO,
    //   // SecondPhoneNumber:
    //   Address: AddressInputValue,
    //   Gender: GenderInputValue,
    //   DateOfBirth: DateOFberthValue,
    // };
    // regix for the rest of the inputs and handel erorrs also and in the last send the updated data to api
    // if (phoneRegix.test(EditInputPhone1Value.replace("+", ""))) {
    //   const PhoneNumber1 = EditInputPhone1Value;
    //   Updated_data.PhoneNumber = PhoneNumber1;
    //   seterorrEditInputPhone1(null);
    // } else {
    //   seterorrEditInputPhone1("Phone Number inValid");
    // }
    // if (phoneRegix.test(EditInputPhone2Value.replace("+", ""))) {
    //   Updated_data.SecondPhoneNumber = EditInputPhone2Value;
    //   setErorrPhoneNumber2(null);
    // } else {
    //   setErorrPhoneNumber2("Second Number inValid");
    // }
    // if (EmailRegix.test(EmailInputValue)) {
    //   Updated_data.Email = EmailInputValue;
    //   setErorrEmailInput(null);
    // } else {
    //   setErorrEmailInput("Email isValid");
    // }

    const formdata = new FormData();
    if (CountroledNameInput && CountroledNameInput != UserIFON?.fullname) {
      formdata.set("Fullname", CountroledNameInput);
      console.log(formdata.get("Fullname"));
    }
  }

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  const [UserIFON, setUserIFON] = useState<UserData>();
  async function UserInfo() {
    if (userID) {
      const respons: UserDataRespons = await CallingUserInfoAPI(userID);
      if (respons.message === "Success") {
        setCountroledNameInput(respons.data.fullname);
        //
        setCountroledInputBIO(respons.data.bio!);
        //
        // setEditInputPhone1Value(respons.data.phoneNumber);
        // //
        // setEditInputPhone2Value(respons.data.secondPhoneNumber);
        // //
        // setEmailInputValue(respons.data.email);
        // //
        // // setAddressInputValue(respons.data.address);
        // //
        // setDateOFberthValue(respons.data.dateOfBirth);
        // //
        // setGenderInputValue(respons.data.gender);
        // //
        // setUserRole(respons.data.role);
        //
        //
        console.log(respons);
        setUserIFON(respons.data);
      }
    }
  }

  useEffect(() => {
    UserInfo();
  }, []);

  return (
    <section className="bg-primry-background min-h-screen w-full selection:bg-main-background selection:text-primry-background ">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* ///////////////// right side //////////////////// */}
        <div className=" h-screen w-full md:border-r-2 border-main-background p-2">
          <div className="-500 text-center my-15 ">
            {/* //////////////////////////////////////////////////////////////////////////////////////// */}
            <figure className="mx-auto bg-blue-600 w-60 h-60 rounded-full overflow-hidden group  relative ">
              <div>
                <img
                  className="w-full"
                  src={
                    ImgURL
                      ? ImgURL
                      : "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                  }
                  alt=""
                />
              </div>

              <div className="  h-12 w-full mx-auto bg-main-background opacity-80 transition-all cursor-pointer absolute inset-0 mt-auto translate-y-16 group-hover:translate-y-0  ">
                <MdOutlineAddPhotoAlternate className="inline-block text-3xl text-primry-background  m-2" />

                <label
                  htmlFor="imgeFile"
                  className=" absolute  inset-0  cursor-pointer"
                >
                  <input id="imgeFile" type="file" className="hidden" />
                </label>
              </div>
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
          <Button onPress={EditUserInfo}>Submite</Button>
        </div>

        {/* ///////////////// right side //////////////////// */}
        {/* /// */}
        {/* /// */}
        {/* ////////////////// left side //////////////////// */}
      </div>
    </section>
  );
}
