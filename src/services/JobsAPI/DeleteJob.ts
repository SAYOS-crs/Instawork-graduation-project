'use server'
import GetToken from "@/helpers/GetTokenSSR"







export default async function DeleteUserJob(JobID : string) {
    
    const User_Token = await GetToken()

    try {
            const req = await fetch(`https://gp2025.runasp.net/api/v1/jobs/${JobID}`,{
        method : 'DELETE',
        headers : {
            token : User_Token
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