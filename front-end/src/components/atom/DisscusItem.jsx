import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart, FaRegCommentAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import baseUrl from "../../utils/config";

export default function DiscussItem({
  id,
  owner,
  likeCount,
  content,
  upVotesBy = [],
  authUser,
}) {
  const isLikedByCurrentUser = upVotesBy.includes(authUser);
  const [isLiked, setIsLiked] = useState(isLikedByCurrentUser);
  const [like, setLike] = useState(likeCount);
  const [commentCount, setCommentCount] = useState(0);

  const navigate = useNavigate();

  const handleLikeClick = async () => {
    await fetch(`${baseUrl}/likes/${id}`, {
      method: "POST",
      credentials: "include",
    });
    setIsLiked(!isLiked);
    setLike(isLiked ? like - 1 : like + 1);
  };

  const fetchCommentCount = async () => {
    const response = await fetch(`${baseUrl}/comments/${id}`, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    setCommentCount(data.length);
  };

  useEffect(() => {
    fetchCommentCount();
  }, []);

  return (
    <div
      className="bg-white border rounded-lg p-5 w-full cursor-pointer transition hover:bg-gray-50"
      onClick={() => navigate(`/discuss/${id}`)}
    >
      <div className="flex items-center gap-3">
        <Avatar name={owner} />
        <div>
          <p className="text-md font-semibold text-gray-900">{owner}</p>
          <p className="text-sm text-gray-500">Anggota</p>
        </div>
      </div>

      <p className="text-gray-800 mt-4">{content}</p>

      <div className="flex gap-5 mt-4 text-gray-600">
        <button onClick={handleLikeClick} className="flex items-center gap-1">
          {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          {like}
        </button>
        <div className="flex items-center gap-1">
          <FaRegCommentAlt />
          {commentCount}
        </div>
      </div>
    </div>
  );
}
