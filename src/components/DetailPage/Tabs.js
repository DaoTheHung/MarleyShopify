import React, { useState } from 'react'
import Description from './Description'
import Information from './Information'
import Reviews from './Reviews'

export default function Tabs() {
    const [type, setType] = useState("Product Description")
    const tabs = [
        {
            name: "Product Description"
        },
        {
            name: "Additional information"
        },
        {
            name: "Reviews"
        },
    ]
    return (
        <div className='w-full md:w-[1418px] lg:w-full md:mt-[45px] lg:mt-[45px]'>
            <div className='flex gap-[5px] ip:items-center md:m-auto  lg:m-auto  md:w-[1211px]  mt-[50px] md:px-0 ip:px-[50px]   sm:flex-row  ip:flex-col md:flex-row lg:flex-row'>
                {
                    tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setType(tab.name)}
                            style={type === tab.name ? { background: "#1a1a1a" } : {}}
                            className='transition  ip:w-[308px] duration-[300ms] py-[17px] px-[40px] bg-pink-500 md:text-[20px] ip:text-[18px] hover:bg-[#1a1a1a] text-[#fff]'>
                            {tab.name}
                        </button>
                    ))
                }

            </div>

            <div className='border ml-[199px] ip:w-[308px] sm:w-[86%] ip:mt-[20px] md:w-[1211px]  p-[30px] ip:ml-[59px] md:m-auto'>
                {type === "Product Description" && <Description />}
                {type === "Additional information" && <Information />}
                {type === "Reviews" && <Reviews />}

            </div>
        </div>
    )
}
