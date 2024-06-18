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
  if (category !== "food") {
    return null; // Mengembalikan null jika kategori bukan Food
  }

  return (
    <div className="overflow-hidden flex-shrink-0 rounded-xl w-[735px] grid grid-cols-2 relative">
      <img
        src="/badge.svg"
        alt=""
        className="absolute -translate-x-1/2 top-5 left-1/2"
      />
      <div className="bg-gradient-to-b from-[#D8ECFF] to-[#9BCFFD] px-5 py-4 grid-cols-1">
        <div className="flex items-center gap-2 px-2 bg-white rounded-full w-fit">
          <img src="/recipe-icon.png" alt="" className="w-[10px]" />
          <span>Hot Recipes</span>
        </div>
        <h1 className="text-2xl font-bold text-black mt-[10px]">{title}</h1>
        <Paragraph className="mt-[10px] text-sm lg:text-lg">
          <div dangerouslySetInnerHTML={{ __html: truncatedContent }} />
        </Paragraph>
        <div className="flex items-center w-full gap-2 mt-11">
          <Avatar name={User.username} />
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-black">
              {User.username}
            </label>
            <span className="text-xs text-primary">15 March 2022</span>
          </div>
          <Link to={`/article/${id}`}>
            <Button className="gap-2 px-4 py-3 ml-auto font-normal w-fit bg-black text-white">
              View Recipes <img src="/arrow-right.svg" alt="" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center h-full">
        <img
          src={`${baseUrl}/uploads/${image}`}
          alt=""
          className="object-cover w-full"
        />
      </div>
    </div>
  );
}
