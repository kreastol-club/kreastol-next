'use client'

import {signIn, signOut, useSession} from "next-auth/react";

export default function LoginButton () {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                <button className="mx-1 btn" onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            <button className="mx-1 btn" onClick={() => signIn()}>Sign in</button>
        </>
    )
}
