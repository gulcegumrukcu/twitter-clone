
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
            <div className='px-4 mt-16'>
                <MediasPhotos />
                <BunlariBegenebilirsin />
                <div className='px-2'>
                    <IlginiCekebilecekGundemler />
                </div>


                <SidebarFooter />
            </div>
        );
    } else {
        // Otherwise, render only KimiTakipEtmeli
        sidebarContent = <KimiTakipEtmeli />;
    }


    return (
        <div className="w-[1200px] mx-auto max-w-full flex mt-2 h-screen">
            <div className='fixed top-0 bg-white h-full'>
                <LeftNavigation />
            </div>

            <div className='flex flex-1 w-full h-full'>
                <main className='flex-1 h-full'>
                    <div className='flex h-screen '>
                        <div className='flex  h-screen w-full '>
                            <Outlet />



                        </div>
                        <aside className='w-[580px] border-l border-gray-200 pl-4 '>
                            <HeaderInput />
                            {sidebarContent}
                        </aside>
                    </div>
                </main>
            </div>
        </div>
    );
}
