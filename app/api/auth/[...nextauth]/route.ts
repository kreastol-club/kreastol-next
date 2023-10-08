import NextAuth from 'next-auth'

import type { NextAuthOptions } from 'next-auth'
import GitHubProvider, {GithubProfile} from "next-auth/providers/github";
import GoogleProvider, {GoogleProfile} from "next-auth/providers/google";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
    },
    providers: [
        GitHubProvider({
            profile(profile: GithubProfile) {
                let isAdmin = profile?.role === "admin" ?? false;

                return {
                    name: profile.name,
                    role: profile.role ?? "user",
                    id: profile.id.toString(),
                    image: profile.avatar_url,
                    email: profile.email,
                    isAdmin: isAdmin
                }
            },
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            profile(profile: GoogleProfile) {
                let isAdmin = profile?.role === "admin" ?? false;

                return {
                    name: profile.name,
                    role: profile.role ?? "user",
                    id: profile.sub.toString(),
                    image: profile.picture,
                    email: profile.email,
                    isAdmin: isAdmin
                }
            },
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user){
                token.role = user.role
            }
            return token
        },

        async session({session, token}) {
            if (session?.user){
                session.user.role = token.role
                session.user.isAdmin = token.role === "admin"
            }
            return session
        },
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

