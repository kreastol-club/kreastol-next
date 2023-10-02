import Card from "@/app/[lang]/components/Card";
import {Locale} from "@/i18n.config";
import React from "react";
import EventPaginator from "@/app/[lang]/events/components/Paginator";
import {getDictionary} from "@/dictionaries";


export default async function EventLayout({children, params}: {
    children: React.ReactNode
    params: { lang: Locale }
}) {
    const dictionary = await getDictionary(params.lang);
    return (
        <Card>
            <div className='flex flex-col w-full'>
                <h2 className='text-lg my-4'>{dictionary.eventsPage.events}</h2>
                <EventPaginator params={params} res={dictionary.eventsPage}/>
                {children}
            </div>
        </Card>
    )
}