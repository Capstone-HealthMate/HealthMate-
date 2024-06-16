import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineClockCircle,
  AiOutlineRest,
} from "react-icons/ai";
import baseUrl from "../../utils/config";

const ArticleItem = ({ id, title, image, time, category }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
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
            <div className="flex items-center">
              <AiOutlineClockCircle className="mr-1" />
              <span>{time}</span>
            </div>
            <div className="flex items-center pl-4">
              <AiOutlineRest className="mr-1" />
              <span>{category}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleItem;
