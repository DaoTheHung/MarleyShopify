import React from 'react'

export default function LearnMore() {
    return (
        <div>
            <div className='bg-learn-more relative w-full h-[850px] top-[1086px] bg-cover'>
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
                    <button className='mt-[52px] text-[21px] py-[20px] text-pink-500 transition-colors duration-300
                font-semibold px-[40px] border-[4px] border-pink-500 hover:bg-pink-500 hover:text-[#fff] 
                uppercase tracking-[3px] w-[256px]'>LEARN MORE</button>
                </div>
            </div>
        </div>
    )
}
