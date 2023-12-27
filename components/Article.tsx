import Markdown from "react-markdown";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

function getFormattedDateString(date: string, locale: string) {
  return new Date(date).toLocaleString(locale, { year: "numeric", month: "numeric", weekday: "long", day: "numeric", hour: "numeric", minute: "numeric", })
}

export type ArticleType = {
  title: string;
  date: string;
  content: string;
}

export default function Article({ article, locale }: { article: ArticleType, locale: string }) {
  return <Card>
    <CardHeader>
      <CardTitle>{article.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <Markdown className={"markdown"}>{article.content}</Markdown>
    </CardContent>
    <CardFooter>
      <p>{getFormattedDateString(article.date, locale)}</p>
    </CardFooter>
  </Card>
}
