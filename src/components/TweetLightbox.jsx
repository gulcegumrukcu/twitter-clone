import React, { useState, useEffect } from 'react';
import TweetMain from './TweetMain';

function TweetLightbox({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };

    // Add/remove overflow-hidden class to body when the lightbox is open/closed
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Clean up the class when the component unmounts
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    return (
        <>
            {/* Apply a shadow div with a higher z-index */}
            <div className="fixed top-0 left-0 w-full h-full z-[10000] bg-black opacity-40"></div>

            {/* Apply the lightbox with a higher z-index */}
            <div className="fixed z-[10000] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 w-[650px]">
                <button className="absolute top-2 right-4 text-gray-600 hover:text-gray-800 text-xl" onClick={handleClose}>
                    X
                </button>
                <div className="text-center">
                    <TweetMain />
                </div>
            </div>
        </>
    );
}

export default TweetLightbox;
