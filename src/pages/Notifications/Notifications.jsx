import React from 'react';


import NotificationContainer from '../../components/notification/NotificationContainer';


const Notifications = () => {
    return (
        <>

            <div className='  '>
                <div className='w-[620px]  bg-white  fixed top-0  ml-[15rem] flex justify-start items-start'>

                    <div className='flex '>

                        <div className='ml-6 mt-2 bg-white h-16'>
                            <h2 className='text-[19px] font-sans  font-semibold text-black '>Bildirimler</h2>

                        </div>

                    </div>

                </div>


            </div>


            <div className=' justify-center ml-60 w-full  '>

                <NotificationContainer />
            </div>



        </>
    );


};

export default Notifications;
