"use client";
import {
  addToast,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tabs,
  Tab,
} from "@heroui/react";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import {
  getAllServicesAction,
  getAllJobsAction,
  deleteServiceAction,
  deleteJobAction,
} from "@/services/Admin Api/adminAPI";
import { formatDistanceToNow, fromUnixTime } from "date-fns";
import { ar } from "date-fns/locale/ar";
import { MdDelete, MdRefresh, MdDashboard } from "react-icons/md";
import Image from "next/image";
import { ServicesInterface } from "@/Interface/Service/allServicesInterface";

export default function AdminPage() {
  const { data: session } = useSession();
  const t = useTranslations("Admin");

  const [allServices, setAllServices] = useState<ServicesInterface[]>([]);
  const [allJobs, setAllJobs] = useState<JobData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Statistics
  const totalServices = allServices.length;
  const totalJobs = allJobs.length;
  const totalUsers = new Set([
    ...allServices.map((s) => s.user.userId),
    ...allJobs.map((j) => j.user.userId),
  ]).size;

  async function fetchAllServices() {
    setIsLoading(true);
    const data = await getAllServicesAction();
    setAllServices(data);
    setIsLoading(false);
  }

  async function fetchAllJobs() {
    setIsLoading(true);
    const data = await getAllJobsAction();
    setAllJobs(data);
    setIsLoading(false);
  }

  async function handleDeleteService(serviceId: string) {
    if (!confirm(t("confirm_delete_service"))) return;

    const result = await deleteServiceAction(serviceId);
    addToast({
      title: result.message,
      color: result.success ? "success" : "danger",
    });

    if (result.success) fetchAllServices();
  }

  async function handleDeleteJob(jobId: string) {
    if (!confirm(t("confirm_delete_job"))) return;

    const result = await deleteJobAction(jobId);
    addToast({
      title: result.message,
      color: result.success ? "success" : "danger",
    });

    if (result.success) fetchAllJobs();
  }
  // Refresh all data
  async function refreshAll() {
    await Promise.all([fetchAllServices(), fetchAllJobs()]);
    addToast({
      title: t("data_refreshed"),
      color: "success",
    });
  }

  useEffect(() => {
    fetchAllServices();
    fetchAllJobs();
  }, []);

  return (
    <section className="min-h-screen w-full bg-linear-to-b from-white to-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {t("admin_dashboard")}
              </h1>
              <p className="text-gray-600">{t("welcome_message")}</p>
            </div>
            <Button
              onPress={refreshAll}
              isLoading={isLoading}
              color="primary"
              startContent={<MdRefresh />}
            >
              {t("refresh")}
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-0 pt-6 px-6">
              <h3 className="text-sm font-semibold text-gray-600 uppercase">
                {t("total_services")}
              </h3>
            </CardHeader>
            <CardBody className="px-6 pb-6">
              <p className="text-3xl font-bold text-blue-600">
                {totalServices}
              </p>
            </CardBody>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-0 pt-6 px-6">
              <h3 className="text-sm font-semibold text-gray-600 uppercase">
                {t("total_jobs")}
              </h3>
            </CardHeader>
            <CardBody className="px-6 pb-6">
              <p className="text-3xl font-bold text-green-600">{totalJobs}</p>
            </CardBody>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardHeader className="pb-0 pt-6 px-6">
              <h3 className="text-sm font-semibold text-gray-600 uppercase">
                {t("total_users")}
              </h3>
            </CardHeader>
            <CardBody className="px-6 pb-6">
              <p className="text-3xl font-bold text-orange-600">{totalUsers}</p>
            </CardBody>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs
          selectedKey={activeTab}
          onSelectionChange={(key) => setActiveTab(key as string)}
          className="mb-6"
        >
          <Tab key="overview" title={t("overview")}>
            <div className="mt-6">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">
                    {t("dashboard_overview")}
                  </h2>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-600">{t("overview_description")}</p>
                </CardBody>
              </Card>
            </div>
          </Tab>

          <Tab key="services" title={t("services_management")}>
            <div className="mt-6">
              <Card>
                <CardHeader className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">{t("all_services")}</h2>
                  <Chip color="primary" variant="flat">
                    {totalServices} {t("services")}
                  </Chip>
                </CardHeader>
                <CardBody>
                  <div className="overflow-x-auto">
                    <Table aria-label="Services table">
                      <TableHeader>
                        <TableColumn>{t("service_name")}</TableColumn>
                        <TableColumn>{t("provider")}</TableColumn>
                        <TableColumn>{t("description")}</TableColumn>
                        <TableColumn>{t("images")}</TableColumn>
                        <TableColumn>{t("created_at")}</TableColumn>
                        <TableColumn>{t("actions")}</TableColumn>
                      </TableHeader>
                      <TableBody
                        items={allServices}
                        isLoading={isLoading}
                        loadingContent="Loading..."
                      >
                        {(service) => (
                          <TableRow key={service.serviceId}>
                            <TableCell>
                              <span className="font-semibold">
                                {service.serviceName}
                              </span>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                {service.user.profileImage?.startsWith(
                                  "data:"
                                ) ? (
                                  <Image
                                    src={service.user.profileImage}
                                    alt={service.user.fullname}
                                    width={36}
                                    height={36}
                                    className="rounded-full object-cover"
                                  />
                                ) : service.user.profileImage ? (
                                  <Image
                                    src={`https://gp2025.runasp.net${service.user.profileImage}`}
                                    alt={service.user.fullname}
                                    width={36}
                                    height={36}
                                    className="rounded-full object-cover"
                                  />
                                ) : (
                                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                                    {service.user.fullname
                                      .charAt(0)
                                      .toUpperCase()}
                                  </div>
                                )}
                                <span className="font-medium">
                                  {service.user.fullname}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <p className="max-w-xs truncate">
                                {service.description}
                              </p>
                            </TableCell>
                            <TableCell>
                              <Chip size="sm" variant="flat">
                                {service.serviceImages?.length || 0}
                              </Chip>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm text-gray-500">
                                {formatDistanceToNow(
                                  fromUnixTime(service.createdAt),
                                  { addSuffix: true, locale: ar }
                                )}
                              </span>
                            </TableCell>
                            <TableCell>
                              <Button
                                isIconOnly
                                color="danger"
                                variant="light"
                                onPress={() =>
                                  handleDeleteService(service.serviceId)
                                }
                              >
                                <MdDelete />
                              </Button>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Tab>

          <Tab key="jobs" title={t("jobs_management")}>
            <div className="mt-6">
              <Card>
                <CardHeader className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">{t("all_jobs")}</h2>
                  <Chip color="success" variant="flat">
                    {totalJobs} {t("jobs")}
                  </Chip>
                </CardHeader>
                <CardBody>
                  <div className="overflow-x-auto">
                    <Table aria-label="Jobs table">
                      <TableHeader>
                        <TableColumn>{t("job_title")}</TableColumn>
                        <TableColumn>{t("posted_by")}</TableColumn>
                        <TableColumn>{t("description")}</TableColumn>
                        <TableColumn>{t("budget")}</TableColumn>
                        <TableColumn>{t("created_at")}</TableColumn>
                        <TableColumn>{t("actions")}</TableColumn>
                      </TableHeader>
                      <TableBody
                        items={allJobs}
                        isLoading={isLoading}
                        loadingContent="Loading..."
                      >
                        {(job) => (
                          <TableRow key={job.servReqId}>
                            <TableCell>
                              <span className="font-semibold">
                                {job.servReqName}
                              </span>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                {job.user.profileImage?.startsWith("data:") ? (
                                  <Image
                                    src={job.user.profileImage}
                                    alt={job.user.fullname}
                                    width={36}
                                    height={36}
                                    className="rounded-full object-cover"
                                  />
                                ) : job.user.profileImage ? (
                                  <Image
                                    src={`https://gp2025.runasp.net${job.user.profileImage}`}
                                    alt={job.user.fullname}
                                    width={36}
                                    height={36}
                                    className="rounded-full object-cover"
                                  />
                                ) : (
                                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
                                    {job.user.fullname.charAt(0).toUpperCase()}
                                  </div>
                                )}
                                <span className="font-medium">
                                  {job.user.fullname}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <p className="max-w-xs truncate">
                                {job.description}
                              </p>
                            </TableCell>
                            <TableCell>
                              <Chip color="success" variant="flat">
                                {job.budget} {t("egp")}
                              </Chip>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm text-gray-500">
                                {formatDistanceToNow(
                                  fromUnixTime(job.createdAt),
                                  { addSuffix: true, locale: ar }
                                )}
                              </span>
                            </TableCell>
                            <TableCell>
                              <Button
                                isIconOnly
                                color="danger"
                                variant="light"
                                onPress={() => handleDeleteJob(job.servReqId)}
                              >
                                <MdDelete />
                              </Button>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}
