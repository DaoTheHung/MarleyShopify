import React from 'react'
import { Button } from '../hook/Button'


export default function Sterlined() {
    return (
        <div>
            <div className='relative bottom-[-76rem] mb-[190px] ml-[195px] mr-[245px] '>
                <div className='w-[35px] h-[6px] rounded-[5px] bg-pink-500'></div>
                <h3 className='cursor: default w-[512px] text-[#1a1a1a] text-[44px] font-bold leading-[66px] tracking-[3px] mt-[21px] mb-[72px]'>
                    Sterlined Headphone
                    Style 2021
                </h3>

                <div className='flex flex-row-reverse justify-between'>
                    <div className='w-[503px] mt-[53px]'>
                        <div className='flex flex-col gap-[44px]'>

                            <p className=' text-[#9e9999] text-[22px] w-[467px] leading-[40px]'>
                                Blandit aliquam etiam erat velit. Mi proin sed libero enim sed faucibus.
                                Faucibus pulvinar elementum integer enim neque volutpat.
                                Euismod in pellentesque massa placerat duis ultricies lacus sed turpis.
                                Aliquet porttitor lacus luctus accumsan tortor posuere. Nisl purus in mollis nunc sed id semper risus. Ultrices neque ornare aenean.
                            </p>
                        </div>
                        <Button shop="shop now" />
                    </div>
                    <div className='w-[554px] '>

                        <div className='w-[100%]' >
                            <img className=' w-full' src="//cdn.shopify.com/s/files/1/0434/2520/2335/files/section-image_970x.png?v=1614349741" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
