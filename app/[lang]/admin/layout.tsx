import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {AuthRequiredError} from "@/lib/exceptions";
import React from "react";
import Card from "@/components/Card";
import Unauthorized from "@/components/Unauthorized";
import {Locale} from "@/i18n.config";

export default async function AdminPage({children, params}: {
    children: React.ReactNode
    params: { lang: Locale }
}) {

    const session = await getServerSession(authOptions);

    if (session?.user.isAdmin) {
        return <Card>{children}</Card>
    } else {
        return <Unauthorized lang={params.lang} redirect={'/'}/>
    }
}