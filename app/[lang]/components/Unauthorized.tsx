import Card from "@/app/[lang]/components/Card";
import GoHomeButton from "@/app/[lang]/components/GoHomeButton";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/dictionaries";

export default async function Unauthorized({lang, redirect}:{ lang: Locale, redirect: string }) {
    const dictionary = await getDictionary(lang);

    return (
        <Card>
            <div className='flex flex-col gap-2 items-center w-full h-full'>
                <span className='material-symbols-outlined text-9xl'>no_accounts</span>
                <h2 className='text-center font-black text-4xl'>{dictionary.errors.unauthorized}</h2>
                <div className='flex flex-row gap-2'>
                    <GoHomeButton redirect={'/' + lang + redirect} btnLocale={dictionary.common.goHome}/>
                </div>
            </div>
        </Card>
    )
}