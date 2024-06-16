// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ArticleItem from "../atom/ArticleItem";

const ArticleList = ({ articles }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredArticles = selectedCategory === "all" ? articles : articles.filter(article => article.category.toLowerCase() === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-6">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
        >
          <option value="all">All</option>
          <option value="food">Food</option>
          <option value="diet">Diet</option>
          <option value="mental health">Mental Health</option>
          <option value="medical">Medical</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="family health">Family Health</option>
          <option value="natural">Natural</option>
          <option value="tips">Tips</option>
          <option value="news">News</option>
          <option value="reviews">Reviews</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {filteredArticles.map((article) => (
          <ArticleItem key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
