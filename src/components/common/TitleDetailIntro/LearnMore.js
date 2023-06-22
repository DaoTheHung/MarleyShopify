import React from 'react'
import { Button } from '../hook/Button'

export default function LearnMore() {
    return (

        <div className="md:bg-[url('https://cdn.shopify.com/s/files/1/0434/2520/2335/files/wide-banner_362654f3-dcb6-46e3-88a4-0ed839703d2b.jpg?v=1631093376')] bg-[#ef6d9f8a] relative ip:w-[404px] sm:w-[425px] md:w-full h-[653px] md:h-[850px] top-[437px] md:top-[705px]  bg-cover">
            <div className='md:w-[503px] mt-[61px] absolute top-[46px]  md:left-[323px]'>
                <div className='flex flex-col gap-[44px] md:ml-auto ml-[60px]'>
                    <div className='md:w-[35px] md:h-[6px] w-[26px] h-[5px] rounded-[5px] bg-pink-500'></div>
                    <h3 className='text-[#1a1a1a] text-[39px] md:text-[44px] w-[315px] md:w-[423px] font-bold leading-[66px] tracking-[3px]'>
                        Go to Adventures You've Only Dreamt of...
                    </h3>
                    <p className='text-[#9e9999] hidden md:block text-[22px] w-[439px] leading-[40px]'>
                        Aliquet sagittis id consectetur purus ut.
                        Orci ac auctor augue mauris augue neque gravida in fermentum.
                        Elit eget gravida cum sociis natoque penatibus.
                    </p>
                </div>
                <Button learn="Learn more" />
            </div>
        </div>

    )
}
