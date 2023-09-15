import React, { useState } from 'react';

const CommentButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className=" inline-block">
            <button
                className={`flex justify-center items-center ${isHovered
                    ? ' hover:bg-blue-100'
                    : 'bg-transparent '
                    } text-white h-8 w-8 rounded-full transition-all`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => alert('Button Clicked')}
            >
                {isHovered ? (
                    <img
                        src="./public/img/profile/icon-comment-hover.png"
                        alt=""
                        className="h-3.5 w-3.5"
                    />
                ) : (
                    <img
                        src="./public/img/profile/icon-comment.png"
                        alt=""
                        className="h-3.5 w-3.5"
                    />
                )}
            </button>
        </div>
    );
};

export default CommentButton;
