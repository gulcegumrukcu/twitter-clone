import React from 'react';

function VerifiedButton() {

    return (
        <>

            <button className="text-[20px] text-gray-900 hover:bg-gray-200 rounded-3xl px-4  flex items-center h-[50px]">
                <img src='/img/navigation/icon-logo.png' className='w-5 h-[21px]' />
                <span className='ml-5'>Onaylanmış</span>
            </button>

        </>
    );
}

export default VerifiedButton; 