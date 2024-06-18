import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { FaUtensils, FaAppleAlt, FaDumbbell, FaBrain, FaHeartbeat, FaHeart, FaUsers, FaLeaf, FaLightbulb, FaNewspaper, FaStar, FaGlobe } from "react-icons/fa";import baseUrl from "../../utils/config";

const ArticleItem = ({ id, title, image, category }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

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
    <div className="border rounded-xl overflow-hidden shadow-lg h-full flex flex-col relative">
      <img
        src={`${baseUrl}/uploads/${image}`}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-0 right-0 mt-3 mr-3">
        <div className="relative inline-block">
          <div className="absolute top-0 right-0 rounded-full bg-white p-2">
            {liked ? (
              <AiFillHeart
                onClick={toggleLike}
                className="text-red-500 cursor-pointer"
              />
            ) : (
              <AiOutlineHeart onClick={toggleLike} className="cursor-pointer" />
            )}
          </div>
        </div>
      </div>
      <Link to={`/article/${id}`} className="block h-full relative">
        <div className="p-4 flex-grow flex flex-col">
          <h2 className="text-xl font-semibold mb-2 flex-grow">{title}</h2>
          <div className="time-category-wrapper absolute bottom-0 left-0 w-full flex justify-around items-center text-gray-600">
            <div className="flex items-center pl-4">
            {getCategoryIcon(category)}
            <span>{category}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleItem;
