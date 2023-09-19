import React from 'react';



import HeaderInputLists from '../../components/lists/HeaderInputLists';



const Lists = () => {
    return (
        <>
            <div className=' bg-white  fixed top-0 h-12 ml-[15rem] flex justify-start items-start'>
                <div className=''>
                    < HeaderInputLists />


                </div>
            </div>








            <div className=' justify-center ml-[250px] mt-16 '>
                <div className='h-36 border-b ml-2'>
                    <h2 className='font-bold text-xl text-gray-800 ml-2'>
                        Sabitlenen Listeler</h2>
                    <p className='text-sm text-gray-700 ml-8 mr-[10px] mt-8'>Burada henüz hiçbir şey görünmüyor. Hızlıca erişmek istediğin favori Listelerini üste sabitleyebilirsin.</p>
                </div>

                <div className='h-[308px] border-b ml-2'>
                    <h2 className='mt-4 font-bold text-xl text-gray-800 ml-2'>
                        Yeni Listeleri keşfet</h2>
                    <span className='flex flex-row mt-2 py-[36px] items-center cursor-pointer hover:bg-gray-100 h-16'>

                        <div className=''>
                            <img className='ml-2  w-12 h-12 rounded-md' src="/img/profile/sb-icon6.png" alt="" />





                        </div>
                        <div className='block'>
                            <div className=' ml-4 '>
                                <div className='flex items-center flex-row gap-2'>
                                    <p className='font-semibold text-[15px]'>Spongebob Funn Club</p>
                                    <p className='  text-[12px] text-gray-600'>· 456 üye</p>
                                </div>
                            </div>

                            <p className='ml-4 font-normal text-[13px] text-gray-600'>@spongebob dahil 239 takipçi</p>
                        </div>
                        <div className='ml-[228px]'>
                            <img className='w-[35px] h-[35px]' src="/img/lists/icon-lists.png" alt="" />
                        </div>

                    </span>
                    <span className='flex flex-row mt-0 py-[36px] items-center cursor-pointer hover:bg-gray-100 h-16'>

                        <div className=''>
                            <img className='ml-2  w-12 h-12 rounded-md' src="/img/profile/sb-icon2.png" alt="" />





                        </div>
                        <div className='block'>
                            <div className=' ml-4 '>
                                <div className='flex items-center flex-row gap-2'>
                                    <p className='font-semibold text-[15px]'>Spongebob Fan Club</p>
                                    <p className='  text-[12px] text-gray-600'>· 230 üye</p>
                                </div>
                            </div>

                            <p className='ml-4 font-normal text-[13px] text-gray-600'>@p4trickst4r dahil 130 takipçi</p>
                        </div>
                        <div className='ml-60'>
                            <img className='w-[35px] h-[35px]' src="/img/lists/icon-lists.png" alt="" />
                        </div>

                    </span>
                    <span className='flex flex-row mt-0 py-[36px] items-center cursor-pointer hover:bg-gray-100 h-16'>

                        <div className=''>
                            <img className='ml-2  w-12 h-12 rounded-md' src="/img/profile/sb-icon4.png" alt="" />





                        </div>
                        <div className='block'>
                            <div className=' ml-4 '>
                                <div className='flex items-center flex-row gap-2'>
                                    <p className='font-semibold text-[15px]'>Spongebob Fun Club</p>
                                    <p className='  text-[12px] text-gray-600'>· 720 üye</p>
                                </div>
                            </div>

                            <p className='ml-4 font-normal text-[13px] text-gray-600'>@patrickstar dahil 420 takipçi</p>
                        </div>
                        <div className='ml-60'>
                            <img className='w-[35px] h-[35px]' src="/img/lists/icon-lists.png" alt="" />
                        </div>

                    </span>
                    <div>
                        <p className='text-[#4595f4] hover:bg-[#F7F7F7] text-sm py-4  pl-[8px] cursor-pointer'>Daha fazla göster</p>
                    </div>
                </div>
                <div className='h-36 mt-4 ml-2'>
                    <h2 className='font-bold text-xl text-gray-800 ml-2'>
                        Listelerin</h2>
                    <p className='text-sm text-gray-700 ml-8 mr-[10px] mt-8'>Hiç Liste oluşturmadın veya takip etmedin. Oluşturduğun veya takip ettiğin Listeler burada görünür.</p>
                </div>

            </div>



        </>
    );


};

export default Lists;
