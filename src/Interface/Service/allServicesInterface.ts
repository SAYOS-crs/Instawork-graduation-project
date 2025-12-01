

export default interface AllServicesRespons{
    message: string
    data: ServicesInterface[]
}



export interface ServicesInterface {
    user: ServiceProviderInfo
    
    serviceName:string
            serviceImages: string[],
            serviceId: string
            description: string
            createdAt: number


}


interface ServiceProviderInfo {
                userId: string
                fullname: string
                profileImage: string
                address : string | null
}