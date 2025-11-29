interface ServiceDetailsRespons {
        message: string
        data: ServiceDetailsData
}



interface ServiceDetailsData {
            serviceId: string
            serviceName:string
            description: string
            rating: 0,
            user: User
            serviceImages: string[]
            createdAt: number
}

interface User {
        userId: string
        fullname: string
        profileImage: string
        phoneNumber: string
        SecondPhoneNumber : string
        bio:string
        address: string
}