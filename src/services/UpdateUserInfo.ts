'use server'

import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"


export default async function UpdateingUserInfo(UpdatedData : FormData) {

    const inc_token = (await cookies()).get('next-auth.session-token')?.value
    const {accessToken} : any= await decode({token : inc_token , secret : process.env.NEXTAUTH_SECRET! })

    try {
        const req = await fetch( `${process.env.API_BASE_URL}/users`,{
        method : 'PATCH',
        headers : {
            token : accessToken+""
        },
        body : UpdatedData
    } )
    if (req.ok) {
        const respons = await req.json()
        
        return await respons
    }
    
    return req
    } catch (error) {
        return error
    }
    
}







