import React, { useState } from 'react';

const SettingsButton = ({ }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className=' '>

            <div
                className={`flex items-center justify-center ${isHovered ? 'hover:bg-blue-100' : 'bg-transparent'
                    } h-8 w-8 rounded-full  transition-all`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => alert('Button Clicked')}
            >
                {isHovered ? (

                    <img
                        src="/img/profile/icon-settings-hover.png"
                        alt=""
                        className="h-1 w-3.5"
                    />


                ) : (

                    <img
                        src="/img/profile/icon-settings.png"
                        alt=""
                        className="h-3.5 w-3.5"
                    />


                )}
            </div>


        </div>

    );
};

export default SettingsButton;
