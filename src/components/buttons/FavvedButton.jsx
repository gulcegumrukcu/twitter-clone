import React, { useState } from 'react';

const FavvedButton = ({ count }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className=''>

            <div
                className={`flex items-center pl-2.5 ${isHovered ? 'hover:bg-red-100' : 'bg-transparent'
                    } h-8 w-8 rounded-full  transition-all`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => alert('Button Clicked')}
            >
                {isHovered ? (
                    <>
                        <img
                            src="/img/profile/icon-fav-bg.png"
                            alt=""
                            className="h-3 w-4 "
                        />
                        <p className='text-red-600 ml-2 pl-2 text-sm'>{count}</p> {/* Adjust the margin */}
                    </>
                ) : (
                    <>
                        <img
                            src="/img/profile/icon-fav-bg.png"
                            alt=""
                            className="h-3 w-4"
                        />
                        <p className='text-red-600 ml-2 pl-2 text-sm'>{count}</p> {/* Adjust the margin */}
                    </>
                )}
            </div>


        </div>

    );
};


export default FavvedButton;
