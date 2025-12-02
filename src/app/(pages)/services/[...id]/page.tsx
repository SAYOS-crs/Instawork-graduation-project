import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

export default async function page({ params }: { params: any }) {
  const t = useTranslations("ServiceDetails");
  const ServiceID = await (async function () {
    try {
      const { id } = await params;
      console.log(id[0]);
      return id[0];
    } catch (error) {
      console.log(error);
    }
  })();

  console.log(ServiceID);

  const Respons: ServiceDetailsRespons = await fetch(
    `${process.env.API_BASE_URL}/services/${ServiceID}`
  )
    .then((res) => res.ok && res.json())
    .catch();

  console.log(Respons.data);
  const UserInfo = await Respons.data.user;
  const Service = await Respons.data;

  return (
    <section className="min-h-screen container mx-auto px-4 pb-8">
      {/* Hero / provider header */}
      <div className="relative bg-main-background rounded-b-2xl overflow-hidden">
        <div className=" py-20 lg:py-10 flex justify-center">
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-primry-background bg-white shadow-lg">
            {UserInfo.profileImage ? (
              <Image
                className="object-cover w-full h-full"
                width={192}
                height={192}
                src={UserInfo.profileImage}
                alt={UserInfo.fullname}
              />
            ) : (
              <img
                className="object-cover w-full h-full"
                src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                alt=""
              />
            )}
          </div>
        </div>

        <div className="absolute  inset-x-0 bottom-4 flex justify-between items-end px-6">
          <div className="text-white">
            <h2 className="text-xl sm:text-2xl font-semibold">
              {UserInfo.fullname}
            </h2>
              <p className="text-sm opacity-90 py-1">{t("service_id_label")}: {Service.serviceId}</p>
              <p className="text-sm opacity-90 py-1 ">{t("user_id_label")}: {UserInfo.userId}</p>
          </div>
          <div className="text-white text-right">
              <div className="text-sm">{t("rating_label")}</div>
              <div className="text-lg font-bold">{Service.rating}</div>
          </div>
        </div>
      </div>

      {/* Main content: two-column layout on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {/* Left column: service details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold border-l-4 border-main-background pl-4">{t("service_title")}</h3>
            <p className="mt-3 text-gray-700">{Service.serviceName}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold border-l-4 border-main-background pl-4">{t("description_title")}</h3>
            <p className="mt-3 text-gray-700">{Service.description}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold border-l-4 border-main-background pl-4">{t("provider_bio")}</h3>
            <p className="mt-3 text-gray-700">{UserInfo.bio}</p>
          </div>

          <div>
            <h4 className="text-2xl font-bold tracking-wide">{t("service_gallery")}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {Service.serviceImages.map((i: string) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden border bg-white"
                >
                  <Image
                    className="w-full h-48 object-cover"
                    width={400}
                    height={320}
                    alt={Service.serviceName}
                    src={`https://gp2025.runasp.net${i}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: contact & meta */}
        <aside className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h4 className="text-lg font-semibold">{t("contact")}</h4>
            <div className="mt-3 text-gray-700">
              <p>{t("phone_label")}: {UserInfo.phoneNumber.replace("+", "")}</p>
              <p className="mt-2">{t("second_phone_label")}: {UserInfo.SecondPhoneNumber ? UserInfo.SecondPhoneNumber.replace("+", "") : UserInfo.phoneNumber.replace("+", "")}</p>
              <p className="mt-2">{t("address_label")}: {UserInfo.address}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h4 className="text-lg font-semibold">{t("meta")}</h4>
            <div className="mt-3 text-gray-700">
              <p>{t("rating_label")}: {Service.rating}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
