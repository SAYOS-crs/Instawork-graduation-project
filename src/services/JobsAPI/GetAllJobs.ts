'use server'





export default async function GetAllJobs() {
    try {
        const req = await fetch(`https://gp2025.runasp.net/api/v1/jobs`,{
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