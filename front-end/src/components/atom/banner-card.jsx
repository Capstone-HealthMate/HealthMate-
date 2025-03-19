import React from "react";
import { Link } from "react-router-dom";
import baseUrl from "../../utils/config";
import Avatar from "./Avatar";
import Button from "./button";
import Paragraph from "./paragraph";

export default function BannerCard({ id, title, content, image, category, User }) {
  // Truncate content to 100 characters
  const truncatedContent =
    content.length > 100 ? content.substring(0, 100) + "..." : content;

  // Filter hanya untuk kategori Food
  if (category !== "food") return null;

  // Format nama user agar huruf awal besar
  const formattedUsername = User.username
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="relative flex flex-shrink-0 overflow-hidden rounded-2xl w-[735px] border bg-white transition-all duration-300">
      {/* Left Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white px-6 py-6 rounded-l-2xl">
        {/* Category Label */}
        <div className="w-full max-w-fit flex items-center gap-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
          <img
            src="/recipe-icon.png"
            alt="Recipe Icon"
            className="w-full max-w-4"
          />
          <span>Hot Recipes</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mt-4 leading-tight">
          {title}
        </h1>

        {/* Content */}
        <Paragraph className="mt-3 text-sm lg:text-base text-gray-600">
          <div dangerouslySetInnerHTML={{ __html: truncatedContent }} />
        </Paragraph>

        {/* User Info */}
        <div className="flex items-center gap-3 mt-8">
          <Avatar name={formattedUsername} />
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-900">
              {formattedUsername}
            </label>
            <span className="text-xs text-gray-500">15 March 2022</span>
          </div>

          {/* Button */}
          <Link to={`/article/${id}`} className="ml-auto">
            <Button className="btn bg-gradient-to-r from-blue-400 to-blue-600">
              View Recipe
              <img
                src="/arrow-right.svg"
                alt="Arrow"
                className="w-full max-w-2 opacity-80"
              />
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="flex justify-center h-full rounded-r-2xl overflow-hidden">
        <img
          src={`${baseUrl}/uploads/${image}`}
          alt="Recipe"
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}
