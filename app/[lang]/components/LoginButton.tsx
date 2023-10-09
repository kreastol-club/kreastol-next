'use client'

import {signIn, signOut, useSession} from "next-auth/react";

type Locales = {
    signIn: string;
    signOut: string;
}

export default function LoginButton({btnContents} : {btnContents: Locales}) {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                <button className="mx-1 btn" onClick={() => signOut()}>{btnContents.signOut}</button>
            </>
        )
    }
    return (
        <>
            <button className="mx-1 btn" onClick={() => signIn()}>{btnContents.signIn}</button>
        </>
    )
}
