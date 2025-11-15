'use server'

import { DateTime } from "next-auth/providers/kakao";

export interface data {
    name: string;
    email: string;
    password: string;
    rePassword: string;
    phoneNumber: string;
    gender : 'Male' | 'Female';
    dateOfBirth : DateTime
  }


export async function RegisterAPICall(data:data) {
        try {
      const res = await fetch(`${process.env.API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: data.name,
          phoneNumber: "+" + data.phoneNumber,
          password: data.password,
          email: data.email,
          gender : data.gender,
          dateOfBirth : data.dateOfBirth

        }),
      });
      const respons = await res.json();
      return await respons
    } catch (error) {
      return await error
    }
}