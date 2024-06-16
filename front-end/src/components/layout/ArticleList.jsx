// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ArticleItem from "../atom/ArticleItem";

const ArticleList = ({ articles }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredArticles = selectedCategory === "all" ? articles : articles.filter(article => article.category.toLowerCase() === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-6">
        <button
          onClick={() => handleCategoryChange("all")}
          className={`mx-2 px-4 py-2 rounded-full border border-gray-300 ${selectedCategory === "all" ? "bg-gray-300" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryChange("food")}
          className={`mx-2 px-4 py-2 rounded-full border border-gray-300 ${selectedCategory === "food" ? "bg-gray-300" : ""}`}
        >
          Food
        </button>
        <button
          onClick={() => handleCategoryChange("diet")}
          className={`mx-2 px-4 py-2 rounded-full border border-gray-300 ${selectedCategory === "diet" ? "bg-gray-300" : ""}`}
        >
          Diet
        </button>
        <button
          onClick={() => handleCategoryChange("mental health")}
          className={`mx-2 px-4 py-2 rounded-full border border-gray-300 ${selectedCategory === "mental health" ? "bg-gray-300" : ""}`}
        >
          Mental Health
        </button>
        <button
          onClick={() => handleCategoryChange("medical")}
          className={`mx-2 px-4 py-2 rounded-full border border-gray-300 ${selectedCategory === "medical" ? "bg-gray-300" : ""}`}
        >
          Medical
        </button>
        <button
          onClick={() => handleCategoryChange("lifestyle")}
          className={`mx-2 px-4 py-2 rounded-full border border-gray-300 ${selectedCategory === "lifestyle" ? "bg-gray-300" : ""}`}
        >
          Lifestyle
        </button>
        <button
          onClick={() => handleCategoryChange("family health")}
          className={`mx-2 px-4 py-2 rounded-full border border-gray-300 ${selectedCategory === "family health" ? "bg-gray-300" : ""}`}
        >
          Family Health
        </button>
        <button
          onClick={() => handleCategoryChange("natural")}
          className={`mx-2 px-4 py-2 rounded-full border border-gray-300 ${selectedCategory === "natural" ? "bg-gray-300" : ""}`}
        >
          Natural
        </button>
        <button
          onClick={() => handleCategoryChange("tips")}
          className={`mx-2 px-4 py-2 rounded-full border border-gray-300 ${selectedCategory === "tips" ? "bg-gray-300" : ""}`}
        >
          Tips
        </button>
        <button
          onClick={() => handleCategoryChange("news")}
          className={`mx-2 px-4 py-2 rounded-full border border-gray-300 ${selectedCategory === "news" ? "bg-gray-300" : ""}`}
        >
          News
        </button>
        <button
          onClick={() => handleCategoryChange("reviews")}
          className={`mx-2 px-4 py-2 rounded-full border border-gray-300 ${selectedCategory === "reviews" ? "bg-gray-300" : ""}`}
        >
          Reviews
        </button>
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
