import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  FaUtensils,
  FaAppleAlt,
  FaDumbbell,
  FaBrain,
  FaHeartbeat,
  FaHeart,
  FaUsers,
  FaLeaf,
  FaLightbulb,
  FaNewspaper,
  FaStar,
  FaGlobe,
} from "react-icons/fa";
import baseUrl from "../../utils/config";

const categoryIcons = {
  food: <FaUtensils className="text-gray-600 text-lg" />,
  diet: <FaAppleAlt className="text-gray-600 text-lg" />,
  fitness: <FaDumbbell className="text-gray-600 text-lg" />,
  "mental health": <FaBrain className="text-gray-600 text-lg" />,
  medical: <FaHeartbeat className="text-gray-600 text-lg" />,
  lifestyle: <FaHeart className="text-gray-600 text-lg" />,
  "family health": <FaUsers className="text-gray-600 text-lg" />,
  natural: <FaLeaf className="text-gray-600 text-lg" />,
  tips: <FaLightbulb className="text-gray-600 text-lg" />,
  news: <FaNewspaper className="text-gray-600 text-lg" />,
  reviews: <FaStar className="text-gray-600 text-lg" />,
  default: <FaGlobe className="text-gray-600 text-lg" />,
};

const ArticleItem = ({ id, title, image, category }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);

  return (
    <div className="bg-white rounded-lg border overflow-hidden transform transition-all hover:scale-105">
      <div className="relative">
        <img
          src={`${baseUrl}/uploads/${image}`}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={toggleLike}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          {liked ? (
            <AiFillHeart className="text-red-500 text-xl" />
          ) : (
            <AiOutlineHeart className="text-gray-600 text-xl" />
          )}
        </button>
      </div>
      <Link to={`/article/${id}`} className="block p-4">
        <h2 className="text-xl font-semibold text-gray-900 truncate">
          {title}
        </h2>
        <div className="flex items-center gap-2 text-gray-600 mt-2">
          {categoryIcons[category.toLowerCase()] || categoryIcons.default}
          <span className="text-sm font-medium">{category}</span>
        </div>
      </Link>
    </div>
  );
};

export default ArticleItem;
