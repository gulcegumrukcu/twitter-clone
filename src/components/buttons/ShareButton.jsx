import React, { useState } from 'react';

const ShareButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative inline-block">
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
                        src="../public/img/profile/icon-share-hover.png"
                        alt=""
                        className="h-4 w-4"
                    />
                ) : (
                    <img
                        src="../public/img/profile/icon-share.png"
                        alt=""
                        className="h-4 w-4"
                    />
                )}
            </button>
        </div>
    );
};

export default ShareButton;
