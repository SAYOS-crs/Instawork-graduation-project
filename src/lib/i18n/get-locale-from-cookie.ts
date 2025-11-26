import { cookies } from "next/headers";

export async function getLocaleFromCookie(): Promise<"ar" | "en"> {
  const cookieStore = await cookies();
  return (cookieStore.get("NEXT_LOCALE")?.value as "ar" | "en") || "ar";
 } 
