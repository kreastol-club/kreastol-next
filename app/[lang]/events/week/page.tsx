import React from 'react';
import {WeekCalendar} from "@/app/[lang]/components/calendar/WeekCalendar";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/dictionaries";
import Note from "@/app/[lang]/components/Note";

export default async function Week({params}: { params: { lang: Locale } }) {
    const dictionary = await getDictionary(params.lang);

    return (
        <div>
            <Note noteLocale={dictionary.common.note}>{dictionary.eventsPage.layout.week.underDev}</Note>
            <WeekCalendar/>
        </div>
    );
}
