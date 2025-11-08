import React from "react";

export default async function page() {
  const UserData = await fetch("https://gp2025.runasp.net/user/myInfo", {
    method: "GET",
    headers: {
      token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI4NGUwMjY4MS1jZjk4LTQxY2QtOGIwOS04NjU4NTViNDcyZGMiLCJ1bmlxdWVfbmFtZSI6IkVzbGFtIiwicm9sZSI6IlVzZXIiLCJuYmYiOjE3NjIwMTUxNzAsImV4cCI6MTc2MjAxODc3MCwiaWF0IjoxNzYyMDE1MTcwLCJpc3MiOiJHcmFkdWF0aW9uUHJvamVjdEFQSSIsImF1ZCI6IkdyYWR1YXRpb25Qcm9qZWN0Q2xpZW50In0.yIEf5SAycIKqouhCt4R03ReOdbOyXwb4bvPwHVOpZgY`,
    },
    next: {
      revalidate: 10,
    },
  }).then((res) => res.json());

  console.log(UserData.user);

  return (
    <div className="h-screen">
      <article>
        <p> {UserData.user.normalizedEmail} </p>
      </article>
    </div>
  );
}
