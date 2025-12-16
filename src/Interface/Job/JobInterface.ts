

 interface AddJobInterface {
    
    message: string
    data: JobData[]

}


 interface JobData {
     servReqId: string
        servReqName: string
        description: string
        budget: number
        user: User
        createdAt: number
}

interface User {
            userId: string
            fullname: string
            profileImage: string
            phoneNumber: string
            secondPhoneNumber: string
            bio: string
            address: string 
}