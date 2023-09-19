function HeaderInputLists() {


    return (

        <>

            <header className="w-full">

                <div className=' w-[608px] bg-white fixed top-0 pl-6 h-[50px]  flex items-center justify-between'>
                    <img className='w-6 h-8 block cursor-pointer pt-2 hover:bg-gray-100 hover:rounded-full' src="/img/profile/icon-left.png" alt="Arrow Left Icon" />

                    <input placeholder="Liste Ara" className="bg-[#F0F3F5] placeholder:pl-8 placeholder:text-sm placeholder:text-gray-800 focus:border-[#62a1ff] px-4 w-[400px] rounded-full h-10" type="text" />
                    <div className="hover:bg-[#F0F3F5] p-2 mr-4 rounded-full cursor-pointer items-center flex justify-center">
                        <img className="w-4 h-4.5  " src="/public/img/navigation/icon-list.png" alt="" />
                    </div>
                    <div className="hover:bg-[#F0F3F5] p-2 mr-4 rounded-full cursor-pointer items-center flex justify-center">
                        <img className="w-3.5 h-3.5  " src="/public/img/profile/icon-settings.png" alt="" />
                    </div>

                </div>

            </header>
        </>
    )

}


export default HeaderInputLists;