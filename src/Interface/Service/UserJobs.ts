 interface UserJobsRespons {
        message: string
        data: UserJobsData
}


interface UserJobsData {
        userId: string
        fullname: string
        jobs: UserJobs[]
}

interface UserJobs {
                
                servReqId: string
                servReqName:string
                description:string
                budget: number
                createdAt: number
            
}