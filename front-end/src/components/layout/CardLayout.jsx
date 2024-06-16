import React, { useState } from 'react';
import TextHeader from '../atom/TextHeader';
import Card from '../atom/Card';

import data from '../../utils/dummy';
import iconBoy from './../../assets/card/boy.svg'
import iconGirl from './../../assets/card/girl.svg'
import MineralCalcu from './calculator/MineralCalcu';
import CaloriesCalcu from './calculator/CaloriesCalcu';
import GreaseCalcu from './calculator/GreaseCalcu';
import BMICalcu from './calculator/BMICalcu';


export default function CardLayout({ onTabsActive }) {
    // Ambil placeholder dan satuan dari data atau tetapkan nilai default
    const placeholder = "Enter value"; // Ganti dengan nilai yang sesuai dari `data.calculator[0]`
    const satuan = "unit"; // Ganti dengan nilai yang sesuai dari `data.calculator[0]`

    const dataTabs = [
        {
            id: 0,
            label: 'Mineral Check',
            content: <MineralCalcu />
        },
        {
            id: 1,
            label: 'Calories Check',
            content: <CaloriesCalcu/>
        },
        {
            id: 2,
            label: 'Grease Check',
            content: <GreaseCalcu/>
        },
        {
            id: 3,
            label: 'Body Mass Index',
            content: <BMICalcu/>
        },

    ]
    const [tabsActive, setTabActive] = useState(0)

    const handleTabsActive = (id) => {
        setTabActive(id)
        if (onTabsActive) {
            onTabsActive(id)
        }
    }

    onTabsActive = (id) => {
        idTabs = id
    }


    return (
        <div>
            <div className='flex flex-col bg-transparent w-full'>
                <div className="flex flex-col justify-center items-center mb-8 w-full">
                    <TextHeader>Check Your Healthy</TextHeader>
                    <div role="tablist" className="tabs tabs-bordered gap-x-8 mt-2">
                        {
                            dataTabs.map((data) => (
                                <a role="tab"
                                    className={`tab text-xl font-semibold ${tabsActive === data.id ? 'tab-active text-black-500' : 'text-neutral'}`}
                                    onClick={() => handleTabsActive(data.id)} >{data.label}</a>
                            ))
                        }
                    </div>


                    <div className="bg-[#d8ecff8b] w-full text-black text-5xl mt-8">
                        {dataTabs[tabsActive].content}
                    </div>
                </div>
            </div>

        </div>
    )
}
