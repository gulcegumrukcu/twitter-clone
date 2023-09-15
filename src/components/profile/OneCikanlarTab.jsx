import React from 'react';
import CommentButton from '../buttons/CommentButton';
import FavButton from '../buttons/FavButton';
import RtButton from '../buttons/RtButton';
import ShareButton from '../buttons/ShareButton';
import InsightButton from '../buttons/InsightButton';
import SettingsButton from '../buttons/SettingsButton';


const OneCikanlarTab = () => {
    return <div className='h-[100%] '>
        <div className='flex flex-col w-full border border-gray-100 h-24 flex-3 cursor-pointer '>

            <div className='flex flex-row '>
                <div className='p-3'>
                    <img className='w-11 h-11 rounded-full ml-2' src="../public/img/profile/profile-picture.jpeg" alt="" />
                </div>

                <div className='flex mb-6 items-center'>
                    <h4 className='text-gray-900 font-semibold hover:underline  -ml-2 cursor-pointer'>Kara Paytak</h4>
                    <p className='text-sm ml-2 cursor-pointer'>@karapaytak · 21 Ağu</p>
                    <div className='flex items-center cursor-pointer translate-x-48 '>
                        <SettingsButton />
                    </div>

                </div>

            </div>
            <div className='block'>
                <p className='text-sm ml-[68px] -mt-8 pr-2'>npm install -D tailwindcss postcss autoprefixernpx tailwindcss init -p</p>
            </div>
            <div className=''>
                <div className='block-inline'>
                    <span className='flex flex-row justify-evenly items-center -ml-6 -mr-16'>
                        <div className='flex items-center -mt-3 cursor-pointer'>
                            <CommentButton />
                        </div>
                        <div className='flex flex-row gap-1 items-center -mt-3 cursor-pointer'>
                            <RtButton count={5} />

                        </div>

                        <div className='flex flex-row gap-1 items-center -mt-3 cursor-pointer'>
                            <FavButton count={78} />

                        </div>
                        <div className='flex flex-row gap-1 items-center -mt-3 cursor-pointer'>
                            <InsightButton count={3.453} />

                        </div>
                        <div className='flex items-center -mt-3 cursor-pointer'>
                            <ShareButton />
                        </div>
                    </span>
                </div>
            </div>

        </div>
        <div className='flex flex-col w-full border border-gray-100 h-28 flex-3 cursor-pointer'>

            <div className='flex flex-row '>
                <div className='p-3'>
                    <img className='w-11 h-11 rounded-full ml-2' src="../public/img/profile/profile-picture.jpeg" alt="" />
                </div>

                <div className='flex mb-6 items-center'>
                    <h4 className='text-gray-900 font-semibold cursor-pointer hover:underline -ml-2 '>Kara Paytak</h4>
                    <p className='text-sm ml-2 cursor-pointer'>@karapaytak · 18 Ağu</p>
                    <div className='flex items-center cursor-pointer translate-x-48'>
                        <SettingsButton />
                    </div>

                </div>

            </div>
            <div className='block'>
                <p className='text-sm ml-[68px] -mt-8 pr-2'>const [newItem, setNewItem] = useState("") (empty by default)

                    const [todos, setTodos] = useState([]) (array creation)</p>
            </div>
            <div className=''>
                <div className='block-inline'>
                    <span className='flex flex-row justify-evenly items-center -ml-6 -mr-16'>
                        <div className='flex items-center '>
                            <CommentButton />
                        </div>
                        <div className='flex flex-row gap-1 items-center cursor-pointer '>
                            <RtButton count={2} />

                        </div>

                        <div className='flex flex-row gap-1 items-center cursor-pointer '>
                            <FavButton count={45} />

                        </div>
                        <div className='flex flex-row gap-1 items-center cursor-pointer'>
                            <InsightButton count={2.187} />

                        </div>
                        <div className='flex items-center cursor-pointer '>
                            <ShareButton />
                        </div>
                    </span>
                </div>
            </div>

        </div>
        <div className='flex flex-col w-full border border-gray-100 h- flex-3 cursor-pointer'>

            <div className='flex flex-row '>
                <div className='p-3'>
                    <img className='w-11 h-11 rounded-full ml-2' src="../public/img/profile/profile-picture.jpeg" alt="" />
                </div>

                <div className='flex mb-6 items-center'>
                    <h4 className='text-gray-900 font-semibold cursor-pointer hover:underline -ml-2'>Kara Paytak</h4>
                    <p className='text-sm ml-2 cursor-pointer'>@karapaytak · 15 Ağu</p>
                    <div className='flex items-center cursor-pointer translate-x-48'>
                        <SettingsButton />
                    </div>

                </div>

            </div>
            <div className='block'>
                <p className='text-sm ml-[68px] -mt-8 pr-2'> react, generate unique ids

                    id: http://Date.now()</p>
            </div>
            <div className=''>
                <div className='block-inline'>
                    <span className='flex flex-row justify-evenly items-center -ml-6 -mr-16'>
                        <div className='flex items-center -mt-3'>
                            <CommentButton />
                        </div>
                        <div className='flex flex-row gap-1 items-center -mt-3 '>
                            <RtButton count={3} />

                        </div>

                        <div className='flex flex-row gap-1 items-center -mt-3 '>
                            <FavButton count={31} />

                        </div>
                        <div className='flex flex-row gap-1 items-center -mt-3'>
                            <InsightButton count={1.084} />

                        </div>
                        <div className='flex items-center -mt-3'>
                            <ShareButton />
                        </div>
                    </span>
                </div>
            </div>

        </div>
        <div className='flex flex-col w-full border border-gray-100 h-30 flex-3 cursor-pointer'>

            <div className='flex flex-row '>
                <div className='p-3'>
                    <img className='w-11 h-11 rounded-full ml-2' src="../public/img/profile/profile-picture.jpeg" alt="" />
                </div>

                <div className='flex mb-6 items-center'>
                    <h4 className='text-gray-800 font-semibold hover:underline -ml-2'>Kara Paytak</h4>
                    <p className='text-sm ml-2'>@karapaytak · 13 Ağu</p>
                    <div className='flex items-center cursor-pointer translate-x-48'>
                        <SettingsButton />
                    </div>

                </div>

            </div>
            <div className='block'>
                <p className='text-sm ml-[68px] -mt-8 pr-2'> button class="text-sm text-white rounded ml-auto bg-red-300 w-12"YENİ /button

                    Neden 300'ün üstüne çıkmıyor red? Bu text-[25px] lerde de geçerli"</p>
            </div>
            <div className=''>
                <div className='block-inline'>
                    <span className='flex flex-row justify-evenly items-center -ml-6 -mr-16'>
                        <div className='flex items-center pt-1'>
                            <CommentButton />
                        </div>
                        <div className='flex flex-row gap-1 items-center pt-1 '>
                            <RtButton count={2} />

                        </div>

                        <div className='flex flex-row gap-1 items-center pt-1 '>
                            <FavButton count={26} />

                        </div>
                        <div className='flex flex-row gap-1 items-center pt-1'>
                            <InsightButton count={1.118} />

                        </div>
                        <div className='flex items-center pt-1'>
                            <ShareButton />
                        </div>
                    </span>
                </div>
            </div>

        </div>
        <div className='flex flex-col w-[full] border border-gray-100 h-[420px] flex-3 cursor-pointer'>

            <div className='flex flex-row '>
                <div className='p-3'>
                    <img className='w-11 h-11 rounded-full ml-2' src="../public/img/profile/profile-picture.jpeg" alt="" />
                </div>

                <div className='flex mb-6 items-center'>
                    <h4 className='text-gray-900 font-semibold hover:underline cursor-pointer -ml-2'>Kara Paytak</h4>
                    <p className='text-sm ml-2'>@karapaytak · 10 Ağu</p>
                    <div className='flex items-center cursor-pointer translate-x-48'>
                        <SettingsButton />
                    </div>

                </div>

            </div>
            <div className='block'>
                <p className='text-sm ml-[68px] -mt-8 pr-2'>Twitter'a ne zaman katıldığını hatırlıyor musun? Ben hatırlıyorum! </p>
                <p className='text-sm text-[#4595f4] font-medium ml-[68px] hover:underline'>#TwitterYıldönümüm</p>
                <div className=' items-center flex justify-center ml-8 mb-2 mt-2'>
                    <img className=' w-[87%]  rounded-xl' src="../public/img/profile/image-twitter-post.png" alt="" />
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
        <div className='flex flex-col w-full border border-gray-100 h-28 flex-3 cursor-pointer'>

            <div className='flex flex-row '>
                <div className='p-3'>
                    <img className='w-11 h-11 rounded-full ml-2' src="../public/img/profile/profile-picture.jpeg" alt="" />
                </div>

                <div className='flex mb-6 items-center'>
                    <h4 className='text-gray-800 font-semibold hover:underline -ml-2'>Kara Paytak</h4>
                    <p className='text-sm ml-2'>@karapaytak · 9 Ağu</p>
                    <div className='flex items-center cursor-pointer translate-x-48'>
                        <SettingsButton />
                    </div>

                </div>

            </div>
            <div className='block'>
                <p className='text-sm ml-[68px] -mt-8 pr-2'>const [newItem, setNewItem] = useState("") (empty by default)

                    const [todos, setTodos] = useState([]) (array creation)</p>
            </div>
            <div className=''>
                <div className='block-inline'>
                    <span className='flex flex-row justify-evenly items-center -ml-6 -mr-16'>
                        <div className='flex items-center '>
                            <CommentButton />
                        </div>
                        <div className='flex flex-row gap-1 items-center  '>
                            <RtButton count={2} />

                        </div>

                        <div className='flex flex-row gap-1 items-center  '>
                            <FavButton count={45} />

                        </div>
                        <div className='flex flex-row gap-1 items-center '>
                            <InsightButton count={2.187} />

                        </div>
                        <div className='flex items-center'>
                            <ShareButton />
                        </div>
                    </span>
                </div>
            </div>

        </div>





        <div className='h-52'></div>
    </div >;
};

export default OneCikanlarTab;