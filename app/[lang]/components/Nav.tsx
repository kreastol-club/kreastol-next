import Link from 'next/link';
import React from 'react'
import LanguageSwitcher, {Resources} from "@/app/[lang]/components/LanguageSwitcher";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/dictionaries";

export default async function Nav({params: {lang}}: {
    params: { lang: Locale }
}) {
    const dictionary = await getDictionary(lang)
    const res: Resources = {dropdownTitle: dictionary.navBar.lang}

    return (
        <>
            <div className="w-full sm:flex flex-row sm:items-center relative my-1">
                <div className="max-sm:relative  max-sm:mb-2 align-middle">
                    <h2 className='unique_header text-4xl flex'>Kreastol</h2>
                    <span
                        className="badge badge-primary badge-outline absolute right-2 top-1/2 transform -translate-y-1/2">preview</span>
                </div>
                <div className='w-full flex flex-1 justify-center items-center'>
                    <Link key={'home'} className="mx-1 btn" href={`/${lang}/`}>{dictionary.navBar.home}</Link>
                    <Link key={'events'} className="mx-1 btn" href={`/${lang}/events`}>{dictionary.navBar.events}</Link>
                    <Link key={'about'} className="mx-1 btn" href={`/${lang}/about`}>{dictionary.navBar.about}</Link>
                </div>
                <LanguageSwitcher res={res}/>
            </div>
        </>
    )
}