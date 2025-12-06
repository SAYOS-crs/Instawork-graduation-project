'use server'
import GetToken from "@/helpers/GetTokenSSR"





export default async function GetJobDetails(JobID : string) {
    const ssr_Token = await GetToken()
    try {
    const req = await fetch(`https://gp2025.runasp.net/api/v1/jobs/${JobID}`,{
        headers : {
            token : ssr_Token
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