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
        <div className='w-full md:w-[866px] lg:w-full md:mt-[45px] lg:mt-[45px]'>
            <div className='flex gap-[5px] items-center md:m-auto  lg:m-auto  w-full mt-[50px] xl:w-[1209px] md:px-0 px-[50px] xl:justify-start justify-center  sm:flex-row  flex-col md:flex-row lg:flex-row'>
                {
                    tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setType(tab.name)}
                            style={type === tab.name ? { background: "#1a1a1a" } : {}}
                            className='transition  w-[308px] duration-[300ms] py-[17px] px-[40px] bg-pink-500 md:text-[20px] text-[18px] hover:bg-[#1a1a1a] text-[#fff]'>
                            {tab.name}
                        </button>
                    ))
                }

            </div>

            <div className='border  w-[82.5%] mt-[20px] xl:w-[1211px]  p-[30px]  m-auto'>
                {type === "Product Description" && <Description />}
                {type === "Additional information" && <Information />}
                {type === "Reviews" && <Reviews />}

            </div>
        </div>
    )
}
