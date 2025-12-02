'use server'

import GetToken from "@/helpers/GetTokenSSR"






export default async function DeleteUserService(id : string) {
    const token = await GetToken()
    try {
            const req = await fetch(`${process.env.API_BASE_URL}/services/${id}`,{
        method : 'DELETE',
        headers : {
            token : token
        }
    })
    if (req.ok) {
        const respons = await req.json()
        return respons
    }
    return req
    } catch (error) {
        return error
    }
    
}