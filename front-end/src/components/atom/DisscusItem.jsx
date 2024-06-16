import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart, FaRegCommentAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import Avatar from "./Avatar";
import baseUrl from "../../utils/config";

export default function DiscussItem({
  id,
  owner,
  likeCount,
  commentCount,
  content,
  upVotesBy = [],
  authUser,
  totalDisscus,
  createdAt,
}) {
  // Check if the discussion is liked by the current authenticated user
  const isLikedByCurrentUser = upVotesBy.includes(authUser);
  const [isLiked, setIsLiked] = useState(false);
  const [like, setLike] = useState(0);

  const navigate = useNavigate();

  const handleLikeClick = async () => {
    await fetch(`${baseUrl}/likes/${id}`, {
      method: "POST",
      credentials: "include",
    });
    setIsLiked(true);
    setLike(like + 1);
  };

  useEffect(() => {
    if (likeCount) {
      setLike(likeCount);
    }
  }, [likeCount]);

  useEffect(() => {
    if (isLikedByCurrentUser === 1) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [isLikedByCurrentUser]);

  const handleDetailClick = () => {
    navigate(`/discuss/${id}`);
  };

  return (
    <div
      className="flex flex-col items-start justify-start gap-4 py-6 cursor-pointer"
      onClick={handleDetailClick}
    >
      {/* image */}
      <div className="flex items-center gap-3">
        <Avatar name={owner} />
        <div className="flex flex-col items-start ">
          <p className="text-lg font-semibold text-gray-900">{owner}</p>
          <p className="text-sm text-gray-500">Anggota</p>
        </div>
      </div>
      {/* body */}
      <p className="text-lg text-left">{content}</p>

      <div className="flex gap-3">
        {/* like */}
        <div className="flex items-center gap-1">
          <button type="button" aria-label="like" onClick={handleLikeClick}>
            {isLiked ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart />}
          </button>
          {like}
        </div>
        {/* comment */}
        <div className="flex items-center gap-1">
          <button type="button" aria-label="comment">
            <FaRegCommentAlt />
          </button>
          {commentCount}
        </div>
      </div>
    </div>
  );
}
