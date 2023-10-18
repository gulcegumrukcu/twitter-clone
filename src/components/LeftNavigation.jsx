import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import classNames from "classnames"
import VerifiedButton from './buttons/VerifiedButton';
import GonderButton from './buttons/GonderButton';

function LeftNavigation() {



    return (

        <aside className="w-[250px]  h-full flex-shrink-0 flex flex-col  border-r border-gray-200  gap-1.5 ">

            <a className='im' href="/">
                <img className='w-7 h-[26px] mb-3 cursor-pointer flex mt-2 bg-white ml-4' src="/img/navigation/icon-logo.png" alt="" />
            </a>

            <NavLink className="text-sm group" to="/">
                {({ isActive }) => (
                    <div className={classNames("h-[50px] transition-colors px-4 inline-flex rounded-full text-xl items-center gap-5 group-hover:bg-gray-200", {
                        "font-bold": isActive
                    })}>
                        {!isActive && (
                            <img src="/img/navigation/icon-home.png" alt="" />
                        )}
                        {isActive && (
                            <img src="/img/navigation/icon-home-hovered.png" alt="" />
                        )}

                        <div className='pt-0.5 -ml-1'>
                            Anasayfa
                        </div>

                    </div>
                )}
            </NavLink>
            <NavLink className="text-sm group" to="/discover">
                {({ isActive }) => (
                    <div className={classNames("h-[50px] transition-colors px-4 inline-flex rounded-full text-xl items-center gap-5 group-hover:bg-gray-200", {
                        "font-bold": isActive
                    })}>
                        {!isActive && (
                            <img src='/img/navigation/icon-discover.png' alt='' />
                        )}
                        {isActive && (
                            <img src='/img/navigation/icon-discover-hovered.png' alt='' />
                        )}
                        Keşfet
                    </div>
                )}
            </NavLink>
            <NavLink className="text-sm group" to="/notifications">
                {({ isActive }) => (
                    <div className={classNames("h-[50px] transition-colors px-4 inline-flex rounded-full text-xl items-center gap-5 group-hover:bg-gray-200", {
                        "font-bold": isActive
                    })}>
                        {!isActive && (
                            <img src="/img/navigation/icon-notif.png" alt="" />
                        )}
                        {isActive && (
                            <img src="/img/navigation/icon-notif-hovered.png" alt="" />
                        )}
                        Bildirimler
                    </div>
                )}
            </NavLink>
            <NavLink className="text-sm group" to="/messages">
                {({ isActive }) => (
                    <div className={classNames("h-[50px] transition-colors px-4 inline-flex rounded-full text-xl items-center gap-5 group-hover:bg-gray-200", {
                        "font-bold": isActive
                    })}>
                        {!isActive && (
                            <img src='/img/navigation/icon-message.png' alt='' />
                        )}
                        {isActive && (
                            <img src='/img/navigation/icon-message-hovered.png' alt='' />
                        )}
                        Mesajlar
                    </div>
                )}
            </NavLink>
            <NavLink className="text-sm group" to="/lists">
                {({ isActive }) => (
                    <div className={classNames("h-[50px] transition-colors px-4 inline-flex rounded-full text-xl items-center gap-5 group-hover:bg-gray-200", {
                        "font-bold": isActive
                    })}>
                        {!isActive && (
                            <img src='/img/navigation/icon-list.png' alt="" />
                        )}
                        {isActive && (
                            <img src='/img/navigation/icon-list-hovered.png' alt="" />
                        )}
                        Listeler
                    </div>
                )}
            </NavLink>
            <div className="flex h-8 text-sm group mb-4 ">
                <VerifiedButton />
            </div>
            <NavLink className="text-sm group" to="/ProfilePage">
                {({ isActive }) => (
                    <div className={classNames("h-[50px] transition-colors px-4 inline-flex rounded-full text-xl items-center gap-5 group-hover:bg-gray-200", {
                        "font-bold": isActive
                    })}>
                        {!isActive && (
                            <img src='/img/navigation/icon-profile.png' alt='' />
                        )}
                        {isActive && (
                            <img src='/img/navigation/icon-profile-hovered.png' alt='' />
                        )}
                        Profil
                    </div>
                )}
            </NavLink>

            <div className="flex mt-1">
                <button className="text-[20px] text-gray-900 hover:bg-gray-200 rounded-3xl px-4  flex items-center h-[50px]">
                    <img src='/img/navigation/icon-more.png' className='w-6 h-6' />
                    <span className='ml-4'>Daha Fazla</span>
                </button>
            </div>

            <div className="flex justify-start ">
                <GonderButton />
            </div>
            <div className="flex  ">
                <div className="flex fixed -z-10 bottom-2 -ml-4 hover.bg-gray-100 w-[275px] h-16 rounded-full cursor-pointer justify-center items-center  ">
                    <img className="w-10 h-10 rounded-full " src="/img/navigation/profile-picture.jpeg" alt="" />
                    <div className="ml-3 ">
                        <h3 className="font-semibold">Kara Paytak</h3>
                        <p className="text-sm">@karapaytak</p>
                    </div>
                    <img className="w-4 h-4 ml-12" src="/img/navigation/icon-settings.png" alt="" />
                </div>
            </div>



        </aside>




    )
}

export default LeftNavigation;



