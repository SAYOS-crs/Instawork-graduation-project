import Image from "next/image";
import React from "react";
import GetJobDetails from "@/services/JobsAPI/GetJobDetails";
import { formatDistanceToNow, fromUnixTime } from "date-fns";
import { ar } from "date-fns/locale/ar";
import { getTranslations } from "next-intl/server";

export default async function page({ params }: { params: any }) {
  const t = await getTranslations("JobDetailsPage");
  const JobID = await (async function () {
    try {
      const { id } = await params;
      console.log(id[0]);
      return id[0];
    } catch (error) {
      console.log(error);
    }
  })();

  console.log(JobID);

  const Respons: any = await GetJobDetails(JobID);

  console.log(Respons.data);
  const UserInfo = await Respons.data.user;
  const Job = await Respons.data;

   return (
    <section className="min-h-screen bg-linear-to-b from-gray-50 to-white font-poppins">
      {/* Hero / Job Header Section */}
      <div className="relative bg-linear-to-r from-main-background to-orange-700 shadow-xl py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Job Title & Meta */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {Job.servReqName}
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 text-white/90 text-sm">
                <span className="inline-block px-3 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  {t("jobId")}{" "}
                  <span className="font-mono font-bold">{Job.servReqId}</span>
                </span>
                <span className="inline-block px-3 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  {formatDistanceToNow(fromUnixTime(Job.createdAt), {
                    addSuffix: true,
                    locale: ar,
                  })}
                </span>
              </div>
            </div>

            {/* Budget Highlight */}
            <div className="flex flex-col items-end gap-2">
              <p className="text-white/80 text-sm font-medium">{t("budget")}</p>
              <div className="bg-white rounded-xl px-6 py-4 shadow-lg">
                <p className="text-3xl font-bold text-main-background">
                  {Job.budget}
                  <span className="text-lg ml-1">{t("currency")}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Job Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Type Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-main-background hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-main-background mb-4 uppercase tracking-wide">
                {t("jobType")}
              </h3>
              <p className="text-gray-700 text-lg font-semibold">
                {Job.servReqName}
              </p>
            </div>

            {/* Description Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-main-background hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-main-background mb-4 uppercase tracking-wide">
                {t("jobDescription")}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
                {Job.description}
              </p>
            </div>

            {/* Location Card */}
            {Job.user.address && (
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-main-background hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-main-background mb-4 uppercase tracking-wide">
                  {t("location")}
                </h3>
                <p className="text-gray-700 text-lg font-semibold">
                  {Job.user.address}
                </p>
              </div>
            )}

            {/* Client Bio Card */}
            {Job.user.bio && (
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-main-background hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-main-background mb-4 uppercase tracking-wide">
                  {t("aboutClient")}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {Job.user.bio}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Client Info & Contact */}
          <aside className="space-y-6">
            {/* Client Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-main-background hover:shadow-xl transition-shadow duration-300">
              <div className="bg-linear-to-r from-main-background/10 to-orange-600/10 p-6 flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-main-background shadow-md">
                  {Job.user.profileImage ? (
                    <Image
                      width={96}
                      height={96}
                      src={Job.user.profileImage}
                      alt={Job.user.fullname}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      className="object-cover w-full h-full"
                      src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                      alt="default avatar"
                    />
                  )}
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-gray-900">
                    {Job.user.fullname}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">{t("jobClient")}</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {/* User ID */}
                <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
                  <div className="text-main-background text-xl font-bold">
                    ID
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      {t("userId")}
                    </p>
                    <p className="text-sm font-mono font-bold text-gray-700">
                      {Job.user.userId}
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <h5 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                    {t("contactInfo")}
                  </h5>
                  <div className="space-y-2 text-sm text-gray-700">
                    {Job.user.phoneNumber && (
                      <p className="break-all">
                        <span className="font-semibold">{t("phone")}</span>{" "}
                        {Job.user.phoneNumber.replace("+", "")}
                      </p>
                    )}
                    {Job.user.secondPhoneNumber && (
                      <p className="break-all">
                        <span className="font-semibold">{t("secondary")}</span>{" "}
                        {Job.user.secondPhoneNumber.replace("+", "")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Budget Summary Card */}
            <div className="bg-linear-to-br from-main-background to-orange-600 rounded-2xl shadow-lg p-6 text-white">
              <h5 className="text-lg font-bold mb-4 uppercase tracking-wide">
                {t("jobSummary")}
              </h5>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">{t("budget")}</span>
                  <span className="text-2xl font-bold">{Job.budget} {t("currency")}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">{t("posted")}</span>
                  <span className="font-semibold">
                    {formatDistanceToNow(fromUnixTime(Job.createdAt), {
                      addSuffix: true,
                      locale: ar,
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="opacity-90">{t("status")}</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    {t("statusOpen")}
                  </span>
                </div>
              </div>
            </div>

            {/* Job Meta */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-gray-200">
              <h5 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                {t("jobDetails")}
              </h5>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <span className="text-main-background font-bold text-lg">
                    📋
                  </span>
                  <div>
                    <p className="text-xs text-gray-500">{t("jobType")}</p>
                    <p className="font-semibold">{Job.servReqName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <span className="text-main-background font-bold text-lg">
                    💼
                  </span>
                  <div>
                    <p className="text-xs text-gray-500">{t("jobId")}</p>
                    <p className="font-mono font-bold">{Job.servReqId}</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}