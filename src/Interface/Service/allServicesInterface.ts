

export default interface AllServicesRespons{
    message: string
    data: ServicesInterface[]
}



export interface ServicesInterface {
            serviceId: string
            serviceName:string
            description: string

            serviceImages: string[],

            user: ServiceProviderInfo
            createdAt: number


}


interface ServiceProviderInfo {
                    userId: string
                fullname: string
                profileImage: string
}