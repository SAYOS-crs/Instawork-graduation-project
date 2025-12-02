"use client";
import { addToast, Button } from "@heroui/react";
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

interface JobData {
  jobId: string;
  jobHeader: string;
  jobDescription: string;
  jobBudget: number;
  governorate: string;
}

interface MockUserJobs {
  jobs: JobData[];
  fullname: string;
  userId: string;
}

export default function page() {
  const { data } = useSession();
  const t = useTranslations("MyJobs");

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

  // Mock user jobs data
  const [UserJobs, setUserJobs] = useState<MockUserJobs>({
    jobs: [
      {
        jobId: "JOB001",
        jobHeader: "Build Modern React Dashboard",
        jobDescription:
          "Need a professional React dashboard with TypeScript, Tailwind CSS, and real-time data visualization. Must integrate with REST APIs and include authentication.",
        jobBudget: 1500,
        governorate: "Giza",
      },
      {
        jobId: "JOB002",
        jobHeader: "Mobile App UI Design",
        jobDescription:
          "Design a beautiful and intuitive mobile app UI for iOS and Android platforms. Focus on user experience and modern design trends.",
        jobBudget: 800,
        governorate: "Cairo",
      },
    ],
    fullname: "Ahmed Hassan",
    userId: "USER123",
  });

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
      formData.append("jobHeader", jobHeader);
      formData.append("jobDescription", jobDescription);
      formData.append("jobBudget", jobBudget);
      formData.append("governorate", governorate);

      // Log to console
      console.log("Job Form Data:");
      console.log(formData.get("jobHeader"));
      console.log(formData.get("jobDescription"));
      console.log(formData.get("jobBudget"));
      console.log(formData.get("governorate"));

      addToast({
        title: t("job_posted_success"),
        color: "success",
      });

      // Clear form
      clearJobFields();
      setAddJobToggle(false);
    } else {
      addToast({
        title: t("fill_all_fields"),
        color: "danger",
      });
    }

    setIsLoading(false);
  };

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
              <Input
                value={jobHeader}
                onChange={(e) => setJobHeader(e.target.value)}
                isInvalid={Boolean(ErrorJobHeader)}
                errorMessage={ErrorJobHeader}
                placeholder={t("job_title_placeholder")}
                classNames={{
                  input: "font-medium",
                  label: "text-gray-700",
                }}
                className="w-full"
              />
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
              {UserJobs.jobs.length} {UserJobs.jobs.length === 1 ? t("job_label_singular") : t("job_label_plural")}
            </span>
          </div>
          <div className="h-1 w-16 bg-linear-to-r from-orange-500 to-orange-400 rounded-full"></div>
        </div>

        {/* Jobs Grid - Stacked Layout */}
        <div className="space-y-8">
          {UserJobs.jobs.map((job, index) => (
            <article
              key={index}
              className="group bg-linear-to-br from-white via-white to-orange-50 rounded-2xl border border-orange-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                {/* Top section: Title + Meta */}
                <div className="mb-6 pb-6 border-b border-orange-100">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {job.jobHeader}
                    </h3>
                    <span className="inline-flex px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-lg w-fit">
                      ID: {job.jobId}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium">
                    {t("posted_by")}: {" "}
                    <span className="text-orange-600 font-bold">
                      {UserJobs.fullname}
                    </span>
                  </p>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {job.jobDescription}
                  </p>
                </div>

                {/* Job Details Grid */}
                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-linear-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4">
                    <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                      {t("budget")}
                    </p>
                    <p className="text-2xl font-bold text-orange-600">
                      {job.jobBudget} EGP
                    </p>
                  </div>
                  <div className="bg-linear-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
                    <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                      {t("location")}
                    </p>
                    <p className="text-2xl font-bold text-blue-600">
                      {job.governorate}
                    </p>
                  </div>
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
                      {t("user_id")}: {" "}
                      <span className="font-mono font-bold">
                        {UserJobs.userId}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* Empty state */}
          {UserJobs.jobs.length === 0 && (
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
              <p className="text-gray-600 mb-6">
                {t("no_jobs_yet_paragraph")}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
