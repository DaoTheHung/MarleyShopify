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
        <div className='w-full'>
            <div className=' flex gap-[5px] mt-[50px] ml-[199px]'>
                {
                    tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setType(tab.name)}
                            style={type === tab.name ? { background: "#1a1a1a" } : {}}
                            className='transition duration-[300ms] py-[17px] px-[40px] bg-pink-500 text-[20px] hover:bg-[#1a1a1a] text-[#fff]'>
                            {tab.name}
                        </button>
                    ))
                }

            </div>

            <div className='border ml-[199px] w-[1211px] p-[30px]'>
                {type === "Product Description" && <Description />}
                {type === "Additional information" && <Information />}
                {type === "Reviews" && <Reviews />}

            </div>
        </div>
    )
}
