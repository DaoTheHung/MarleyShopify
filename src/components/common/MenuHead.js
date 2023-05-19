import React, { useState } from 'react'

export const MenuHead = ({ top, opacity }) => {
    const dataName = [
        {
            title: "Circumaural",
            nameP1: "Bluetooth Headphone",
            nameP2: "Over Ear Headset",
            nameP3: "Closed Back Headset",
            nameP4: "Open-Back",
            nameP5: "On-Ear",
        },

        {
            title: "Ear-Fitting",
            nameP1: "Closed Front Headset",
            nameP2: "Red Headset",
            nameP3: "Blue Headset",
            nameP4: "Multi color Headset",
            nameP5: "Brown Headset",
        },

        {
            title: "In-Ear",
            nameP1: "Commando Headset",
            nameP2: "Stereo Bass",
            nameP3: "Over Ear",
            nameP4: "Bluetooth",
            nameP5: "Noise-Cancelling",
        },

        {
            title: "Mixed Fitting",
            nameP1: "HP BTP1 Headset",
            nameP2: "Wireless Headset",
            nameP3: "XM3 Headset",
            nameP4: "Wireless Earbuds",
            nameP5: "Music Headset",
        },
    ]



    return (
        <div className={`w-[80%] transition-opacity duration-700 py-[40px] px-[20px] opacity-[${opacity}]   bg-[#fff]  m-auto absolute left-0 right-0 ${top ? 'top-[110px]' : ' top-[100px]'}`}>
            <div className='flex justify-around'>
                {dataName.map(name => (

                    <div className='w-[280px]'>
                        <div className='border-b w-full cursor-pointer'>
                            <h3 className='text-[16px] font-semibold transition-color duration-300 hover:text-pink-500'>{name.title}</h3>

                        </div>
                        <div className='w-full mt-[27px] leading-[45px] cursor-pointer '>
                            <div className='text-[13px] transition-color duration-300 hover:text-pink-500'>{name.nameP1}</div>
                            <div className='text-[13px] transition-color duration-300 hover:text-pink-500'>{name.nameP2}</div>
                            <div className='text-[13px] transition-color duration-300 hover:text-pink-500'>{name.nameP3}</div>
                            <div className='text-[13px] transition-color duration-300 hover:text-pink-500'>{name.nameP4}</div>
                            <div className='text-[13px] transition-color duration-300 hover:text-pink-500'>{name.nameP5}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
