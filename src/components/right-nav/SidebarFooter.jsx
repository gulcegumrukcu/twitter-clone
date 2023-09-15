
function SidebarFooter() {

    return (
        <>

            <div className='text-[12px] flex flex-col gap-1 ml-6 mt-6 pb-24 '>
                <div className='flex '>
                    <p className='mx-1 hover:underline cursor-pointer'>Hizmet Şartları</p>
                    <p className='mx-1 hover:underline cursor-pointer'>Gizlilik Politikası</p>
                    <p className='mx-1 hover:underline cursor-pointer'>Çerez Politikası</p>
                </div>
                <div className='flex'>
                    <p className='mx-1 hover:underline cursor-pointer'>Imprint</p>
                    <p className='mx-1 hover:underline cursor-pointer'>Erişilebilirlik</p>
                    <p className='mx-1 hover:underline cursor-pointer'>Reklam Bilgisi</p>
                </div>
                <div className='flex'>
                    <p className='mx-1 hover:underline cursor-pointer'>Daha Fazla ...</p>
                    <p className='mx-1 hover:underline cursor-pointer'>© 2023 X Corp.</p>
                </div>
            </div>


        </>

    )
}


export default SidebarFooter;

