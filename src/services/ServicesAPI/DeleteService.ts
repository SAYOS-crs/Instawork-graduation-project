'use server'

import GetToken from "@/helpers/GetTokenSSR"






export default async function DeleteUserService(id : string) {
    const token = await GetToken()
    try {
            const req = await fetch(`https://gp2025.runasp.net/api/v1/services/${id}`,{
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