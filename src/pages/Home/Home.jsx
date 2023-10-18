import React from 'react';

import HomepageContainer from '../../components/home/HomepageContainer';



const Home = () => {
  return (
    <>

      <div className='  '>
        <div className='w-[620px]  bg-white fixed top-0 h-32 ml-[15rem] flex justify-start items-start'>

          <div className='flex '>

            <div className='ml-6 mt-2'>
              <h2 className='text-[19px] font-sans  font-semibold text-black '>Anasayfa</h2>

            </div>

          </div>

        </div>


      </div>


      <div className=' justify-center ml-60 w-full '>

        <HomepageContainer />
      </div>



    </>
  );


};

export default Home;
