import React, { useState } from 'react';
import FavButton from '../buttons/FavButton'
import SettingsButton from '../buttons/SettingsButton';

// Sample data for messages
const messagesData = [
    {
        id: '@csuxx',
        sender: 'KUCHIRO KUCHIRO CANSUX',
        message: 'ALLAH KAHRETSİN HEPSİ PMSMİŞ ÖSTOROJEN SARHOŞLUĞUM GEÇİNCE NORMALİME DÖNDÜ HER ŞEY!',
        time: 'ÖÖ 09:30',
        date: '6 Eyl 2023',
        image: '/img/profile/sb-icon6.png', // Replace with actual image URLs
    },
    {
        id: '@ayferulken',
        sender: 'Ayfer Ulken',
        message: 'Orta Dünya severlerin bu kitabı elinden bırakması imkansız, o kadar detaylı çizimler ve illüstrasyonlar var ki okuru mest ediyor. ',
        time: 'ÖÖ 10:15',
        date: '2 Eyl 2023',
        image: '/img/profile/sb-icon4.png', // Replace with actual image URLs
    },
    // Add more messages as needed
];

function MessageInterface() {
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [newMessage, setNewMessage] = useState('');

    const handleSelectMessage = (message) => {
        setSelectedMessage(message);
    };

    const handleSendMessage = () => {
        // Handle sending the newMessage here (e.g., using an API or updating the state)
        // For this example, I'll just clear the input field
        setNewMessage('');
    };

    const [isMessageHovered, setIsMessageHovered] = useState(false);
    const handleMouseEnterMessage = () => {
        setIsMessageHovered(true);
    };

    // Event handler for mouse leaving the message div
    const handleMouseLeaveMessage = () => {
        setIsMessageHovered(false);
    };


    return (
        <div className="flex flex-row h-screen w-[1000px]">
            {/* Left side: List of messages */}
            <div className="w-[400px] border-r p-4">
                <h2 className="cursor-default text-xl font-bold mb-4 ml-2">Mesajlar</h2>

                <ul>
                    {messagesData.map((message) => (
                        <li
                            key={message.id}

                            onClick={() => handleSelectMessage(message)}
                        >
                            <div
                                className={`flex  items-center flex-row cursor-pointer hover:bg-gray-100 w-[370px] h-16  ${selectedMessage === message ? 'bg-gray-100' : ''}`}>



                                <div className=''>
                                    <img
                                        src={message.image}
                                        alt={`${message.sender}'s profile`}
                                        className="w-[38px] h-[38px] mx-2 rounded-full "
                                    />
                                </div>
                                <div className=' flex-col w-full flex'>


                                    <div className="flex ml-2  gap-2 flex-row items-center  ">
                                        <span className="font-bold text-gray-700 text-[15px]"> {message.sender.length > 10
                                            ? `${message.sender.slice(0, 10)}...`
                                            : message.sender}</span>
                                        <span className="font-medium text-sm text-gray-500">{message.id.length > 10
                                            ? `${message.id.slice(0, 10)}...`
                                            : message.id}</span>
                                        <span className=" text-sm text-gray-500"> · {message.date.length > 5
                                            ? `${message.date.slice(0, 5)}`
                                            : message.date}</span>
                                    </div>

                                    <div className='ml-2 text-[13px] text-gray-500  '>
                                        {message.message.length > 32
                                            ? `${message.message.slice(0, 32)}...`
                                            : message.message}
                                    </div>

                                </div>
                                <div>
                                    <SettingsButton />
                                </div>




                            </div>



                        </li>
                    ))}
                </ul>
            </div>

            {/* Right side: Display selected message and input for typing */}
            <div
                className='w-3/4 p-4 h-full border-r'

            >




                {selectedMessage ? (
                    <header>

                        <div className="flex items-center mb-2 fixed top-0 h-16 bg-white w-[584px] border-r ">
                            <img
                                src={selectedMessage.image}
                                alt={`${selectedMessage.sender}'s profile`}
                                className="w-10 h-10  rounded-full mr-2"
                            />
                            <div>
                                <div>
                                    <h2 className=" text-xl cursor-default font-bold mb-1">
                                        {selectedMessage.sender}
                                    </h2>
                                </div>

                            </div>



                        </div>
                        <div className='flex mt-12  w-[550px]  items-center' onMouseEnter={handleMouseEnterMessage}
                            onMouseLeave={handleMouseLeaveMessage}>

                            <div className='bg-gray-100 w-[400px] rounded-full rounded-bl-none p-4'>
                                {selectedMessage.message}

                            </div>

                            {isMessageHovered && (
                                <>
                                    <div className='flex flex-row cursor-pointer w-32'>
                                        <FavButton />
                                        <SettingsButton />
                                    </div>

                                </>
                            )}
                        </div>





                        <div className='flex text-gray-500'>
                            <p className="text-xs mt-2 cursor-default">{selectedMessage.date}</p>
                            <p className="text-xs mt-2 ml-1 cursor-default">{selectedMessage.time}</p>
                        </div>




                    </header>

                ) : (
                    <>
                        <div className='justify-center items-center flex h-full w-full'>
                            <div className='w-[350px] mx-8 '>
                                <h1 className='text-3xl  font-bold'>Mesaj seç</h1>
                                <p className='text-sm mt-2'>Mevcut sohbetlerin arasından seçim yap, yeni bir sohbet başlat veya sörfe devam et.</p>
                                <button className=' mt-8 bg-blue-500 text-white w-40 rounded-full py-4 font-semibold'>Yeni Mesaj</button>
                            </div>
                        </div>

                    </>
                )}



                {/* Input for typing messages */}
                {selectedMessage && (
                    <div className="flex fixed bg-white bottom-0 w-[40%] justify-start items-start ">

                        <div className='rounded-full p-2 border flex w-full border-gray-300 bg-gray-100'>
                            <div className="w-8 h-8 rounded-full items-center justify-center flex cursor-pointer hover:bg-blue-100 ">
                                <img src="/img/profile/icon-media.png" className='w-4 h-4' alt="" />
                            </div>
                            <div className="w-8 h-8 rounded-full items-center justify-center flex cursor-pointer hover:bg-blue-100 ">
                                <img src="/img/profile/icon-gif.png" className='w-4 h-4' alt="" />
                            </div>

                            <div className="w-8 h-8 rounded-full items-center justify-center flex cursor-pointer hover:bg-blue-100 ">
                                <img src="/img/profile/icon-emoji.png" className='w-4 h-4' alt="" />
                            </div>
                            <input
                                type="text"
                                placeholder="Yeni bir mesaja başla"
                                className="w-[70%] rounded-full placeholder:text-gray-900 placeholder:font-normal pl-2 placeholder:text-sm focus:outline-none ml-auto bg-gray-100"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                            />
                            <button
                                onClick={handleSendMessage}
                                className="ml-2"
                            >
                                <img className='w-4 h-5' src="img/messages/icon-send.png" alt="" />
                            </button>
                        </div>

                    </div>
                )}
            </div>
        </div >
    );
}

export default MessageInterface;