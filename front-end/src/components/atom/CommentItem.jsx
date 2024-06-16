import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { FaRegCommentAlt } from "react-icons/fa";
import { useNavigate } from 'react-router';

export default function CommentItem({
    id,
    owner,
    likeDisscus,
    content,
    upVotesBy = [],
    authUser,
    createdAt,
    like
}) {
    const [isLiked, setIsLiked] = useState(true);
    const navigate = useNavigate()
    const handleLikeClick = () => {
        if (isLiked) {
            neutralComment(id);
        } else {
            likeDisscus(id);
        }
        setIsLiked(!isLiked);
    };

    return (
        <>

            <div className="flex flex-col items-start justify-start gap-2 py-6">
                {/* image */}
                <div className="flex items-center gap-3">
                    <img
                        className="w-8 h-8 rounded-full"
                        src={owner.avatar}
                        alt={`avatar-${owner.name}`}
                    />
                    <div className='flex flex-col items-start '>
                        <p className="text-base font-semibold text-gray-900">
                            {owner.name}
                        </p>
                        <p className="text-sm text-gray-500">
                            Anggota
                        </p>
                    </div>
                </div>
                {/* body */}
                <p className='text-base text-left'>{content}</p>

                <div className="flex gap-3  ">

                    {/* like */}
                    <div className="flex items-center gap-1">

                        <button type="button" aria-label="like" onClick={handleLikeClick}>
                            {isLiked ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
                        </button>
                        {' '}
                        {upVotesBy.length}

                    </div>
                </div>

            </div>
        </>
    );
}
