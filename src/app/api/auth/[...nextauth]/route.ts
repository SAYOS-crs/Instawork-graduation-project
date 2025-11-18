
import { ErorrRespons, SuccessRespons } from "@/Interface/Auth/LoginRespons"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
            phoneNumber: { label: "phoneNumber", type: "text", placeholder: "phoneNumber" },
            password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await fetch(`${process.env.API_BASE_URL}/auth/login`,{
                    method : 'POST',
                    body : JSON.stringify({
                        phoneNumber : credentials?.phoneNumber,
                        password : credentials?.password,
                    }),
                    headers : { "Content-Type": "application/json"},
                })
                const respons : SuccessRespons | ErorrRespons = await res.json()
                if ('token' in respons) {
                     return{
                            id : respons.user.userId,
                            LogedUser : respons.user,
                            token : respons.token
                        }
                }else{
                    throw new Error(respons.error)
                }
            // Return null if user data could not be retrieved
            },
        })
    ],

    callbacks : {


        async jwt({token , user} ){
            if(user){
                token.accessToken = user.token
                token.user = user.LogedUser
            }
            return token
        },

        async session({ session ,  token } ) {
            if(token.user){
                session.user = token.user
            }
            return session
        },

    },

    pages : {
        signIn : '/Login'
    },
    secret : process.env.AUTH_SECRET
    
})

export { handler as GET, handler as POST }