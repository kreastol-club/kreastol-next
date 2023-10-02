import React from "react";
import {Locale} from "@/i18n.config";
import getConfig from "next/config";
import Nav from "@/app/[lang]/components/Nav";
import Card from "@/app/[lang]/components/Card";
import Link from "next/link";

export default function EventLayout({children, params}: {
    children: React.ReactNode
    params: { lang: Locale }
}) {

    return (
        <Card>
            <div className='flex flex-col w-full'>
                <h2>Kreastol Events</h2>
                <Link href={`/events/week-calendar`}>Week View</Link>
                <Link href={`/events`}>Summary</Link>
                {children}
            </div>
        </Card>
    )
}