import type { NextAuthOptions } from 'next-auth'
import GitHubProvider, {GithubProfile} from "next-auth/providers/github";
import GoogleProvider, {GoogleProfile} from "next-auth/providers/google";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export const options: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
    },
    providers: [
        GitHubProvider({
            profile(profile: GithubProfile) {
                return {
                    // ...profile,
                    name: profile.name,
                    role: profile.role ?? "user",
                    id: profile.id.toString(),
                    image: profile.avatar_url,
                    email: profile.email
                }
            },
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            profile(profile: GoogleProfile) {
                return {
                    // ...profile,
                    name: profile.name,
                    role: profile.role ?? "user",
                    id: profile.sub.toString(),
                    image: profile.picture,
                    email: profile.email
                }
            },
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            // console.log("User: " + JSON.stringify(user))
            // console.log("JWT: " + JSON.stringify(token))
            if (user){
                token.role = user.role
            }
            return token
        },

        async session({session, token}) {
            if (session?.user){
                session.user.role = token.role
            }
            return session
        },
    }
}