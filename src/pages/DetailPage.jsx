import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/atom/Navbar';
import Footer from '../components/atom/Footer';
import ArticleDetail from "../components/layout/ArticleDetail";
import baseUrl from '../utils/config';

function DetailPage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  console.log(id);

  const getArticleById = async () => {
      const response = await fetch(`${baseUrl}/articles/${id}`, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error('Failed to fetch article');
      }

      const parsed = await response.json();
      setArticle(parsed);  };

  useEffect(() => {
    getArticleById();
  }, [id]);

  return (
    <section className="ArticlePage">
      <Navbar />
      {article && <ArticleDetail detailArticle={article} />}
      <Footer />
    </section>
  );
}

export default DetailPage;
