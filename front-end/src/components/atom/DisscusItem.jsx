import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { FaRegCommentAlt } from "react-icons/fa";
import { useNavigate } from 'react-router';

export default function DiscussItem({
    id,
    owner,
    likeDisscus,
    content,
    upVotesBy = [],
    authUser,
    totalDisscus,
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

    const handleDetailClick = () =>{
        navigate(`/disscus/${id}`)
    }

    return (
        <>

            <div className="flex flex-col items-start justify-start gap-4 py-6 cursor-pointer" onClick={handleDetailClick}>
                {/* image */}
                <div className="flex items-center gap-3">
                    <img
                        className="w-12 h-12 rounded-full"
                        src={owner.avatar}
                        alt={`avatar-${owner.name}`}
                    />
                    <div className='flex flex-col items-start '>
                        <p className="text-lg font-semibold text-gray-900">
                            {owner.name}
                        </p>
                        <p className="text-sm text-gray-500">
                            Anggota
                        </p>
                    </div>
                </div>
                {/* body */}
                <p className='text-lg text-left'>{content}</p>

                <div className="flex gap-3  ">

                    {/* like */}
                    <div className="flex items-center gap-1">

                        <button type="button" aria-label="like" onClick={handleLikeClick}>
                            {isLiked ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
                        </button>
                        {' '}
                        {upVotesBy.length}

                    </div>
                    {/* commnet */}
                    <div className="flex items-center gap-1">

                        <button type="button" aria-label="comment">
                            <FaRegCommentAlt />
                        </button>
                        {totalDisscus}

                    </div>
                </div>

            </div>
        </>
    );
}
