// eslint-disable-next-line no-unused-vars
import React from "react";
import ArticleItem from "../atom/ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {articles.map((article) => (
          <ArticleItem {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
