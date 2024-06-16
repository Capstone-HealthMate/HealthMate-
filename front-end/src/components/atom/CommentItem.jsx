import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart, FaRegCommentAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import Avatar from "./Avatar";

export default function CommentItem({
  id,
  owner,
  likeDisscus,
  neutralComment,
  content,
  upVotesBy = [],
  authUser,
  createdAt,
  like,
}) {
  // Check if the comment is liked by the current authenticated user
  const isLikedByCurrentUser = upVotesBy.includes(authUser);
  const [isLiked, setIsLiked] = useState(isLikedByCurrentUser);

  useEffect(() => {
    setIsLiked(isLikedByCurrentUser);
  }, [isLikedByCurrentUser]);

  const handleLikeClick = () => {
    if (isLiked) {
      neutralComment(id);
    } else {
      likeDisscus(id);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex flex-col items-start justify-start gap-2 py-6">
      {/* image */}
      <div className="flex items-center gap-3">
        <Avatar name={owner} />
        <div className="flex flex-col items-start ">
          <p className="text-base font-semibold text-gray-900">
            {owner}
          </p>
          <p className="text-sm text-gray-500">Anggota</p>
        </div>
      </div>
      {/* body */}
      <p className="text-base text-left">{content}</p>

      <div className="flex gap-3  ">
        {/* like */}
        <div className="flex items-center gap-1">
          <button type="button" aria-label="like" onClick={handleLikeClick}>
            {isLiked ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart />}
          </button>{" "}
          {upVotesBy.length}
        </div>
      </div>
    </div>
  );
}
