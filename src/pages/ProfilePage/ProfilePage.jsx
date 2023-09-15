import React from 'react';
import TabsContainer from '/src/components/TabsContainer'

const ProfilePage = () => {
    return (



        <>

            <div className='  '>
                <div className='w-[570px]  bg-white  fixed top-0 h-14 ml-[15rem] flex items-center'>

                    <div className='flex'>
                        <img className='w-8 h-8 block cursor-pointer pt-1 hover:bg-gray-100 hover:rounded-full' src="./public/img/profile/icon-left.png" alt="Arrow Left Icon" />
                        <div className='ml-6 '>
                            <h2 className='text-[19px] font-sans font-semibold text-black '>Kara Paytak</h2>
                            <p className='font-sans text-[12px] text-gray-700 '>11 gönderi</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-60 w-full'>
                <div className='bg-gray-200 w-full h-60'>
                </div>

                <div className='flex justify-between'>
                    <img className='w-36 h-36 translate-x-6 -translate-y-14 rounded-full cursor-pointer' src="./public/img/profile/profile-picture.jpeg" alt="" />
                    <button className='border rounded-3xl h-9 w-36 text-[15px] font-[600] mr-6 mt-3'>Profili düzenle</button>
                </div>

                <div className='px-4' >
                    <h2 className='text-xl font-bold ml-4 -mt-10'>Kara Paytak</h2>
                    <p className='text-sm ml-4'>@karapaytak</p>

                    <p className='text-[13.5px] ml-4 mt-5 text-black font-[400]'>Something between FE development, design and music. I might tweet any second</p>
                    <div className='flex'>
                        <img className='w-3.5 h-3.5 ml-4 mt-4' src="./public/img/profile/icon-calendar.png" alt="calendar-icon" />
                        <p className='ml-1 mt-3 text-gray-500 text-[14px] font-medium'>Nisan 2018 tarihinde katıldı</p>

                    </div>
                    <span className=' flex mt-3 ml-4'>
                        <div className='text-[13px] flex flex-row gap-5 text-gray-600'>
                            <p><b>83</b> Takip Edilen</p>
                            <p><b>3</b> Takipçi</p>
                        </div>

                    </span>

                </div>

                <span className=''>
                    <TabsContainer />
                </span>


            </div>



























        </>





    );
};

export default ProfilePage;
