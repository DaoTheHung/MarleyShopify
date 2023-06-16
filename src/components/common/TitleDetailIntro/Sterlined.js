import React from 'react'
import { Button } from '../hook/Button'
import Link from 'next/link'


export default function Sterlined() {
    return (
        <div>
            <div className='relative sm:w-[408px] md:w-[1097px] bottom-[-37rem] md:bottom-[-67rem] md:mb-[190px] md:ml-[195px] md:mr-[245px] '>
                <div className='ml-[60px]'>
                    <div className=' md:w-[35px] md:h-[6px] w-[26px] h-[5px]  rounded-[5px] bg-pink-500'></div>
                    <h3 className='cursor: default w-[259px]  md:w-[512px] text-[#1a1a1a] text-[39px] md:text-[44px] font-bold leading-[66px] tracking-[3px] mt-[21px] mb-[72px]'>
                        Sterlined Headphone
                        Style 2021
                    </h3>
                </div>

                <div className='flex flex-col-reverse md:flex-row-reverse justify-between'>
                    <div className='md:w-[503px] mt-[53px] '>
                        <div className='flex flex-col gap-[44px] md:ml-auto ml-[60px]'>

                            <p className=' text-[#9e9999] text-[20px] md:text-[22px] w-[306px] md:w-[467px] leading-[40px]'>
                                Blandit aliquam etiam erat velit. Mi proin sed libero enim sed faucibus.
                                Faucibus pulvinar elementum integer enim neque volutpat.
                                Euismod in pellentesque massa placerat duis ultricies lacus sed turpis.
                                Aliquet porttitor lacus luctus accumsan tortor posuere. Nisl purus in mollis nunc sed id semper risus. Ultrices neque ornare aenean.
                            </p>
                        </div>
                        <Link className="text-black" href="/collections/all">
                            <div className='md:w-[374px]'>

                                <Button shop="shop now" />
                            </div>
                        </Link>
                    </div>
                    <div className='md:w-[554px] w-[252px] md:ml-auto ml-[60px]'>

                        <div className='w-[100%]' >
                            <img className=' w-full' src="//cdn.shopify.com/s/files/1/0434/2520/2335/files/section-image_970x.png?v=1614349741" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
