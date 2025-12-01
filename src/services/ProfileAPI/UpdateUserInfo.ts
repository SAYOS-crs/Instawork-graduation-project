'use server'

import GetToken from "@/helpers/GetTokenSSR"
import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"


export default async function UpdateingUserInfo(UpdatedData : FormData) {

    const token = await GetToken()


    try {
        const req = await fetch( `${process.env.API_BASE_URL}/users`,{
        method : 'PATCH',
        headers : {
            token : token+""
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







