import React from 'react';

import SettingsButton from '../buttons/SettingsButton';



const OnaylanmisTab = () => {
    return <div className='h-[100%] pt-24  '>
        <div className='flex justify-center items-center '>
            <img className='w-50 h-40  flex' src="/img/notification/icon-notification-verified.png" alt="" />
        </div>
        <div className='w-[310px]  ml-40 pt-8'>
            <h1 className='font-[700] text-3xl text-black'>Burada görecek bir şey yok. Henüz...</h1>
            <span className=' inline-block'>
                <p className='font-normal text-gray-600 text-[14px] mt-2'>Onaylanmış bir hesaptan gelen beğeniler, bahsetmeler, yeniden gönderiler ve daha birçok şeyi burada bulabilirsin. </p>
                <p className='hover:underline cursor-pointer text-[14px] text-black font-bold mt-[4px]'>Daha fazla bilgi al</p>
            </span>

        </div>



        <div className='h-56'></div>
    </div >;
};

export default OnaylanmisTab;