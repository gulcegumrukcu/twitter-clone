import React from 'react';

import SettingsButton from '../buttons/SettingsButton';



const TumuTab = () => {
    return <div className='h-[100%] '>

        <div className='flex flex-col w-[full] border hover:bg-[#F7F7F7] border-gray-100 h-[130px] flex-3  cursor-pointer'>
            <div className='flex  items-center justify-around  mt-4'>
                <img className='w-[30px] h-[30px] ml-8 mr-4 ' src="/img/notification/icon-notification.png" alt="" />
                <img className='rounded-full w-8 h-8 mr-64 -ml-4 ' src="/img/profile/profile-picture.jpeg" alt="" />
                <div className='ml-36 mr-8'>
                    <SettingsButton />

                </div>
            </div>
            <div className='flex justify-start mt-2 ml-[90px]'>
                <p className='font-bold text-[15px]'>Bıbır</p>
            </div>
            <div className='flex justify-start mt-2 ml-[90px] text-gray-500'>
                <p className=' text-[15px]'>Zaten twit yazabiliyor olsaydım bunu yapmazdım sanırım....</p>
            </div>

        </div>
        <div className='flex flex-col w-[full] border hover:bg-[#F7F7F7] border-gray-100 h-[130px] flex-3  cursor-pointer'>
            <div className='flex  items-center justify-around  mt-4'>
                <img className='w-[30px] h-[30px] ml-8 mr-4 ' src="/img/notification/icon-notification.png" alt="" />
                <img className='rounded-full w-8 h-8 mr-64 -ml-4 ' src="/img/profile/sb-icon2.png" alt="" />
                <div className='ml-36 mr-8'>
                    <SettingsButton />

                </div>
            </div>
            <div className='flex justify-start mt-2 ml-[90px]'>
                <p className='font-bold text-[15px]'>Zıbır</p>
                <p className='font-[400] ml-[5px] text-[15px]'>adlı kullanıcının en son gönderisi</p>
            </div>
            <div className='flex justify-start mt-2 ml-[90px] text-gray-500'>
                <p className=' text-[15px]'>Zıbır Gıbır Bıbır!</p>
            </div>

        </div>
        <div className='flex flex-col w-[full] border hover:bg-[#F7F7F7] border-gray-100 h-[130px] flex-3  cursor-pointer'>
            <div className='flex  items-center justify-around  mt-4'>
                <img className='w-[30px] h-[30px] ml-8 mr-4 ' src="/img/notification/icon-notification.png" alt="" />
                <img className='rounded-full w-8 h-8 mr-64 -ml-4 ' src="/img/profile/sb-icon3.png" alt="" />
                <div className='ml-36 mr-8'>
                    <SettingsButton />

                </div>
            </div>
            <div className='flex justify-start mt-2 ml-[90px]'>
                <p className='font-bold text-[15px]'>Silly Questions</p>
            </div>
            <div className='flex justify-start mt-2 ml-[90px] text-gray-500'>
                <p className=' text-[15px]'>Guess my fav cartoon, NOW!</p>
            </div>

        </div>
        <div className='flex flex-col w-[full] border hover:bg-[#F7F7F7] border-gray-100 h-[130px] flex-3  cursor-pointer'>
            <div className='flex  items-center justify-around  mt-4'>
                <img className='w-[30px] h-[30px] ml-8 mr-4 ' src="/img/notification/icon-notification.png" alt="" />
                <img className='rounded-full w-8 h-8 mr-64 -ml-4 ' src="/img/profile/sb-icon6.png" alt="" />
                <div className='ml-36 mr-8'>
                    <SettingsButton />

                </div>
            </div>
            <div className='flex justify-start mt-2 ml-[90px]'>
                <p className='font-bold text-[15px]'>suPeR iMp0rTanT aLeRt</p>
            </div>
            <div className='flex justify-start mt-2 ml-[90px] text-gray-500'>
                <p className=' text-[15px]'>DM ME A COW EMOJI 🐄 IF YOU READ THIS</p>
            </div>

        </div>
        <div className='flex flex-col w-[full] border hover:bg-[#F7F7F7] border-gray-100 h-[130px] flex-3  cursor-pointer'>
            <div className='flex  items-center justify-around  mt-4'>
                <img className='w-[30px] h-[30px] ml-8 mr-4 ' src="/img/notification/icon-notification.png" alt="" />
                <img className='rounded-full w-8 h-8 mr-64 -ml-4 ' src="/img/profile/sb-icon5.png" alt="" />
                <div className='ml-36 mr-8'>
                    <SettingsButton />

                </div>
            </div>
            <div className='flex justify-start mt-2 ml-[90px]'>
                <p className='font-bold text-[15px]'>SpongeBob Facebook Admin</p>
            </div>
            <div className='flex justify-start mt-2 ml-[90px] text-gray-500'>
                <p className=' text-[15px]'>One day I'll have ads here.</p>
            </div>

        </div>




        <div className='h-56'></div>
    </div >;
};

export default TumuTab;