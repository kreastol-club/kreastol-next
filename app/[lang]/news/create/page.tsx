'use client';
import ReactMarkdown from 'react-markdown';
import React, {useState} from "react";

const content = '# Hello, *world*!\nhis is a **complicated** *simple* example.\n## Second level heading\n> A block quote with _strikethrough_ and a URL: [https://reactjs.org](https://reactjs.org).';


export default function CreateNews() {
    const [rawNews, setRawNews] = useState(content)
    const [news, setNews] = useState(content.replace(/\n/gi, "\n&nbsp;  \n"))

    function onChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setNews(event.target.value.replace(/\n/gi, "\n&nbsp;  \n"));
        setRawNews(event.target.value);
    }

    return (
        <>
            <h1>Create News</h1>

            Editor: <br/>
            <textarea onChange={onChange} className={"w-full h-60"} value={rawNews}/>
            <br/>
            <br/>

            Preview: <br/>
            <ReactMarkdown>{news}</ReactMarkdown>
        </>
    );
}