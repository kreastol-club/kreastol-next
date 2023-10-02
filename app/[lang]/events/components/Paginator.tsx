'use client'

import {Locale} from "@/i18n.config";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {EventsResources} from "@/app/[lang]/events/interfaces/resources.interfaces";


export default function EventPaginator({params, res}: { params: { lang: Locale }, res: EventsResources }) {
    const pathName = usePathname();
    const activeLink = (exp: string) => {
        if (pathName.endsWith('/')) {
            pathName.substring(0, pathName.length - 1);
        }

        if (exp.endsWith('/')) {
            exp.substring(0, exp.length - 1);
        }

        if(exp === '/') {
            exp = '';
        }

        console.log(`/${params.lang}/events${exp}`, pathName)
        return `/${params.lang}/events${exp}` === pathName ? "btn-active" : ""
    };

    return (
        <div className="join">
            <Link href={`/${params.lang}/events/`} className={"join-item btn " + activeLink(`/`)}>{res.paginator.list}</Link>
            <Link href={`/${params.lang}/events/week`} className={"join-item btn " + activeLink('/week')}>{res.paginator.week}</Link>
            <Link href={`/${params.lang}/events/month`} className={"join-item btn " + activeLink('/month')}>{res.paginator.month}</Link>
        </div>
    )
}