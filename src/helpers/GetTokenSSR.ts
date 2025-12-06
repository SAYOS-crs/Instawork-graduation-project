'use server'
import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"





export default async function GetToken() {
        if (process.env.NODE_ENV === 'development') {
                const inc_token = (await cookies()).get('next-auth.session-token')?.value
                const {accessToken} : any= await decode({token : inc_token , secret : process.env.NEXTAUTH_SECRET! })
                return accessToken
                
        }else{
                const inc_token = (await cookies()).get('__Secure-next-auth.session-token')?.value
                const {accessToken} : any= await decode({token : inc_token , secret : process.env.NEXTAUTH_SECRET! })
                return accessToken
                
        }
}


