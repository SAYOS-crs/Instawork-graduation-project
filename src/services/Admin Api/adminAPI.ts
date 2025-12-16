"use server"; 
import GetAllServices from "@/services/ServicesAPI/GetAllServices";
import GetAllJobs from "@/services/JobsAPI/GetAllJobs";
import DeleteUserService from "@/services/ServicesAPI/DeleteService";
import DeleteUserJob from "@/services/JobsAPI/DeleteJob";

// جلب كل الخدمات
export async function getAllServicesAction() {
  try {
    const response = await GetAllServices();
    return response.data || [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

// جلب كل الوظائف
export async function getAllJobsAction() {
  try {
    const response = await GetAllJobs();
    return response.data || [];
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}

// حذف خدمة
export async function deleteServiceAction(serviceId: string) {
  try {
    const response = await DeleteUserService(serviceId);
    console.log(response);
    
    if (response && response.success === true) {
      return { success: true, message: response.message || "تم حذف الخدمة بنجاح" };
    } else {
      return { 
        success: false, 
        message: response?.message || "فشل الحذف (غير مصرح أو الخدمة غير موجودة)" 
      };
    }
  } catch (error: any) {
    console.error("خطأ في حذف الخدمة:", error);
    return { 
      success: false, 
      message: error?.message || "حدث خطأ غير متوقع أثناء الحذف" 
    };
  }
}

// حذف وظيفة
export async function deleteJobAction(jobId: string) {
  try {
    const response = await DeleteUserJob(jobId);
    console.log(response);

    if (response && response.success === true) {
      return { success: true, message: response.message || "تم حذف الوظيفة بنجاح" };
    } else {
      return { 
        success: false, 
        message: response?.message || "فشل الحذف (غير مصرح أو الوظيفة غير موجودة)" 
      };
    }
  } catch (error: any) {
    console.error("خطأ في حذف الوظيفة:", error);
    return { 
      success: false, 
      message: error?.message || "حدث خطأ غير متوقع أثناء الحذف" 
    };
  }
}