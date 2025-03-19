import React, { useState } from "react";
import ArticleItem from "../atom/ArticleItem";

const ArticleList = ({ articles }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter(
          (article) => article.category.toLowerCase() === selectedCategory
        );

  return (
    <div className="container mx-auto px-4">
      <div className="flex">
        {/* Header */}
        <div className="w-full flex justify-between items-end mb-6">
          <div className="text-center md:text-left">
            <h1 className="text-black text-4xl font-bold">
              Selamat datang di{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                HealthMate!
              </span>
            </h1>
            <p className="text-gray-700 text-lg mt-2 w-full max-w-3xl">
              Jelajahi berbagai resep sehat, kalkulator nutrisi, dan tips
              kesehatan untuk mendukung gaya hidup sehat Anda. Temukan inspirasi
              kuliner yang lezat dan menyehatkan di sini.
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <p className="font-semibold">Filter Category:</p>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="px-4 py-2 max-h-fit rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="all">All</option>
              <option value="food">Food</option>
              <option value="diet">Diet</option>
              <option value="fitness">Fitness</option>
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
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredArticles.map((article) => (
          <ArticleItem key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
