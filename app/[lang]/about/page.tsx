import Card from '@/app/[lang]/components/Card';
import React from 'react'
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/dictionaries";

async function About({params: {lang}}: {
    params: { lang: Locale }
}) {
    const dictionary = await getDictionary(lang);
    return (
        <div>
            <h2 className='text-center font-black'>{dictionary.aboutPage.header}</h2>
            <div className="flex flex-row w-full justify-evenly">
                <Card>
                    <h2>{dictionary.aboutPage.pros}</h2>
                </Card>
                <Card>
                    <h2>{dictionary.aboutPage.cons}</h2>
                </Card>
            </div>
        </div>
    )
}

export default About;