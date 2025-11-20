
export interface SuccessRespons {
    message: string,
    user: LogedUser,
    token: string
}

export type LogedUser = {
        userId: string
        role: string
    }


export interface ErorrRespons {
    error : string
}

  