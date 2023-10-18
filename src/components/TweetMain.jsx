import React, { useState, useRef, useEffect } from 'react';

function TweetMain() {
    const [inputValue, setInputValue] = useState('');
    const [isInputFocused, setInputFocused] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputFocus = () => {
        setInputFocused(true);
    };

    const handleInputBlur = () => {
        setInputFocused(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="flex mt-0 justify-center">
                <div className={`mt-10 w-[600px] flex ${isInputFocused ? 'h-40' : 'h-20'} justify-center `}>
                    <img src="/img/profile/profile-picture.jpeg" alt="" className="w-10 h-10 cursor-pointer rounded-full ml-6 mt-6" />
                    <div className="flex flex-grow flex-col justify-start mt-4 ml-4">
                        <div className="" ref={dropdownRef}>
                            {isInputFocused && (
                                <div className="flex justify-start items-center">
                                    <div
                                        className={`rounded-full border-blue w-24 h-8 justify-center items-center flex hover:bg-blue-100 border text-blue-400 cursor-pointer border-gray-200 text-sm font-bold py-0 px-4 mt-2`}
                                        onClick={toggleDropdown}
                                    >
                                        <p>Herkes</p>
                                        <img src="/public/img/profile/icon-dropdown.png " className='w-4 h-4 ml-2' alt="" />
                                    </div>

                                    {dropdownOpen && (
                                        <div className=" mt-8 w-40 bg-white border rounded-lg shadow-lg">
                                            <ul>
                                                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Option 1</li>
                                                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Option 2</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                            <input
                                className={`h-16 ${isInputFocused ? 'h-20' : ''} placeholder:text-xl placeholder:text-gray-500 placeholder:font-medium w-[500px] focus:outline-none transition-all duration-300 border-none`}
                                type="text"
                                placeholder="Neler oluyor?"
                                value={inputValue}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />

                        </div>
                        {isInputFocused && (
                            <>
                                <div
                                    className={`rounded-full border-blue w-48 h-8 justify-center items-center flex hover:bg-blue-100 -ml-2 text-blue-400 cursor-pointer border-gray-200 text-sm font-bold py-0  `}
                                    onClick={toggleDropdown}
                                >
                                    <img src="/public/img/home/icon-herkes.png " className='w-4 h-4 mr-2 ' alt="" />

                                    <p className='text-blue-400  font-bold text-sm cursor-pointer mr-2   rounded-full flex'>Herkes yanıtlayabilir</p>



                                </div>
                                <div className=' border-b border-gray-100  w-[480px] justify-center items-center h-8'></div>

                            </>

                        )}
                    </div>
                </div>
            </div>

            <div className='flex justify-start pl-[10%] '>
                <div className="flex items-center h-16">
                    <span className='justify-evenly flex w-[280px]'>
                        <div className="w-8 h-8 rounded-full items-center justify-center flex cursor-pointer hover:bg-blue-100 ml-4">
                            <img src="/img/profile/icon-media.png" className='w-4 h-4' alt="" />
                        </div>
                        <div className="w-8 h-8 rounded-full items-center justify-center flex cursor-pointer hover:bg-blue-100 ml-4">
                            <img src="/img/profile/icon-gif.png" className='w-4 h-4' alt="" />
                        </div>
                        <div className="w-8 h-8 rounded-full items-center justify-center flex cursor-pointer hover:bg-blue-100 ml-4">
                            <img src="/img/profile/icon-poll.png" className='w-4 h-4' alt="" />
                        </div>
                        <div className="w-8 h-8 rounded-full items-center justify-center flex cursor-pointer hover:bg-blue-100 ml-4">
                            <img src="/img/profile/icon-emoji.png" className='w-4 h-4' alt="" />
                        </div>
                        <div className="w-8 h-8 rounded-full items-center justify-center flex cursor-pointer hover:bg-blue-100 ml-4">
                            <img src="/img/profile/icon-schedule.png" className='w-4 h-4' alt="" />
                        </div>
                        <div className="w-8 h-8 rounded-full items-center justify-center flex cursor-pointer hover:bg-blue-100 ml-4">
                            <img src="/img/profile/icon-location.png" className='w-4 h-[18px]' alt="" />
                        </div>
                    </span>
                    <span className='ml-36 flex p-4'>
                        <button
                            className={`${inputValue ? 'bg-blue-500' : 'bg-blue-400'} text-white text-[15px] w-24 h-[36px] rounded-full font-bold`}

                            disabled={!inputValue}
                        >
                            Gönder
                        </button>
                    </span>
                </div>
            </div>
        </>
    );
}

export default TweetMain;
