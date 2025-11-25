'use server'

export default async function GetAllServices() {
    try {
        const requst = await fetch("https://gp2025.runasp.net/api/v1/services",{
            next : {
                revalidate : 30
            }
        })
        if (requst.ok) {
        const respons  = await requst.json()
        return respons
        }
        return requst
    } catch (error) {
        return error
    }
}