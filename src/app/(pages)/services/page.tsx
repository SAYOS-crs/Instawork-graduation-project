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
import { useTranslations } from "next-intl";
import Link from "next/link";
import ServiceCard from "@/components/Services Commponents/ServiceCard";

export default function page() {
  const t = useTranslations("Services");
  const Router = useRouter();
  // ---------------------------------------------------------------------------//
  const [FilteredService, setFilteredService] = useState<
    ServicesInterface[] | null
  >(null);
  const [AllServices, setAllServices] = useState<ServicesInterface[]>();
  // ---------------------------------------------------------------------------//
  async function CallingGetAllServiceAPI() {
    const respons: AllServicesRespons = await GetAllServices();
    console.log(respons);

    if (respons.message) {
      setAllServices(respons.data);
    }
  }

  function FilterServces(S: string) {
    const ServiceAfterFilter = AllServices?.filter(
      (service) => service.serviceName === S
    );
    console.log(ServiceAfterFilter);

    if (ServiceAfterFilter != null && ServiceAfterFilter.length > 0) {
      setFilteredService(ServiceAfterFilter);
    }
  }

  useEffect(() => {
    console.log(AllServices);
  }, [AllServices]);

  useEffect(() => {
    CallingGetAllServiceAPI();
  }, []);
  return (
    <section className="min-h-screen bg-linear-to-b from-primry-background via-gray-50 to-white font-poppins selection:bg-main-background selection:text-primry-background">
      {/* Header Section */}
      <header className="bg-linear-to-r from-main-background to-orange-700 shadow-xl py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-3">{t("header_title")}</h1>
            <p className="text-lg text-primry-background opacity-90">{t("header_paragraph")}</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid max-lg:grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6 border-l-8 border-main-background sticky top-20"
            >
              <h2 className="text-2xl font-bold text-main-background mb-6">{t("filters")}</h2>

              {/* Skill Filter */}
              <div className="mb-6">
                <label className="block text-main-background font-semibold mb-3">{t("skill_label")}</label>
                <Autocomplete
                  onInputChange={(S) => FilterServces(S)}
                  isClearable={true}
                  variant="faded"
                  placeholder={t("search_skill_placeholder")}
                  className="bg-white/5"
                >
                  {Skills.map((skill) => (
                    <AutocompleteItem key={skill.label}>
                      {skill.label}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
                <Button
                  onPress={() => setFilteredService(null)}
                  className="w-full mt-3 bg-linear-to-r from-main-background to-orange-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  {t("reset")}
                </Button>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-main-background font-semibold mb-3">{t("location_label")}</label>
                <Autocomplete
                  onInputChange={(S) => console.log(S)}
                  isClearable={true}
                  variant="faded"
                  placeholder={t("search_location_placeholder")}
                  className="bg-white/5"
                >
                  {Governorates.map((gov) => (
                    <AutocompleteItem key={gov.label}>
                      {gov.label}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
                <Button className="w-full mt-3 bg-linear-to-r from-gray-500 to-gray-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  {t("reset")}
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Services Display */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(FilteredService && FilteredService.length > 0
                ? FilteredService
                : AllServices
              )?.map((service, index) => (
                <ServiceCard service={service} index={index} />
              ))}
            </div>

            {/* Empty State */}
            {(!AllServices || AllServices.length === 0) && (
              <div className="text-center py-20">
                <p className="text-2xl text-gray-500 font-semibold">{t("no_services_found")}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
