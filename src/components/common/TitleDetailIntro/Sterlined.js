import React from 'react'
import { Button } from '../hook/Button'
import Link from 'next/link'


export default function Sterlined() {
    return (
        <div>
            <div className='relative mx-auto flex flex-col items-center lg:items-start lg:m-auto w-[90%] xl:w-[1097px] bottom-[-15rem] lg:bottom-[-27rem] '>
                <div className=''>
                    <div className=' lg:w-[35px] lg:h-[6px] w-[26px] h-[5px]  rounded-[5px] bg-pink-500'></div>
                    <h3 className='sm:w-[70%] cursor: default w-[259px]  lg:w-[512px] text-[#1a1a1a] text-[39px]  lg:text-[40px] font-bold leading-[66px] tracking-[3px] mt-[21px] mb-[72px]'>
                        Sterlined Headphone
                        Style 2021
                    </h3>
                </div>

                <div className='flex flex-col-reverse md:flex-col-reverse lg:w-full gap-6  xl:flex-row-reverse justify-between'>
                    <div className='lg:w-1/2 mt-[53px] '>
                        <div className='flex flex-col gap-[44px] lg:ml-auto '>

                            <p className=' text-[#9e9999]  text-[20px]  lg:text-[21px] w-[306px] sm:w-[92%]  lg:w-[467px] leading-[40px]'>
                                Blandit aliquam etiam erat velit. Mi proin sed libero enim sed faucibus.
                                Faucibus pulvinar elementum integer enim neque volutpat.
                                Euismod in pellentesque massa placerat duis ultricies lacus sed turpis.
                                Aliquet porttitor lacus luctus accumsan tortor posuere. Nisl purus in mollis nunc sed id semper risus. Ultrices neque ornare aenean.
                            </p>
                        </div>
                        <Link className="text-black" href="/collections/all">
                            <div className='lg:w-[374px]'>

                                <Button shop="shop now" />
                            </div>
                        </Link>
                    </div>
                    <div className=' flex justify-center sm:m-auto lg:w-[614px] ip:w-[252px]  lg:ml-0 ip:ml-[60px]'>

                        <div className='w-[319px] lg:w-[100%]' >
                            <img className=' w-full' src="//cdn.shopify.com/s/files/1/0434/2520/2335/files/section-image_970x.png?v=1614349741" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
