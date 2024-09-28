// components/ArticlesList.tsx
import { FC } from "react";
import { Article } from "../types/article";
import styles from "../styles/Articles.module.css";

interface ArticlesListProps {
  articles: Article[];
}

const ArticlesList: FC<ArticlesListProps> = ({ articles }) => {
  return (
    <ul className={styles.articleList}>
      {articles.map((article) => (
        <li key={article.id} className={styles.article}>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default ArticlesList;
