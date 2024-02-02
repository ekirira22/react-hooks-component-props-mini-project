import React from "react";
import Article from "./Article";

export default function ArticleList({articles}){
    const postsArticles = articles.map(article => {
        return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} time={article.minutes}/>
    })

    return (
        <main>
            {
                postsArticles
            }
        </main>
    )
}