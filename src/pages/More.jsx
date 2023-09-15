import React, { useState } from 'react';


const More = () => {
    const [lightboxActive, setLightboxActive] = useState(false);

    const toggleLightbox = () => {
        setLightboxActive(!lightboxActive);
    };

    return (
        <>
            <div className='w-[1200px] mx-auto flex h-screen '>
                <aside className='w-[275px]'>

                </aside>

                <div className='flex flex-1 w-full'>
                    <main className='flex-1 bg-green-100'>

                        <div className='flex justify-end h-screen'>
                            <p>dsfgdsfg</p>
                            <aside className='w-[350px] bg-yellow-100'>

                            </aside>
                        </div>
                    </main>
                </div>
            </div>

            {/* Button to open the lightbox */}
            <button onClick={toggleLightbox} className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                Open Lightbox
            </button>

            {/* Lightbox */}
            {lightboxActive && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <p>This is the lightbox content.</p>
                        <button onClick={toggleLightbox} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default More;
