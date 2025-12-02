"use client";
import React, { useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Skills } from "@/components/DashBord Commponents/MyService/ServiceLists";
import { Governorates } from "@/components/DashBord Commponents/Profile/Governorates";
import Link from "next/link";
import GetAllJobs from "@/services/JobsAPI/GetAllJobs";
import { formatDistanceToNow, fromUnixTime } from "date-fns";
import { ar } from "date-fns/locale/ar";

interface JobCardData {
  jobId: string;
  jobHeader: string;
  jobDescription: string;
  jobBudget: number;
  governorate: string;
  postedBy: string;
  userId: string;
}

export default function page() {
  const Router = useRouter();

  // Mock jobs data

  //
  const [JobsData, setJobsData] = useState<JobData[] | null>(null);

  // Filter states
  const [FilteredJobs, setFilteredJobs] = useState<JobCardData[] | null>(null);
  const [SkillFilter, setSkillFilter] = useState<string>("");
  const [GovernorateFilter, setGovernorateFilter] = useState<string>("");

  // Filter jobs by skill (matching job header)

  // Filter jobs by governorate

  // Apply both filters

  // Reset all filters
  const resetFilters = () => {
    setSkillFilter("");
    setGovernorateFilter("");
    setFilteredJobs(null);
  };

  async function CallingJobsAPI() {
    const respons: AddJobInterface = await GetAllJobs();
    console.log(respons);
    if (respons.message) {
      setJobsData(respons.data);
    }
  }
  console.log(JobsData);

  useEffect(() => {
    CallingJobsAPI();
  }, []);

  return (
    <section className="min-h-screen bg-linear-to-b from-primry-background via-gray-50 to-white font-poppins selection:bg-main-background selection:text-primry-background">
      {/* Header Section */}
      <header className="bg-linear-to-r from-main-background to-orange-700 shadow-xl py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-3">
              Available Jobs
            </h1>
            <p className="text-lg text-primry-background opacity-90">
              Find the perfect job opportunity that matches your skills
            </p>
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
              className="bg-white rounded-2xl shadow-lg p-6 border-l-8 border-main-background sticky top-20 space-y-6"
            >
              <h2 className="text-2xl font-bold text-main-background mb-6">
                Filters
              </h2>

              {/* Skill Filter */}
              <div className="space-y-3">
                <label className="block text-main-background font-semibold">
                  Job Type
                </label>
                <Autocomplete
                  value={SkillFilter}
                  isClearable={true}
                  variant="faded"
                  placeholder="Search by job type"
                  className="bg-white/5"
                >
                  {Skills.map((skill) => (
                    <AutocompleteItem key={skill.label}>
                      {skill.label}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
                {SkillFilter && (
                  <Button
                    size="sm"
                    className="w-full bg-linear-to-r from-main-background to-orange-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Clear Job Type
                  </Button>
                )}
              </div>

              {/* Location Filter */}
              <div className="space-y-3">
                <label className="block text-main-background font-semibold">
                  Location
                </label>
                <Autocomplete
                  value={GovernorateFilter}
                  isClearable={true}
                  variant="faded"
                  placeholder="Search by location"
                  className="bg-white/5"
                >
                  {Governorates.map((gov) => (
                    <AutocompleteItem key={gov.label}>
                      {gov.label}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
                {GovernorateFilter && (
                  <Button
                    size="sm"
                    onPress={() => {
                      setGovernorateFilter("");
                    }}
                    className="w-full bg-linear-to-r from-gray-500 to-gray-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Clear Location
                  </Button>
                )}
              </div>

              {/* Reset All Filters */}
              {(SkillFilter || GovernorateFilter) && (
                <Button
                  onPress={resetFilters}
                  className="w-full bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Reset All Filters
                </Button>
              )}
            </motion.div>
          </div>

          {/* Jobs Display */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {JobsData?.map((job, index) => (
                <motion.article
                  key={job.servReqId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group bg-linear-to-br from-white via-white to-orange-50 rounded-2xl border border-orange-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6 md:p-8">
                    {/* Top section: Title + Meta */}
                    <div className="mb-6 pb-6 border-b border-orange-100">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold   text-main-background  transition-colors">
                          {job.servReqName}
                        </h3>

                        <div className="">
                          <span className="inline-flex px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-lg w-fit shrink-0">
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
                        <span className="text-orange-600 font-bold">
                          Posted by:{" "}
                        </span>
                        {job.user.fullname}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg line-clamp-3">
                        <span className="text-main-background font-bold">
                          description :
                        </span>{" "}
                        {job.description}
                      </p>
                    </div>

                    {/* Job Details Grid */}
                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-linear-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4">
                        <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                          Budget
                        </p>
                        <p className="text-2xl font-bold text-orange-600">
                          {job.budget} EGP
                        </p>
                      </div>
                      <div className="bg-linear-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
                        <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                          Location
                        </p>
                        <p className="text-2xl font-bold text-blue-600">
                          {job.user.address ? job.user.address : "N/A"}
                        </p>
                      </div>
                    </div>

                    {/* Footer: Posted by + View Details Button */}
                    <div className="pt-4 border-t border-orange-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold">
                          {job.user.fullname.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">
                            Posted by
                          </p>
                          <p className="text-sm font-semibold text-gray-900">
                            {job.user.fullname}
                          </p>
                        </div>
                      </div>
                      <Button
                        onPress={() => Router.push(`/Jobs/${job.servReqId}`)}
                        className="inline-flex items-center justify-center px-6 py-2 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        View Details →
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Empty State */}
            {FilteredJobs &&
              FilteredJobs.length === 0 &&
              (SkillFilter || GovernorateFilter) && (
                <div className="text-center py-20">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-2xl text-gray-700 font-semibold mb-2">
                    No jobs found
                  </p>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters to find more opportunities
                  </p>
                  <Button
                    onPress={resetFilters}
                    className="bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-2"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
