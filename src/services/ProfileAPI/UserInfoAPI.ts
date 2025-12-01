"use server"



  export default async function CallingUserInfoAPI(id : string )  {

    try {
    const req = await fetch(`${process.env.API_BASE_URL}/users/${id}`,{
        headers : {
            "Content-Type": "application/json"
        }
    })
    if (req.ok) {
        const respons = req.json()
        return respons
    }
    } catch (error) {
        return error
    }

}









