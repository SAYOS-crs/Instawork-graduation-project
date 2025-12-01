'use server'

import GetToken from "@/helpers/GetTokenSSR"



export default async function AddServiceAPI(formdata : FormData) {
    const token = await GetToken()
    try {
        
        const requst = await fetch(`${process.env.API_BASE_URL}/services`,{
            method : 'POST',
            body : formdata ,
            headers : {
                token : token+''
            }
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






