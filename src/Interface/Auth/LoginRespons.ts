
export interface SuccessRespons {
    message: string,
    user: LogedUser,
    token: string
}

export type LogedUser = {
        userId: string
        fullname: string
        phoneNumber: string
        role: string
        email: string
        bio:string
        profileImageUrl: string
    }



export interface ErorrRespons {
    error : string
}

  