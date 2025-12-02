'use server'
import GetToken from "@/helpers/GetTokenSSR"





export default async function GetJobDetails(JobID : string) {
    const ssr_Token = await GetToken()
    try {
    const req = await fetch(`${process.env.API_BASE_URL}/jobs/${JobID}`,{
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