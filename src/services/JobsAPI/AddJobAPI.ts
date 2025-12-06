'use server'
import GetToken from "@/helpers/GetTokenSSR"




export default async function AddJobApi(formdata : FormData) {
    const token = await GetToken()
    try {
        
        const requst = await fetch(`https://gp2025.runasp.net/api/v1/jobs`,{
            method : 'POST',
            headers : {
                token : token+''
            },
            body : formdata ,
        })
        if (requst.ok) {
            const respons = await requst.json()
            return respons
        }
        return requst
    } catch (error) {
        return error
    }
}





