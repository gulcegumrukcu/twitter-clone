import React, { useState } from 'react';
import GonderilerTab from './GonderilerTab';
import YanitlarTab from './YanitlarTab';
import OneCikanlarTab from './OneCikanlarTab';
import MedyaTab from './MedyaTab';
import BegeniTab from './BegeniTab';


const TabsContainer = () => {
    const [activeTab, setActiveTab] = useState(1);

    const renderTabContent = () => {
        switch (activeTab) {
            case 1:
                return <GonderilerTab />;
            case 2:
                return <YanitlarTab />;
            case 3:
                return <OneCikanlarTab />;
            case 4:
                return <MedyaTab />;
            case 5:
                return <BegeniTab />;
            default:
                return null;
        }
    };

    return (
        <div className=''>
            <div className='flex  justify-evenly w-full h-12 text-sm items-center font-semibold text-gray-500 mt-6 ml-2'>
                <span className={`hover:bg-[#f1f2f1] w-full h-full justify-center flex ${activeTab === 1 ? 'active-tab' : ''}`}>
                    <button className={` ${activeTab === 1 ? 'border-b-4 border-b-[#4595f4] text-black active:border-b-full' : ''}`} onClick={() => setActiveTab(1)}>Gönderiler</button>
                </span>
                <span className={`hover:bg-[#f1f2f1] w-full h-full justify-center flex ${activeTab === 2 ? 'active-tab' : ''}`}>
                    <button className={` ${activeTab === 2 ? 'border-b-4 border-b-[#4595f4] text-black active:border-b-full' : ''}`} onClick={() => setActiveTab(2)}>Yanıtlar</button>
                </span>
                <span className={`hover:bg-[#f1f2f1] w-full h-full justify-center flex ${activeTab === 3 ? 'active-tab' : ''}`}>
                    <button className={` ${activeTab === 3 ? 'border-b-4 border-b-[#4595f4] text-black active:border-b-full' : ''}`} onClick={() => setActiveTab(3)}>Öne Çıkanlar</button>
                </span>
                <span className={`hover:bg-[#f1f2f1] w-full h-full justify-center flex ${activeTab === 4 ? 'active-tab' : ''}`}>
                    <button className={` ${activeTab === 4 ? 'border-b-4 border-b-[#4595f4] text-black active:border-b-full' : ''}`} onClick={() => setActiveTab(4)}>Medya</button>
                </span>
                <span className={`hover:bg-[#f1f2f1] w-full h-full justify-center flex ${activeTab === 5 ? 'active-tab' : ''}`}>
                    <button className={` ${activeTab === 5 ? 'border-b-4 border-b-[#4595f4] text-black active:border-b-full' : ''}`} onClick={() => setActiveTab(5)}>Beğeni</button>
                </span>
            </div>

            {renderTabContent()}
        </div>
    );
};

export default TabsContainer;
