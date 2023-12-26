import Link from 'next/link';
import React from 'react'
import LanguageSwitcher, { Resources } from "@/components/LanguageSwitcher";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/dictionaries";
import LoginButton from "@/components/LoginButton";
import { ThemeChanger } from './theme-changer';
import LinkButton from './LinkButton';

export default async function Nav({ params: { lang } }: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  const res: Resources = { dropdownTitle: dictionary.navBar.lang }

  return (
    <>
      <div className="w-full sm:flex flex-row sm:items-center relative my-1">

        <div className="max-sm:relative  max-sm:mb-2 align-middle">
          <h2 className='unique_header text-4xl flex'>Kreastol</h2>
        </div>

        <div className='w-full flex flex-1 space-x-4 my-1 justify-center items-center'>
          <LinkButton key={'home'} href={`/${lang}/`}>{dictionary.navBar.home}</LinkButton>
          <LinkButton key={'events'} href={`/${lang}/events`}>{dictionary.navBar.events}</LinkButton>
        </div>

        <div className='w-full flex flex-1 space-x-4 my-1 justify-center items-center'>
          <ThemeChanger />
          <LoginButton btnContents={{ signIn: dictionary.navBar.signIn, signOut: dictionary.navBar.signOut }} />
          <LanguageSwitcher res={res} />
        </div>
      </div>
    </>
  )
}
