// pages/index.tsx
import { GetStaticProps } from "next";
import { Article } from "../types/article";
import { fetchArticles } from "@/services/article";
import styles from "../styles/Articles.module.css";
import ArticlesList from "@/components/ArticlesList";

interface HomeProps {
  articles: Article[];
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetchArticles();

  return {
    props: {
      articles,
    },
  };
};

const Home: React.FC<HomeProps> = ({ articles }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Daftar Artikel</h1>
      <ArticlesList articles={articles} />
    </div>
  );
};

export default Home;
