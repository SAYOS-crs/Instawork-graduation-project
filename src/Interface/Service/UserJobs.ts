
export interface UserJobsRespons {
        message: string
        data: UserJobsData
}



export interface UserJobsData {
        userId: string
        fullname: string
        jobs: UserJobs[]
}


export interface UserJobs {
        servReqId: string;
        servReqName: string;
        description: string;
        budget: number;
        createdAt: number;
}