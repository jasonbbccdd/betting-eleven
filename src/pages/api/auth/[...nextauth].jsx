import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import prisma from '@/controllers/_helpers/prisma'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  callbacks: {
    async session({ session, user }) {
      console.log('session:', session) // eslint-disable-line
      console.log('user:', user) // eslint-disable-line

      session.user.id = user.id // eslint-disable-line
      return session
    }
  },
  pages: {
    signIn: '/auth/signin'
  }
})

// GoogleProvider({
//   clientId: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   profile(profile) {
//     return {
// Return all the profile information you need.
// The only truly required field is `id`
// to be able identify the account when added to a database
//     }
//   },
