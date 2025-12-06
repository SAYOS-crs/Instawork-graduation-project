'use server'

import GetToken from "@/helpers/GetTokenSSR"

export default async function DeleteUser() {
    const User_Token = await GetToken()
    try {
            const req = await fetch(`https://gp2025.runasp.net/api/v1/users`,{
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