"use server"



  export default async function CallingUserInfoAPI(id : string )  {

    try {
    const req = await fetch(`https://gp2025.runasp.net/api/v1/users/${id}`,{
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









