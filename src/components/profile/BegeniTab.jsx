import React from 'react';
import CommentButton from '../buttons/CommentButton';
import FavButton from '../buttons/FavButton';
import RtButton from '../buttons/RtButton';
import ShareButton from '../buttons/ShareButton';
import InsightButton from '../buttons/InsightButton';
import SettingsButton from '../buttons/SettingsButton';
import FavvedButton from '../buttons/FavvedButton'


const BegeniTab = () => {
    return <div className='h-[100%] '>
        <div className='flex flex-col w-full border hover:bg-[#F7F7F7] border-gray-100 h-[720px] flex-3 cursor-pointer'>

            <div className='flex flex-row '>
                <div className='p-3'>
                    <img className='w-11 h-11 rounded-full ml-2 ' src="/img/profile/icon-programmer-profile.jpeg" alt="" />
                </div>

                <div className='flex   mb-6 items-center'>
                    <h4 className='text-gray-900 font-semibold hover:underline cursor-pointer -ml-2'>Programmer Memes</h4>
                    <p className='text-sm  ml-1 cursor-pointer'>@iammemeloper · 28 Ağu</p>
                    <div className='flex items-center cursor-pointer justify-end ml-32 '>
                        <SettingsButton />
                    </div>

                </div>

            </div>
            <div className='block'>
                <p className='text-sm ml-[68px] -mt-8 pr-2 mb-1' >"I am a PHP developer"</p>
                <p className='text-sm text-[#4595f4] font-medium ml-[68px] cursor-pointer hover:underline'>#ProgrammerMeme</p>
                <div className=' items-center flex justify-center ml-8 mb-2 mt-2'>
                    <img className=' w-[87%]  rounded-xl cursor-pointor' src="/img/profile/image-meme-twitter.jpeg" alt="" />
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
                            <FavvedButton count={23} />

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
        <div className='flex flex-col w-[full] border hover:bg-[#F7F7F7] border-gray-100 h-[500px] flex-3 cursor-pointer'>

            <div className='flex flex-row '>
                <div className='p-3'>
                    <img className='w-11 h-11 rounded-full ml-2 ' src="/img/profile/icon-felix-profile.jpeg" alt="" />
                </div>

                <div className='flex flex-row gap-4 mb-6 items-center'>
                    <h4 className='text-gray-900 font-semibold hover:underline cursor-pointer  -ml-2'>Felix Lee</h4>
                    <p className='text-sm flex -ml-2 cursor-pointer'>@felixleezd · 12 Ağu</p>
                    <div className='flex items-center cursor-pointer justify-end ml-64 '>
                        <SettingsButton />
                    </div>

                </div>

            </div>
            <div className='block'>
                <p className='text-sm ml-[68px] -mt-8 pr-2 mb-1' >World's Most Elegant Portfolios:
                </p>

                <div className=' items-center flex justify-center ml-8 mb-2 mt-2'>
                    <img className=' w-[87%]  rounded-xl' src="/img/profile/spongebob.gif" alt="" />
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
                            <FavvedButton count={56} />

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

export default BegeniTab;