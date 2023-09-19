import React from 'react';


import IlginiCekebilecekGundemlerDiscover from '../../components/discover/IlginiCekebilecekGundemlerDiscover'
import HeaderInputDiscover from '../../components/discover/HeaderInputDiscover';



const Discover = () => {
    return (
        <>
            <div className=' bg-white  fixed top-0 h-12 ml-[15rem] flex justify-start items-start'>
                <div className=''>
                    < HeaderInputDiscover />


                </div>
            </div>








            <div className=' justify-center ml-60 mt-12 '>
                <IlginiCekebilecekGundemlerDiscover />

            </div>



        </>
    );


};

export default Discover;
