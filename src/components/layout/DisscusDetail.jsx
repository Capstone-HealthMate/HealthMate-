import { format } from "date-fns";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaRegCommentAlt } from "react-icons/fa"; // Import icons
import baseUrl from "../../utils/config";

export default function DisscusDetail({ detailDisscus }) {
  const [isLiked, setIsLiked] = useState(false);
  const [like, setLike] = useState(0);

  const {
    id,
    User,
    likeCount,
    commentCount,
    content,
    isLikedByCurrentUser,
    createdAt,
  } = detailDisscus;

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

  return (
    <>
    <div id={id} className="flex flex-col items-start justify-start gap-4 py-6">
      {/* Image */}
      <div className="flex items-center gap-3">
        <img
          className="w-12 h-12 rounded-full"
          src="https://api.dicebear.com/8.x/pixel-art/svg"
          alt={`avatar-${User.username}`}
        />
        <div className="flex flex-col items-start">
          <p className="text-lg font-semibold text-gray-900">{User.username}</p>
          <p className="text-xs text-gray-500">
            {format(new Date(createdAt), "dd/mm/yy hh:mm")}
          </p>
          <p className="text-sm text-gray-500">Anggota</p>
        </div>
      </div>
      {/* Body */}
      <p className="text-lg text-left">{content}</p>

      <div className="flex gap-3">
        {/* Like */}
        <div className="flex items-center gap-1">
          <button type="button" aria-label="like" onClick={handleLikeClick}>
            {isLiked ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart />}
          </button>
          {like}
        </div>
        {/* Comment */}
        <div className="flex items-center gap-1">
          <button type="button" aria-label="comment">
            <FaRegCommentAlt />
          </button>
          {commentCount}
        </div>
      </div>
    </div>
    </>
  );
}
