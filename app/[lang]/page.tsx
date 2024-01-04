import { Locale } from "@/i18n.config";
import Articles from "@/components/Articles";

export default async function Index({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <>
      <Articles lang={lang} />
    </>
  )
}
