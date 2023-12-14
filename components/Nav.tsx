import Link from 'next/link';
import React from 'react'
import LanguageSwitcher, {Resources} from "@/components/LanguageSwitcher";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/dictionaries";
import UserCard from "@/components/UserCard";
import LoginButton from "@/components/LoginButton";

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
                </div>
                <div className='w-full flex flex-1 justify-center items-center'>
                    <Link key={'home'} className="mx-1 btn" href={`/${lang}/`}>{dictionary.navBar.home}</Link>
                    <Link key={'events'} className="mx-1 btn" href={`/${lang}/events`}>{dictionary.navBar.events}</Link>
                    <Link key={'about'} className="mx-1 btn" href={`/${lang}/about`}>{dictionary.navBar.about}</Link>
                    <Link key={'products'} className="mx-1 btn" href={`/${lang}/products`}>Products</Link>
                    <Link key={'services'} className="mx-1 btn" href={`/${lang}/services`}>Services</Link>
                </div>
                <LoginButton btnContents={{signIn: dictionary.navBar.signIn, signOut: dictionary.navBar.signOut}} />
                <LanguageSwitcher res={res}/>
            </div>
        </>
    )
}