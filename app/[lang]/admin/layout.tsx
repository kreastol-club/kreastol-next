import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {AuthRequiredError} from "@/lib/exceptions";
import React from "react";
import Card from "@/app/[lang]/components/Card";

export default async function AdminPage({children}: {children: React.ReactNode}) {
    const session = await getServerSession(authOptions);
    if(session?.user.isAdmin){
        return <Card>{children}</Card>
    }
    else{
        throw new AuthRequiredError();
    }
}