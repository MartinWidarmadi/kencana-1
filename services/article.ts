import { Article } from "../types/article";

export async function fetchArticles(): Promise<Article[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await res.json();
  return articles;
}
