import Card from "@/app/[lang]/components/Card";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/dictionaries";

export default async function Index({params: {lang}}: {
    params: { lang: Locale }
}) {
    const dictionary = await getDictionary(lang)
    return (
        <Card>
            <h1>{dictionary.indexPage.hello}</h1>
        </Card>
    )
}
