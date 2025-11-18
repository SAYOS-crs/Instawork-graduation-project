
export interface SuccessRespons {
    message: string,
    user: LogedUser,
    token: string
}

export type LogedUser = {
        userId: string
        fullname:string
        phoneNumber: string
        secondPhoneNumber: string | null
        email: string
        role: string
        gender:Gender
        dateOfBirth: string
        address: string | null
        profileImage: string | null
        bio: string | null
        balance: number
        isSuspended: boolean,
        createdAt: number
    }

    type Gender = 'Male' | 'Femal'

export interface ErorrRespons {
    error : string
}

  