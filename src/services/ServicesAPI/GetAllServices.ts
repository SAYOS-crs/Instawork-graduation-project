'use server'

export default async function GetAllServices() {
    try {
        const requst = await fetch(`${process.env.API_BASE_URL}/services`,{
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