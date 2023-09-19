import React, { useState } from 'react';

const RtButton = ({ count }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className=''>

            <div
                className={`flex items-center pl-2 ${isHovered ? 'hover:bg-green-100' : 'bg-transparent'
                    } h-8 w-8 rounded-full  transition-all`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => alert('Button Clicked')}
            >
                {isHovered ? (
                    <>
                        <img
                            src="/img/profile/icon-rt-hover.png"
                            alt=""
                            className="h-3 w-4 "
                        />
                        <p className='text-green-600 ml-2 pl-2 text-sm'>{count}</p>
                    </>
                ) : (
                    <>
                        <img
                            src="/img/profile/icon-rt.png"
                            alt=""
                            className="h-3 w-4"
                        />
                        <p className='text-gray-700 ml-2 pl-2 text-sm'>{count}</p>
                    </>
                )}
            </div>


        </div>

    );
};

export default RtButton;
