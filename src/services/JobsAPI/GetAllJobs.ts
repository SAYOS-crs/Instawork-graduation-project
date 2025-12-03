'use server'





export default async function GetAllJobs() {
    try {
        const req = await fetch(`${process.env.API_BASE_URL}/jobs`,{
            next : {
                revalidate : 30
            }
        });
        if (req.ok) {
          const res = await req.json();
          return res
        }
        return req
    } catch (error) {
        return error
    }
}