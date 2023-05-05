import React from 'react'
import { Button } from '../hook/Button'

export default function LearnMore() {
    return (
        <div>
            <div className="bg-[url('https://cdn.shopify.com/s/files/1/0434/2520/2335/files/wide-banner_362654f3-dcb6-46e3-88a4-0ed839703d2b.jpg?v=1631093376')] relative w-full h-[850px] top-[1086px] bg-cover">
                <div className='w-[503px] mt-[61px] absolute top-[46px] left-[323px]'>
                    <div className='flex flex-col gap-[44px]'>
                        <div className='w-[35px] h-[6px] rounded-[5px] bg-pink-500'></div>
                        <h3 className='text-[#1a1a1a] text-[44px] w-[423px] font-bold leading-[66px] tracking-[3px]'>
                            Go to Adventures You've Only Dreamt of...
                        </h3>
                        <p className='text-[#9e9999] text-[22px] w-[439px] leading-[40px]'>
                            Aliquet sagittis id consectetur purus ut.
                            Orci ac auctor augue mauris augue neque gravida in fermentum.
                            Elit eget gravida cum sociis natoque penatibus.
                        </p>
                    </div>
                    <Button learn="Learn more" />
                </div>
            </div>
        </div>
    )
}
