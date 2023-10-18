// GonderButton.js
import React, { useState } from 'react';
import TweetLightbox from '../TweetLightbox';

function GonderButton() {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const handleOpenLightbox = () => {
        setIsLightboxOpen(true);
    };

    const handleCloseLightbox = () => {
        setIsLightboxOpen(false);
    };

    return (
        <>
            <button
                className="bg-[#478cf3] text-white text-lg px-20 py-3 mt-8 rounded-full font-bold"
                onClick={handleOpenLightbox}
            >
                Gönder
            </button>
            {isLightboxOpen && <TweetLightbox onClose={handleCloseLightbox} />}
        </>
    );
}

export default GonderButton;
