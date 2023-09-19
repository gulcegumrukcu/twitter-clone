import React from 'react';
import CommentButton from '../buttons/CommentButton';
import FavButton from '../buttons/FavButton';
import RtButton from '../buttons/RtButton';
import ShareButton from '../buttons/ShareButton';
import InsightButton from '../buttons/InsightButton';
import SettingsButton from '../buttons/SettingsButton';


const MedyaTab = () => {
    return <div className='h-[100%] '>

        <div className='flex flex-col w-[full] border hover:bg-[#F7F7F7] border-gray-100 h-[420px] flex-3 cursor-pointer'>

            <div className='flex flex-row '>
                <div className='p-3'>
                    <img className='w-11 h-11 rounded-full ml-2' src="/img/profile/profile-picture.jpeg" alt="" />
                </div>

                <div className='flex mb-6 items-center'>
                    <h4 className='text-gray-900 font-semibold hover:underline cursor-pointer -ml-2'>Kara Paytak</h4>
                    <p className='text-sm ml-2'>@karapaytak · 10 Ağu</p>
                    <div className='flex items-center cursor-pointer justify-end ml-[228px] '>
                        <SettingsButton />
                    </div>

                </div>

            </div>
            <div className='block'>
                <p className='text-sm ml-[68px] -mt-8 pr-2'>Twitter'a ne zaman katıldığını hatırlıyor musun? Ben hatırlıyorum! </p>
                <p className='text-sm text-[#4595f4] font-medium ml-[68px] hover:underline'>#TwitterYıldönümüm</p>
                <div className=' items-center flex justify-center ml-8 mb-2 mt-2'>
                    <img className=' w-[87%]  rounded-xl' src="/img/profile/image-twitter-post.png" alt="" />
                </div>



            </div>
            <div className=''>
                <div className='block-inline'>
                    <span className='flex flex-row justify-evenly items-center -ml-6 -mr-16'>
                        <div className='flex items-center pt-1'>
                            <CommentButton />
                        </div>
                        <div className='flex flex-row gap-1 items-center pt-1 '>
                            <RtButton count={7} />

                        </div>

                        <div className='flex flex-row gap-1 items-center pt-1 '>
                            <FavButton count={56} />

                        </div>
                        <div className='flex flex-row gap-1 items-center pt-1'>
                            <InsightButton count={1.064} />

                        </div>
                        <div className='flex items-center pt-1'>
                            <ShareButton />
                        </div>
                    </span>
                </div>
            </div>

        </div>





        <div className='h-52'></div>
    </div >;
};

export default MedyaTab;