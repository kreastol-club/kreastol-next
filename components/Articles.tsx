import { Locale } from "@/i18n.config";
import Article, { ArticleType } from "./Article";

const getTime = (date?: Date) => {
  return date != null ? date.getTime() : 0;
}


const sortByDate = (articles: ArticleType[]): ArticleType[] => {
  const updated = articles.slice();

  updated.sort((a: ArticleType, b: ArticleType) => {
    return getTime(new Date(b.date)) - getTime(new Date(a.date));
  });

  return updated;
}

const NEWS: { 'en': ArticleType[], 'hu': ArticleType[] } = {
  'en': [
    {
      title: "Thank you for the time together ❤️ !",
      date: "2023-12-25 14:39:14",
      content: `
We **thank** everyone for spending many Saturday mornings and weekday afternoons with us.

It was a pleasure to crochet and party with you 🎉. We hope you have gained many experiences!
But it's not over yet; in the last week of the year, you will have the opportunity to relax and do handicrafts a little!

The last week of the year has come to Kreasto, and the events will be held at the following times:

- Friday 10:00-12:00
- Friday 16:00-18:00

### Plans for the Next Year

We will meet again on January 5th in the usual place from 10:00 am to 12:00 pm and from 4:00 pm to 6:00 pm for an enjoyable opening event!

### Summary
#### Future Events
- Dec 29, 2023, Friday 10:00-12:00
- Dec 29, 2023, Friday 16:00-18:00
- Jan 5, 2024, Friday 16:00-18:00
`
    },
  ],
  'hu': [
    {
      title: "Köszönjük az idei együtt töltött időt ❤️ !",
      date: "2023-12-25 14:39:14",
      content: `
Mindenkinek **köszönjük**, hogy velünk töltöttétek sok szombat délelőttöt és hétköznapok délutánját. 

Öröm volt veletek együtt kézimunkázni és bulizni🎉. Reméljük sok élménnyel gazdagodtatok!
De nincs még vége, az év utolsó hetében is lehetőségetek lesz kicsit kikapcsolódni és kézimunkázni!

Eljött az idei utolsó hét is a Kreastolban, az alkalmak a következő időpontokban lesznek megtartva:
 - Péntek 10:00-12:00
 - Péntek 16:00-18:00

### Tervek a következő évre
 
Január 5-ikén már újra találkozunk a megszokott helyen délelőtt 10-től 12-ig és 16-tól 18-ig egy élvezetes évnyitó alkalmon!

### Összefoglalás

#### Jövőbeli alkalmak

 - 2023 Dec 29., Péntek 10:00-12:00
 - 2023 Dec 29., Péntek 16:00-18:00
 - 2024 Jan 5., Péntek 16:00-18:00
`
    },
    {
      title: "Kreastol az iskolásoknak",
      date: "2024-01-04 19:25:34",
      content: `
## Értesrés

Változott a holnapi nap, részletek [itt láthatókak](https://kreastol-klub.org/hu/events)

### Délelőtt nincs

Holnap délelőtt (jan. 5.) az ovis korosztálynak elmarad az alkalom!

### Délután van

Az iskolás korosztálynak megmarad délutan 16:00tól
`
    }
  ]
}

export default function Articles({ lang }: { lang: Locale }) {
  return <div className={'flex flex-col space-y-2 h-full overflow-y-auto'}>
    {sortByDate(NEWS[lang]).map(a => <Article key={a.title} article={a} locale={lang} />)}
  </div>
}
