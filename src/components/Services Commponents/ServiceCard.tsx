"use client";
import Loading from "@/app/loading";
import { Skills } from "@/components/DashBord Commponents/MyService/ServiceLists";
import { Governorates } from "@/components/DashBord Commponents/Profile/Governorates";
import AllServicesRespons, {
  ServicesInterface,
} from "@/Interface/Service/allServicesInterface";
import GetAllServices from "@/services/ServicesAPI/GetAllServices";
import { Autocomplete, AutocompleteItem, Button } from "@heroui/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ServiceCard({
  service,
  index,
}: {
  service: ServicesInterface;
  index: any;
}) {
  const Router = useRouter();
  const t = useTranslations("ServiceCard");

  return (
    <>
      <motion.div
        key={`service-${index}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-8 border-main-background hover:shadow-2xl  transition-all duration-300 group"
      >
        {/* Provider Info Header */}
        <div className="bg-linear-to-r from-main-background/10 to-orange-600/10 p-4 flex items-center gap-4 border-b-2 border-main-background/20">
          {service.user && (
            <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-main-background shrink-0">
              {service.user.profileImage ? (
                <Image
                  width={64}
                  height={64}
                  src={service.user.profileImage}
                  alt={service.user.fullname}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  className="w-[64] h-[64]"
                  src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                  alt=""
                />
              )}
            </div>
          )}
          {/* ----- */}
          <div className="flex-1 min-w-0">
            <div>
              <h3 className="text-lg font-bold text-main-background truncate">
                {service.user.fullname}
              </h3>
              <p className="text-sm text-gray-600 truncate">{t("address_label")}</p>
            </div>

            <div>
              <p className="text-sm text-gray-600 truncate">
                {service.user.userId}
              </p>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="p-5">
          <h4 className="text-xl font-bold text-main-background mb-2">
            {service.serviceName}
          </h4>
          <p className="text-gray-700 line-clamp-3 mb-4 leading-relaxed">
            {service.description}
          </p>
          {service.user && (
            <Button
              onPress={() => Router.push(`/services/${service.serviceId}`)}
              className="w-full bg-linear-to-r from-main-background to-orange-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 mb-4"
            >
              {t("view_details")}
            </Button>
          )}
        </div>

        {/* Service Images Gallery */}
        <div className="bg-gray-50 px-5 pb-5">
          <label className="block text-sm font-semibold text-main-background mb-3">
            {t("service_gallery")}
          </label>
          <div className="grid grid-cols-3 gap-3">
            {service.serviceImages.map((serviceImg, imgIndex) => (
              <motion.div
                key={imgIndex}
                whileHover={{ scale: 1.1 }}
                className="relative w-full aspect-square rounded-lg overflow-hidden ring-2 ring-main-background/20 hover:ring-main-background cursor-pointer transition-all duration-300"
              >
                <Image
                  width={100}
                  height={100}
                  src={`https://gp2025.runasp.net${serviceImg}`}
                  alt={`${service.user!.fullname} - image ${imgIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="text-sm p-3 px-2 text-right text-gray-600 truncate">
          {service.serviceId}
        </p>
      </motion.div>
    </>
  );
}
