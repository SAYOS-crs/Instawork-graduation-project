'use server'

import GetToken from "@/helpers/GetTokenSSR"

export default async function DeleteUser() {
    const User_Token = await GetToken()
    try {
            const req = await fetch(`${process.env.API_BASE_URL}/users`,{
        method : 'DELETE',
        headers : {
            token : User_Token
        }
    })
    if (req.ok) {
        const Res = await req.json()
        return Res
    }
    return req
    } catch (error) {
        
    }
}