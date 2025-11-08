import { LogedUser } from "@/Interface/Auth/LoginRespons"
import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    LogedUser : LogedUser
    token : string
  }


  interface Session {
    user: LogedUser
  }
}

import { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    user: LogedUser
    accessToken: string
  }
}