import React, { useState } from 'react';
import SanaOzelTab from './SanaOzelTab';
import TakipEdilenlerTab from './TakipEdilenlerTab';
import Tweet from './Tweet';



const HomepageContainer = () => {
    const [activeTab, setActiveTab] = useState(1);

    const renderTabContent = () => {
        switch (activeTab) {
            case 1:
                return <SanaOzelTab />;
            case 2:
                return <TakipEdilenlerTab />;

            default:
                return none;
        }
    };

    return (
        <div className=''>
            <div className='flex fixed justify-evenly w-[600px] border-b h-12 text-sm items-center font-semibold text-gray-500 -mt-2 ml-2'>
                <span className={`hover:bg-[#f1f2f1] w-full h-full justify-center flex ${activeTab === 1 ? 'active-tab' : ''}`}>
                    <button className={` ${activeTab === 1 ? 'border-b-4 border-b-[#4595f4] text-black active:border-b-full' : ''}`} onClick={() => setActiveTab(1)}>Sana özel</button>
                </span>
                <span className={`hover:bg-[#f1f2f1] w-full h-full justify-center flex ${activeTab === 2 ? 'active-tab' : ''}`}>
                    <button className={` ${activeTab === 2 ? 'border-b-4 border-b-[#4595f4] text-black active:border-b-full' : ''}`} onClick={() => setActiveTab(2)}>Takip Edilenler</button>
                </span>

            </div>
            <div className=''>
                <Tweet />
            </div>

            {renderTabContent()}
        </div>
    );
};

export default HomepageContainer;
