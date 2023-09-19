function HeaderInputDiscover() {


    return (

        <>

            <header className="w-full">

                <div className=' w-[608px] bg-white fixed top-0 pl-6 h-[50px]  flex items-center justify-between'>


                    <input placeholder="Ara" className="bg-[#F0F3F5] placeholder:pl-8 placeholder:text-gray-800 focus:border-[#62a1ff] px-4 w-[500px] rounded-full h-10" type="text" />
                    <div className="hover:bg-[#F0F3F5] p-2 mr-4 rounded-full cursor-pointer items-center flex justify-center">
                        <img className="w-5 h-5  " src="/img/discover/icon-discover-header.png" alt="" />
                    </div>

                </div>

            </header>
        </>
    )

}


export default HeaderInputDiscover;