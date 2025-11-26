"use client";
import { addToast, Button, Input } from "@heroui/react";
import React, { useEffect, useState } from "react";
import { Textarea } from "@heroui/react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { MdAddPhotoAlternate, MdCancel } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import AddServiceAPI from "@/services/AddService";
import AddServiceRespons from "@/Interface/Service/AddService";
import { GoPlus } from "react-icons/go";

export default function page() {
	const t = useTranslations("MyServices");

	const Skills = [
		{ label: t("skill_painter") },
		{ label: t("skill_welder") },
		{ label: t("skill_ceramics") },
		{ label: t("skill_electrician") },
		{ label: t("skill_carpenter") },
		{ label: t("skill_plumber") },
	];

	const ServiceAddress = [
		{ Address: t("governorate_cairo") },
		{ Address: t("governorate_alexandria") },
		{ Address: t("governorate_giza") },
		{ Address: t("governorate_qalyubia") },
		{ Address: t("governorate_dakahlia") },
		{ Address: t("governorate_damietta") },
		{ Address: t("governorate_port_said") },
		{ Address: t("governorate_ismailia") },
		{ Address: t("governorate_suez") },
		{ Address: t("governorate_red_sea") },
		{ Address: t("governorate_matrouh") },
		{ Address: t("governorate_north_sinai") },
		{ Address: t("governorate_south_sinai") },
		{ Address: t("governorate_sharqia") },
		{ Address: t("governorate_kafr_el_sheikh") },
		{ Address: t("governorate_gharbia") },
		{ Address: t("governorate_menoufia") },
		{ Address: t("governorate_beheira") },
		{ Address: t("governorate_fayoum") },
		{ Address: t("governorate_beni_suef") },
		{ Address: t("governorate_minya") },
		{ Address: t("governorate_assiut") },
		{ Address: t("governorate_sohag") },
		{ Address: t("governorate_qena") },
		{ Address: t("governorate_luxor") },
		{ Address: t("governorate_aswan") },
	];
	const KeyWords = [
		{ keyword: "دهانات حديثه" },
		{ keyword: "ديكور" },
		{ keyword: "ورق حائط" },
		{ keyword: "تشطيبات فاخرة" },
		{ keyword: "أنظمة أمان" },
		{ keyword: "صيانة" },
		{ keyword: "تمديدات كهربائية" },
		{ keyword: "إضاءة" },
		{ keyword: "كشف تسربات" },
	];
	// {-----------------------------------State section----------------------------------------}
	const [TitelInput, setTitelInput] = useState<string | null>(null);
	const [ErrorTitelInput, setErrorTitelInput] = useState<string | null>(null);
	// {--------------------------------------------------------------------------------------------}
	const [descriptionInput, setdescriptionInput] = useState<string | null>("");
	const [ErrordescriptionInput, setErrordescriptionInput] = useState<
		string | null
	>(null);
	// {--------------------------------------------------------------------------------------------}
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
			await CallingServiceAPI(formdata);
			setIsloading(false);
		} else {
			addToast({
				title: t("title_and_description_required"),
				color: "danger",
			});
			setIsloading(false);
		}
		setIsloading(false);
	}

	async function CallingServiceAPI(formData: any) {
		const respons: AddServiceRespons = await AddServiceAPI(formData);
		if (respons.message) {
			addToast({
				title: respons.message,
				color: "success",
			});
			setIsloading(false);

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

			<div className="w-full p-2 overflow-auto">
				<div className="w-full h-20 my-5 bg-linear-to-r from-main-background to-primry-background text-white text-3xl text-center rounded-lg flex items-center justify-center shadow-md">
					{t("service_section")} -
				</div>
				<div className="w-full h-20 my-5 bg-linear-to-r from-main-background to-primry-background text-white text-3xl text-center rounded-lg flex items-center justify-center shadow-md">
					{t("service_section")} -
				</div>
				<div className="w-full h-20 my-5 bg-linear-to-r from-main-background to-primry-background text-white text-3xl text-center rounded-lg flex items-center justify-center shadow-md">
					{t("service_section")} -
				</div>
			</div>
		</section>
	);
}
