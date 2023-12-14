'use client'

import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {i18n} from '@/i18n.config';

export interface Resources {
    dropdownTitle: string;
}

export default function LanguageSwitcher({res}: {res: Resources}) {
    const pathName = usePathname()
    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }
    const dict = {
        en: "English",
        hu: "Magyar"
    }
    return (
        <details className="dropdown flex">
            <summary className="m-1 btn">{res.dropdownTitle}</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
                {i18n.locales.map((locale) => {
                    return (
                        <li key={locale}>
                            <Link href={redirectedPathName(locale)}>{dict[locale]}</Link>
                        </li>
                    )
                })}
            </ul>
        </details>
    )
}