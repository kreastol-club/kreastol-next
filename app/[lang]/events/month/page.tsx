import React from 'react';
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/dictionaries";
import Note from "@/components/Note";


export default async function Month({params}: { params: { lang: Locale } }) {
    const dictionary = await getDictionary(params.lang);
    return (
        <Note noteLocale={dictionary.common.note}>{dictionary.eventsPage.layout.month.underDev}</Note>
    );
}
