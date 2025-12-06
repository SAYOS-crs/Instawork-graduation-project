'use server'



export default async function GetUserServices(id : string) {
    try {
        const requst = await fetch(`https://gp2025.runasp.net/api/v1/users/${id}/services`,{
            method : 'GET',

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