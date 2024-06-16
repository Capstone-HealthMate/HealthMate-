import React from "react";
import { Link } from "react-router-dom";
import baseUrl from "../../utils/config";
import { FaUtensils, FaAppleAlt, FaDumbbell, FaBrain, FaHeartbeat, FaHeart, FaUsers, FaLeaf, FaLightbulb, FaNewspaper, FaStar, FaGlobe } from "react-icons/fa";

const ArticleDetail = ({ detailArticle }) => {
  const formatDate = (dateString) => {
    // Implement your date formatting logic here
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (!detailArticle) return <p>Article not found</p>;

  const { id, title, content, image, category, createdAt } = detailArticle;

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'food':
        return <FaUtensils className="mr-1" />;
      case 'diet':
        return <FaAppleAlt className="mr-1" />;
      case 'fitness':
        return <FaDumbbell className="mr-1" />;
      case 'mental health':
        return <FaBrain className="mr-1" />;
      case 'medical':
        return <FaHeartbeat className="mr-1" />;
      case 'lifestyle':
        return <FaHeart className="mr-1" />;
      case 'family health':
        return <FaUsers className="mr-1" />;
      case 'natural':
        return <FaLeaf className="mr-1" />;
      case 'tips':
        return <FaLightbulb className="mr-1" />;
      case 'news':
        return <FaNewspaper className="mr-1" />;
      case 'reviews':
        return <FaStar className="mr-1" />;
      default:
        return <FaGlobe className="mr-1" />; // General icon
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-left">HealthMate Article</h2>
        <div className="flex items-center mb-4">
          <div className="mr-2">{getCategoryIcon(category)}</div>
          <span className="text-gray-600 text-sm">{category}</span>
        </div>
        <img
          src={`${baseUrl}/uploads/${image}`}
          alt="Article"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-left">{title}</h1>
      <p className="text-gray-700 leading-relaxed mb-4 text-justify" dangerouslySetInnerHTML={{ __html: content }} />
      <div className="mt-8 text-left">
        <span className="text-gray-600 text-sm mr-4">{formatDate(createdAt)}</span>
        <br/>
        <Link to="/article" className="text-blue-600 hover:underline">
          ← Read Another News
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetail;
