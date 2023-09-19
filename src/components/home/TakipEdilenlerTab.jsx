import React from 'react';
import CommentButton from '../buttons/CommentButton';
import FavButton from '../buttons/FavButton';
import RtButton from '../buttons/RtButton';
import ShareButton from '../buttons/ShareButton';
import InsightButton from '../buttons/InsightButton';
import SettingsButton from '../buttons/SettingsButton';



const TakipEdilenlerTab = () => {
    return <div className='h-[100%] '>
        <div className='flex flex-col pt-0 w-full border hover:bg-[#F7F7F7] border-gray-100 h-[430px] flex-3 cursor-pointer'>

            <div className='flex flex-row '>
                <div className='p-3'>
                    <img className='w-11 h-11 rounded-full ml-2 ' src="/img/profile/sb-icon.png" alt="" />
                </div>

                <div className='flex   mb-6 items-center'>
                    <h4 className='text-gray-900 font-semibold hover:underline cursor-pointer '>Patrick Memes</h4>
                    <p className='text-sm  ml-2 cursor-pointer'>@patrickmemes · 28 Ağu</p>
                    <div className='flex items-center cursor-pointer justify-end ml-[180px] '>
                        <SettingsButton />
                    </div>

                </div>

            </div>
            <div className='block'>
                <p className='text-sm ml-[74px] -mt-8 pr-2 mb-1' >"Patrick is the Star"</p>
                <p className='text-sm text-[#4595f4] font-medium ml-[74px] cursor-pointer hover:underline'>#PatrickStar</p>
                <div className=' items-center flex justify-center ml-8 mb-2 mt-2'>
                    <img className=' w-[87%]  rounded-xl cursor-pointor' src="/img/profile/patrick.gif" alt="" />
                </div>



            </div>
            <div className=''>
                <div className='block-inline'>
                    <span className='flex flex-row justify-evenly items-center -ml-6 -mr-16'>
                        <div className='flex items-center pt-1'>
                            <CommentButton />
                        </div>
                        <div className='flex flex-row gap-1 items-center pt-1 cursor-pointer'>
                            <RtButton count={4} />

                        </div>

                        <div className='flex flex-row gap-1 items-center pt-1 cursor-pointer'>
                            <FavButton count={23} />

                        </div>
                        <div className='flex flex-row gap-1 items-center pt-1 cursor-pointer'>
                            <InsightButton count={1.189} />

                        </div>
                        <div className='flex items-center pt-1 cursor-pointer'>
                            <ShareButton />
                        </div>
                    </span>
                </div>
            </div>

        </div>
        <div className='flex flex-col w-[full] border hover:bg-[#F7F7F7] border-gray-100 h-[460px] flex-3  cursor-pointer'>

            <div className='flex flex-row '>
                <div className='p-3'>
                    <img className='w-11 h-11 rounded-full ml-2 ' src="/img/profile/icon-felix-profile.jpeg" alt="" />
                </div>

                <div className='flex flex-row gap-4 mb-6 items-center'>
                    <h4 className='text-gray-900 font-semibold hover:underline cursor-pointer  '>Felix Lee</h4>
                    <p className='text-sm flex -ml-2 cursor-pointer'>@felixleezd · 12 Ağu</p>
                    <div className='flex items-center cursor-pointer justify-end ml-[253px] '>
                        <SettingsButton />
                    </div>

                </div>

            </div>
            <div className='block'>
                <p className='text-sm ml-[74px] -mt-8 pr-2 mb-1' >World's Most Elegant Portfolios:
                </p>

                <div className=' items-center flex justify-center ml-8 mb-2 mt-2'>
                    <img className=' w-[87%]  rounded-xl' src="/img/profile/spongebob2.gif" alt="" />
                </div>



            </div>
            <div className=''>
                <div className='block-inline'>
                    <span className='flex flex-row justify-evenly items-center -ml-6 -mr-16'>
                        <div className='flex items-center pt-1'>
                            <CommentButton />
                        </div>
                        <div className='flex flex-row gap-1 items-center pt-1 cursor-pointer'>
                            <RtButton count={7} />

                        </div>

                        <div className='flex flex-row gap-1 items-center pt-1 cursor-pointer'>
                            <FavButton count={56} />

                        </div>
                        <div className='flex flex-row gap-1 items-center pt-1 cursor-pointer'>
                            <InsightButton count={1.064} />

                        </div>
                        <div className='flex items-center pt-1 cursor-pointer'>
                            <ShareButton />
                        </div>
                    </span>
                </div>
            </div>

        </div>


        <div className='h-56'></div>
    </div >;
};

export default TakipEdilenlerTab;