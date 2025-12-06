'use server'

import GetToken from "@/helpers/GetTokenSSR"



export default async function AddServiceAPI(formdata : FormData) {
    const token = await GetToken()
    try {
        
        const requst = await fetch(`https://gp2025.runasp.net/api/v1/services`,{
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






