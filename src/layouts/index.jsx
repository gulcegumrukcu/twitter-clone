
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import LeftNavigation from '../components/LeftNavigation';
import IlginiCekebilecekGundemler from '../components/right-nav/IlginiCekebilecekGundemler'
import KimiTakipEtmeli from '../components/right-nav/KimiTakipEtmeli'
import PremiumSubscription from '../components/right-nav/PremiumSubscription'
import SidebarFooter from '../components/right-nav/SidebarFooter'
import HeaderInput from '../components/HeaderInput'
import MediasPhotos from '../components/right-nav/MediasPhotos';
import BunlariBegenebilirsin from '../components/right-nav/BunlariBegenebilirsin';

export default function MainLayout() {
    const location = useLocation();

    let sidebarContent;

    if (location.pathname.includes('/ProfilePage')) {
        // If the path includes '/ProfilePage', render both components
        sidebarContent = (
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
        );
    }
    else if (
        !location.pathname.includes('discover') &&
        !location.pathname.includes('profilePage') &&
        !location.pathname.includes('lists') &&
        !location.pathname.includes('bookmarks') &&
        !location.pathname.includes('verified') &&
        !location.pathname.includes('notifications')
    ) {
        sidebarContent = (
            <div className='px-4 mt-6'>
                <PremiumSubscription />
                <div className='px-2'>
                    <IlginiCekebilecekGundemler />
                </div>
                <KimiTakipEtmeli />
                <SidebarFooter />
            </div>
        );
    }

    return (
        <div className="w-[1200px] mx-auto max-w-full flex mt-2 h-screen">
            <div className='fixed top-0 bg-white h-full'>
                <LeftNavigation />
            </div>

            <div className='flex flex-1 w-full h-full'>
                <main className='flex-1 h-full'>
                    <div className='flex h-screen '>
                        <div className='flex  h-screen w-[850px] '>
                            <Outlet />



                        </div>
                        <aside className='w-[580px] border-l border-gray-100 pl-1 '>
                            <HeaderInput />
                            {sidebarContent}
                        </aside>
                    </div>
                </main>
            </div>
        </div>
    );
}
