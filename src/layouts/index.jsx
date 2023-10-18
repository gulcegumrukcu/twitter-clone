

import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import LeftNavigation from '../components/LeftNavigation';
import IlginiCekebilecekGundemler from '../components/right-nav/IlginiCekebilecekGundemler'
import KimiTakipEtmeli from '../components/right-nav/KimiTakipEtmeli'
import PremiumSubscription from '../components/right-nav/PremiumSubscription'
import SidebarFooter from '../components/right-nav/SidebarFooter'
import HeaderInput from '../components/right-nav/HeaderInput'
import MediasPhotos from '../components/right-nav/MediasPhotos';
import Messages from '../pages/Messages/Messages';
import BunlariBegenebilirsin from '../components/right-nav/BunlariBegenebilirsin';

export default function MainLayout() {
    const location = useLocation();

    let sidebarContent;
    let mainContent;
    let messagesMain;
    let mainContainerClassName = 'overflow-y-hidden';

    useEffect(() => {
        console.log("Current pathname:", location.pathname);
    }, [location.pathname]);

    if (location.pathname.includes('/ProfilePage')) {
        sidebarContent = (
            <>
                <div className=''>
                    <HeaderInput />
                </div>

                <div className='px-4'>
                    <div className=' mt-12'>
                        <MediasPhotos />
                    </div>
                    <div className='-mt-2'>
                        <BunlariBegenebilirsin />
                    </div>

                    <div className='px-2'>
                        <IlginiCekebilecekGundemler />
                    </div>


                    <SidebarFooter />
                </div>
            </>
        );
        mainContent = (
            <>
                <Outlet />
            </>
        )

    }
    else if (
        !location.pathname.includes('discover') &&
        !location.pathname.includes('profilePage') &&
        !location.pathname.includes('lists') &&
        !location.pathname.includes('bookmarks') &&
        !location.pathname.includes('notifications') &&
        !location.pathname.includes('messages')
    ) {
        sidebarContent = (
            <>
                <HeaderInput />
                <div className='px-4 mt-8'>
                    <PremiumSubscription />
                    <div className='px-2'>
                        <IlginiCekebilecekGundemler />
                    </div>
                    <KimiTakipEtmeli />
                    <SidebarFooter />
                </div>
            </>

        );
        mainContent = (
            <>
                <Outlet />
            </>
        )
    } else if (location.pathname.includes('/discover')) {
        sidebarContent = (
            <div className='px-4 '>
                <KimiTakipEtmeli />


                <SidebarFooter />
            </div>
        );
        mainContent = (
            <>
                <Outlet />
            </>
        )
    }
    else if (location.pathname.includes('/notifications')) {
        sidebarContent = (
            <>
                <HeaderInput />
                <div className='px-4 pt-16'>

                    <div className='pl-2'>
                        <IlginiCekebilecekGundemler />
                    </div>

                    <KimiTakipEtmeli />

                    <SidebarFooter />
                </div>
            </>

        );
        mainContent = (
            <>
                <Outlet />
            </>
        )
    }
    else if (location.pathname.includes('/lists')) {
        sidebarContent = (
            <>
                <div className='z-0 '>
                    <HeaderInput />

                </div>
                <div className='px-4 pt-16'>
                    <div className='pl-2'>
                        <IlginiCekebilecekGundemler />
                    </div>
                    <KimiTakipEtmeli />

                    <SidebarFooter />
                </div>
            </>
        );
        mainContent = (
            <>
                <Outlet />
            </>
        )
    }
    else if (location.pathname.includes('/messages')) {
        mainContainerClassName = 'overflow-y-hidden';
        mainContent = null

        sidebarContent = null
        messagesMain = (
            <>
                <div className=' w-full h-full'>
                    <Messages />

                </div>






            </>
        )
    }


    return (
        <div className="w-[1200px]  mx-auto max-w-full flex mt-2 h-auto">
            <div className='fixed top-0  bg-white h-full'>
                <LeftNavigation />
            </div>

            <div className='flex flex-1 w-full h-full'>
                <main className='flex-1 h-full '>
                    {messagesMain}
                    <div className='flex  '>

                        <div className='flex   w-[850px] '>
                            {mainContent}



                        </div>
                        {location.pathname !== '/messages' && (
                            <aside className='w-[580px] border-l border-gray-100 pl-1 '>
                                {sidebarContent}
                            </aside>)}
                    </div>
                </main>
            </div>
        </div>
    );
}
