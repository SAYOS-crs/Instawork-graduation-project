"use client";
import {
  addToast,
  Autocomplete,
  AutocompleteItem,
  Button,
} from "@heroui/react";
import React, { useEffect, useState } from "react";
import { Textarea } from "@heroui/react";
import { Select, SelectItem } from "@heroui/react";
import { Input } from "@heroui/react";
import { useTranslations } from "next-intl";
import { GoPlus } from "react-icons/go";
import { Governorates } from "@/components/DashBord Commponents/Profile/Governorates";
import { useSession } from "next-auth/react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import AddJobApi from "@/services/JobsAPI/AddJobAPI";
import { Skills } from "@/components/DashBord Commponents/MyService/ServiceLists";
import GetUserJobs from "@/services/JobsAPI/GetUserJobs";
import type {
  UserJobsRespons,
  UserJobsData,
  UserJobs,
} from "@/Interface/Service/UserJobs";
import { formatDistanceToNow, fromUnixTime } from "date-fns";
import { ar } from "date-fns/locale/ar";
import DeleteUserJob from "@/services/JobsAPI/DeleteJob";

export default function page() {
  const { data } = useSession();
  const t = useTranslations("MyJobs");

  // data state

  // Form states
  const [jobHeader, setJobHeader] = useState<string>("");
  const [ErrorJobHeader, setErrorJobHeader] = useState<string | null>(null);

  const [jobDescription, setJobDescription] = useState<string>("");
  const [ErrorJobDescription, setErrorJobDescription] = useState<string | null>(
    null
  );

  const [jobBudget, setJobBudget] = useState<string>("");
  const [ErrorJobBudget, setErrorJobBudget] = useState<string | null>(null);

  const [governorate, setGovernorate] = useState<string>("");
  const [ErrorGovernorate, setErrorGovernorate] = useState<string | null>(null);

  // UI states
  const [AddJobToggle, setAddJobToggle] = useState<boolean>(false);
  const [IsLoading, setIsLoading] = useState<boolean>(false);

  // User jobs state
  const [UserJobs, setUserJobs] = useState<UserJobsData | null>(null);
  const [loadingJobs, setLoadingJobs] = useState<boolean>(true);
  const [jobsError, setJobsError] = useState<string | null>(null);

  // Fetch user jobs on mount
  const fetchJobs = async (id: string) => {
    if (!data?.user?.userId) return;
    setLoadingJobs(true);
    setJobsError(null);
    try {
      const res: UserJobsRespons = await GetUserJobs(id);
      if (res && res.data) {
        setUserJobs(res.data);
      } else {
        setJobsError(res?.message || "Failed to fetch jobs");
      }
    } catch (err: any) {
      setJobsError(err?.message || "Failed to fetch jobs");
    }
    setLoadingJobs(false);
  };
  useEffect(() => {
    if (data?.user.userId) {
      fetchJobs(data?.user.userId);
    }
  }, [data?.user?.userId]);

  const handleJobSubmit = async () => {
    setIsLoading(true);

    // Validate inputs
    let isValid = true;

    if (!jobHeader.trim()) {
      setErrorJobHeader(t("job_header_required"));
      isValid = false;
    } else {
      setErrorJobHeader(null);
    }

    if (!jobDescription.trim()) {
      setErrorJobDescription(t("job_description_required"));
      isValid = false;
    } else {
      setErrorJobDescription(null);
    }

    if (!jobBudget || parseFloat(jobBudget) <= 0) {
      setErrorJobBudget(t("job_budget_invalid"));
      isValid = false;
    } else {
      setErrorJobBudget(null);
    }

    if (!governorate) {
      setErrorGovernorate(t("governorate_required"));
      isValid = false;
    } else {
      setErrorGovernorate(null);
    }

    if (isValid) {
      // Create FormData
      const formData = new FormData();

      formData.append("title", jobHeader);
      formData.append("description", jobDescription);
      formData.append("budget", jobBudget);

      // Log to console
      console.log("Job Form Data:");
      console.log(formData.get("title"));
      console.log(formData.get("description"));
      console.log(formData.get("budget"));

      if (
        formData.has("title") &&
        formData.has("description") &&
        formData.has("budget")
      ) {
        CallingPostJobAPI(formData);
      } else {
        addToast({
          title: "Error",
          color: "danger",
        });
      }

      // Clear form
    } else {
      addToast({
        title: t("fill_all_fields"),
        color: "danger",
      });
    }

    setIsLoading(false);
  };

  async function CallingPostJobAPI(x: FormData) {
    const res = await AddJobApi(x);
    console.log(res);

    if (res.message) {
      clearJobFields();
      setAddJobToggle(false);
      fetchJobs(data?.user.userId!);
      addToast({
        title: res.message,
        color: "success",
      });
    }
  }

  const clearJobFields = () => {
    setJobHeader("");
    setJobDescription("");
    setJobBudget("");
    setGovernorate("");
    setErrorJobHeader(null);
    setErrorJobDescription(null);
    setErrorJobBudget(null);
    setErrorGovernorate(null);
  };

  async function DelelteJob(JobID: string) {
    const res = await DeleteUserJob(JobID);
    console.log(res);
    if (res.message) {
      fetchJobs(data?.user.userId!);
      addToast({
        title: res.message,
        color: "danger",
      });
    }
  }

  return (
    <section className="min-h-screen w-full flex flex-col bg-linear-to-b from-white to-gray-50 py-8">
      {AddJobToggle ? (
        <div className="p-4 md:p-8">
          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {t("post_new_job")}
            </h2>
            <div className="h-1 w-16 bg-linear-to-r from-orange-500 to-orange-400 rounded-full"></div>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl border border-orange-100 shadow-md p-6 md:p-8 space-y-6">
            {/* Job Header Input */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                {t("job_title_label")}
              </label>
              <Autocomplete
                onInputChange={(S) => setJobHeader(S)}
                isClearable={true}
                className=" cursor-pointer"
                label={"Skill type"}
                isInvalid={Boolean(ErrorJobHeader)}
                errorMessage={ErrorJobHeader}
              >
                {Skills.map((skill) => (
                  <AutocompleteItem key={skill.label}>
                    {skill.label}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
            </div>

            {/* Job Description Input */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                {t("job_description_label")}
              </label>
              <Textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                isInvalid={Boolean(ErrorJobDescription)}
                errorMessage={ErrorJobDescription}
                maxLength={500}
                placeholder={t("job_description_placeholder")}
                className="w-full"
              />
              <span className="text-xs text-gray-500">
                {500 - jobDescription.length} {t("characters_remaining")}
              </span>
            </div>

            {/* Budget Input */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                {t("budget_label")}
              </label>
              <Input
                type="number"
                value={jobBudget}
                onChange={(e) => setJobBudget(e.target.value)}
                isInvalid={Boolean(ErrorJobBudget)}
                errorMessage={ErrorJobBudget}
                placeholder={t("budget_placeholder")}
                min={1}
                classNames={{
                  input: "font-medium",
                }}
                className="w-full"
              />
            </div>

            {/* Governorate Select */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                {t("governorate_label")}
              </label>
              <Select
                selectedKeys={governorate ? [governorate] : []}
                onChange={(e) => {
                  setGovernorate(e.target.value);
                  setErrorGovernorate(null);
                }}
                isInvalid={Boolean(ErrorGovernorate)}
                errorMessage={ErrorGovernorate}
                placeholder={t("governorate_placeholder")}
                className="w-full"
              >
                {Governorates.map((gov, index) => (
                  <SelectItem key={gov.label}>{gov.label}</SelectItem>
                ))}
              </Select>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                isLoading={IsLoading}
                onPress={handleJobSubmit}
                className="bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-3"
              >
                {t("post_job_button")}
              </Button>
              <Button
                onPress={() => {
                  setAddJobToggle(false);
                  clearJobFields();
                }}
                variant="bordered"
                className="border-gray-300 text-gray-700 font-semibold px-8 py-3"
              >
                {t("cancel_button")}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 md:p-8">
          <Button
            onPress={() => setAddJobToggle(true)}
            className="bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3"
          >
            <GoPlus className="text-2xl" /> {t("post_new_job_button")}
          </Button>
        </div>
      )}

      {/* User Jobs Section */}
      <div className="w-full p-4 md:p-8">
        {/* Header section */}
        <div className="mb-8">
          <div className="flex items-end justify-between gap-4 mb-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t("my_jobs_heading")}
            </h2>
            <span className="inline-block px-4 py-2 bg-linear-to-r from-orange-100 to-orange-50 border border-orange-200 rounded-full text-sm font-medium text-orange-700">
              {UserJobs?.jobs?.length || 0}{" "}
              {UserJobs?.jobs?.length === 1
                ? t("job_label_singular")
                : t("job_label_plural")}
            </span>
          </div>
          <div className="h-1 w-16 bg-linear-to-r from-orange-500 to-orange-400 rounded-full"></div>
        </div>

        {/* Jobs Grid - Stacked Layout */}
        <div className="space-y-8">
          {loadingJobs ? (
            <div className="py-16 text-center">
              <div className="inline-block p-4 bg-orange-100 rounded-full mb-4 animate-pulse">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t("loading_jobs")}
              </h3>
            </div>
          ) : jobsError ? (
            <div className="py-16 text-center">
              <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-2">
                {t("error_loading_jobs")}
              </h3>
              <p className="text-red-600 mb-6">{jobsError}</p>
            </div>
          ) : UserJobs && UserJobs.jobs && UserJobs.jobs.length > 0 ? (
            UserJobs.jobs.map((job: UserJobs, index: number) => (
              <div className="group bg-orange-400 relative">
                <article
                  key={index}
                  className=" relative z-20 group-hover:translate-x-15  bg-linear-to-br from-white via-white to-orange-50 border-l-4 border-main-background   shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6 md:p-8">
                    {/* Top section: Title + Meta */}
                    <div className="mb-6 pb-6 border-b border-orange-100">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {job.servReqName}
                        </h3>
                        <div>
                          <span className="inline-flex px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-lg w-fit">
                            ID: {job.servReqId}
                          </span>
                          <span className=" p-3 block text-right text-main-background">
                            {" "}
                            {formatDistanceToNow(fromUnixTime(job.createdAt), {
                              addSuffix: true,
                              locale: ar,
                            })}{" "}
                            {/* يتوفيييق انا عامل التاريخ عربي */}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 font-medium">
                        {t("posted_by")}:{" "}
                        <span className="text-orange-600 font-bold">
                          {UserJobs.fullname}
                        </span>
                      </p>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        {job.description}
                      </p>
                    </div>

                    {/* Job Details Grid */}
                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-linear-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4">
                        <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                          {t("budget")}
                        </p>
                        <p className="text-2xl font-bold text-orange-600">
                          {job.budget} EGP
                        </p>
                      </div>
                      {/* Governorate is not in UserJobs, so you may want to add it if available */}
                    </div>

                    {/* Footer: Stats */}
                    <div className="pt-4 border-t border-orange-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold">
                          {UserJobs.fullname.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            {t("posted_by")}
                          </p>
                          <p className="text-sm font-semibold text-gray-900">
                            {UserJobs.fullname}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
                          {t("user_id")}:{" "}
                          <span className="font-mono font-bold">
                            {UserJobs.userId}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
                <span className="absolute    text-center gap-5 h-full top-0 left-2 z-0 text-5xl flex flex-col justify-evenly ">
                  <MdDelete
                    onClick={() => DelelteJob(job.servReqId)}
                    className="  cursor-pointer content-center  hover:text-red-600 transition-all "
                  />
                  <FaEdit className="    cursor-pointer  hover:text-yellow-300  transition-all" />
                </span>
              </div>
            ))
          ) : (
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t("no_jobs_yet_title")}
              </h3>
              <p className="text-gray-600 mb-6">{t("no_jobs_yet_paragraph")}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
