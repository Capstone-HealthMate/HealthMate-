// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import baseUrl from "../../utils/config";

const ArticleDetail = ({ detailArticle }) => {
  if (!detailArticle) return <p>Article not found</p>;

  const { id, title, content, image, time, category } = detailArticle;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-left">Recipe</h2>
        <img
          src={`${baseUrl}/uploads/${image}`}
          alt="Article"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-left">{title}</h1>
      <p className="text-gray-700 leading-relaxed mb-4 text-justify">
        {content}
      </p>
      <div className="mt-8 text-left">
        <Link to="/article" className="text-blue-600 hover:underline">
          ← Read Another News
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetail;
