import Markdown from "react-markdown";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";


export type ArticleType = {
  title: string;
  date: string;
  content: string;
}

export default function Article({ article }: { article: ArticleType }) {
  return <Card>
    <CardHeader>
      <CardTitle>{article.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <Markdown className={"markdown"}>{article.content}</Markdown>
    </CardContent>
    <CardFooter>
      <p>{article.date}</p>
    </CardFooter>
  </Card>
}
