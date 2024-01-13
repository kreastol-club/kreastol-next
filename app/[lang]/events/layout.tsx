import Card from "@/components/Card";
import { Locale } from "@/i18n.config";
import React from "react";
import { getDictionary } from "@/dictionaries";


export default async function EventLayout({ children, params }: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <Card>
      <div className='flex flex-col w-full'>
        <h2 className='text-lg my-4'>{dictionary.eventsPage.events}</h2>
        {children}
      </div>
    </Card>
  )
}
