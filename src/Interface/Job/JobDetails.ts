
interface JobDetailsResponsInterface {
    message: string
    data: data
}

interface data {
    servReqId: string
        servReqName: string
        description: string
        budget: number,
        user: user
        createdAt: number
}

interface user {
    
            userId: string
            fullname: string
            profileImage: string
            phoneNumber: string
            secondPhoneNumber: string
            bio: string
            address: null | string
        
}