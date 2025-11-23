

export interface UserDataRespons {
    data : UserData
    message : string
}

export  interface UserData {
        userId: string
        bio: string| null,
        fullname: string
        phoneNumber: string
        secondPhoneNumber : string | null
        gender : "Male" | "Female"
        email: string 
        dateOfBirth: string
        role : 'User' | 'Admin'
        profileImage: string| null,
        address: string| null,
        services: []
}
