import Card from "@/components/Card";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/dictionaries";
import Markdown from "react-markdown";

type Article = {
  title: string;
  date: string;
  content: string;
}

const NEWS: Article[] = [
  {
    title: "Ajándékosztás a Kreastolnál",
    date: "Valamikor a napokban",
    content: `
## Köszönjük az idei együtt töltött időt❤️

Mindenkinek **köszönjük**, hogy velünk töltöttétek sok szombat délelőttöt és hétköznapok délutánját. 

Öröm volt veletek együtt kézimunkázni és bulizni🎉. Reméljük sok élménnyel gazdagodtatok!
De nincs még vége, az év utolsó hetében is lehetőségetek lesz kicsit kikapcsolódni és kézimunkázni!

Eljött az idei utolsó hét is a Kreastolban, az alkalmak a következő időpontokban lesznek megtartva:
 - Péntek 10:00-12:00
 - Péntek 16:00-18:00

## Tervek a következő évre
 
Január 5-ikén már újra találkozunk a megszokott helyen délelőtt 10-től 12-ig és 16-tól 18-ig egy élvezetes évnyitó alkalmon!

## Összefoglalás

### Jövőbeli alkalmak

 - 2023 Dec 29., Péntek 10:00-12:00
 - 2023 Dec 29., Péntek 16:00-18:00
 - 2024 Jan 5., Péntek 10:00-12:00
 - 2024 Jan 5., Péntek 16:00-18:00
`
  }
]

export default async function Index({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)
  return (
    <>
      <Markdown>{NEWS[0].content}</Markdown>
    </>
  )
}
