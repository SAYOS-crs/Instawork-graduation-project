'use server'

import GetToken from "@/helpers/GetTokenSSR"
import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"


export default async function UpdateingUserInfo(UpdatedData : FormData) {

    const token = await GetToken()

    if (token) {
        
        try {
            const req = await fetch( `https://gp2025.runasp.net/api/v1/users`,{
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


    
}







