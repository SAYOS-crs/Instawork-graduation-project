'use server'
import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"





export default async function GetToken() {
        const inc_token = (await cookies()).get('next-auth.session-token')?.value
        const {accessToken} : any= await decode({token : inc_token , secret : process.env.NEXTAUTH_SECRET! })
        return accessToken
}


