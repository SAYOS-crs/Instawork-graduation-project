'use server'


export default async function UpdateingUserInfo(UpdatedData : FormData) {
    try {
        const req = await fetch( `${process.env.API_BASE_URL}/users`,{
        method : 'PATCH',
        headers : {
            token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI5MWI2ZWY4Yi1iZmI2LTRjYjEtYTEyNi05OWVkYTVhZDY5NmQiLCJ1bmlxdWVfbmFtZSI6Ik1vbnRhbmE1MTIiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTc2MzQ3Njk0MSwiZXhwIjoxNzYzNDgwNTQxLCJpYXQiOjE3NjM0NzY5NDEsImlzcyI6IkdyYWR1YXRpb25Qcm9qZWN0QVBJIiwiYXVkIjoiR3JhZHVhdGlvblByb2plY3RDbGllbnQifQ.h83iQm0JcRBcjjUzDfKX2F8_O222mJDjOiz_bnY0uzY',
            
        },
        body : UpdatedData
    } )
    if (req.ok) {
        const respons = req.json()
        return respons
    }
    } catch (error) {
        return error
    }
    
}







