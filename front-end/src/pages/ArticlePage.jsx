import React, { useState, useEffect } from "react";
import Navbar from "../components/atom/Navbar";
import Footer from "../components/atom/Footer";
import ArticleList from "../components/layout/ArticleList";
import MainArticle from "../components/atom/MainArticle";
import baseUrl from "../utils/config";

function ArticlePage() {
  const [articles, setArticles] = useState([]);
  const [user, setUser] = useState(null);

  const getArticles = async () => {
    const response = await fetch(`${baseUrl}/articles`, {
      method: "GET",
      credentials: "include",
    });

    const parsed = await response.json();
    setArticles(parsed);
  };

  const auth = async () => {
    const response = await fetch(`${baseUrl}/auth`, {
      method: "GET",
      credentials: "include",
    });
    const parsed = await response.json();
    setUser(parsed);
  };

  useEffect(() => {
    auth();
    getArticles();
  }, []);

  return (
    <>
      <Navbar />
      <section className="ArticlePage px-4 py-8">
        {articles.length > 0 && (
          <>
            <MainArticle
              title={articles[0].title}
              content={articles[0].content}
              image={articles[0].image}
            />
            <ArticleList articles={articles.slice(1)} />
          </>
        )}
        {user && (
          <button
            disabled={!user.authenticated}
            className="w-full mb-4 mt-4 py-2 px-4 bg-gray-900 text-white rounded hover:bg-gray-700 disabled:bg-gray-400"
            onClick={() => (window.location.href = "/article/add")}
          >
            Add Article +
          </button>
        )}
      </section>
      <Footer />
    </>
  );
}

export default ArticlePage;
