import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "agent@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Mock authentication for MVP
        // In real app, call backend API:
        // const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/login", ...)
        
        if (credentials?.email && credentials?.password) {
           return {
             id: "1",
             name: "Test Agent",
             email: credentials.email,
             license_number: "CA-123456"
           }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        // session.user.id = token.sub
      }
      return session
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
