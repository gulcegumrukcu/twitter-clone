import React, { useState } from 'react';


import TumuTab from './TumuTab';
import BahsedenlerTab from './BahsedenlerTab';
import OnaylanmisTab from './OnaylanmisTab';



const NotificationContainer = () => {
    const [activeTab, setActiveTab] = useState(1);

    const renderTabContent = () => {
        switch (activeTab) {
            case 1:
                return <TumuTab />;
            case 2:
                return <OnaylanmisTab />;
            case 3:
                return <BahsedenlerTab />;

            default:
                return none;
        }
    };

    return (
        <div className='pt-12 '>
            <div className='flex fixed justify-evenly w-[600px] border-b h-12 text-sm items-center font-semibold text-gray-500 bg-white  ml-2'>
                <span className={`hover:bg-[#f1f2f1] w-full h-full justify-center flex ${activeTab === 1 ? 'active-tab' : ''}`}>
                    <button className={` ${activeTab === 1 ? 'border-b-4 border-b-[#4595f4] text-black active:border-b-full' : ''}`} onClick={() => setActiveTab(1)}>Tümü</button>
                </span>
                <span className={`hover:bg-[#f1f2f1] w-full h-full justify-center flex ${activeTab === 2 ? 'active-tab' : ''}`}>
                    <button className={` ${activeTab === 2 ? 'border-b-4 border-b-[#4595f4] text-black active:border-b-full' : ''}`} onClick={() => setActiveTab(2)}>Onaylanmış</button>
                </span>
                <span className={`hover:bg-[#f1f2f1] w-full h-full justify-center flex ${activeTab === 3 ? 'active-tab' : ''}`}>
                    <button className={` ${activeTab === 3 ? 'border-b-4 border-b-[#4595f4] text-black active:border-b-full' : ''}`} onClick={() => setActiveTab(3)}>Bahsedenler</button>
                </span>

            </div>

            <div className='mt-12'>
                {renderTabContent()}
            </div>

        </div>
    );
};

export default NotificationContainer;
