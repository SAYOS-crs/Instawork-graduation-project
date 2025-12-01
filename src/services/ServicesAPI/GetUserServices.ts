'use server'



export default async function GetUserServices(id : string) {
    try {
        const requst = await fetch(`${process.env.API_BASE_URL}/users/${id}/services`,{
            method : 'GET',
            next : {
                revalidate : 20
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