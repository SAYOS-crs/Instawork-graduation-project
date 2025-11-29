 interface UserServicesRespons {
        message: string
        data: UserServicesData
}


interface UserServicesData {
        userId: string
        fullname: string
        services: UserService[]
}

interface UserService {
                
                serviceId: string
                serviceName:string
                description:string
                serviceImages: string[]
                createdAt: number
            
}