import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { slideTitles, slideTitles2 } from '../common/DataSlide/DataSlide'
import { PaginationSlide } from '../common/DataSlide/DataSlide';
import LearnMore from '../common/TitleDetailIntro/LearnMore';
import Sterlined from '../common/TitleDetailIntro/Sterlined';
import Comfort from '../common/TitleDetailIntro/Comfort';
import { Button } from '../common/hook/Button';
export default function TitlePage() {
    return (
        <>
            <div className=' flex justify-between flex-col md:flex-row md:mx-[234px]'>
                <div className='w-[503px] mt-[61px] mb-[90px] md:mb-auto'>
                    <div className='flex w-[374px] m-auto md:m- md:w-auto flex-col gap-[44px]'>
                        <div className='w-[35px] h-[6px] rounded-[5px] bg-pink-500'></div>
                        <h3 className='text-[#1a1a1a] w-[290px] md:w-auto text-[44px] font-semibold md:font-bold leading-[66px] tracking-[3px]'>
                            Loud & Clear
                            <br />
                            Music
                        </h3>
                        <p className='text-[#9e9999] text-[20px] md:text-[22px] w-[290px]  md:w-[467px] leading-[40px]'>
                            Hendrerit gravida rutrum quisque non tellus orci ac.
                            Tellus molestie nunc non blandit massa enim nec.
                            Et netus et malesuada fames ac turpis egestas sed tempus.
                            Sit amet risus nullam eget felis eget nunc. Viverra justo nec ultrices dui sapien eget mi proin.
                        </p>
                    </div>
                    <Link className="text-black" href="/collections/all">
                        <Button shop="shop now" className="text-black" />
                    </Link>
                </div>
                <div className='w-[364px] md:w-[554px] m-auto md:m-0'>
                    <Swiper
                        pagination={PaginationSlide}
                    // modules={[Pagination]}
                    >

                        {slideTitles.map((image, index) => (
                            <SwiperSlide>
                                <div key={index} className='w-[91%] rounded-bl-[80px] ' >
                                    <img className='rounded-bl-[80px] w-full h-[410px] md:h-[680px] object-cover' src={image.image} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className='relative bottom-[-15rem]  md:bottom-[-53rem] flex-col md:flex-row-reverse m-auto md:mx-[234px] flex justify-between'>
                <div className='w-[503px]  md:mt-[61px] mb-[90px] md:mb-auto'>
                    <div className='flex flex-col gap-[44px] ml-[62px] md:ml-auto'>
                        <div className='w-[35px] h-[6px] rounded-[5px] bg-pink-500'></div>
                        <h3 className='text-[#1a1a1a] w-[290px]  text-[44px] font-semibold md:font-bold md:w-[104%] leading-[66px] tracking-[3px]'>
                            Get in the Zone with your favorite music

                        </h3>
                        <p className='text-[#9e9999] text-[20px] md:text-[22px] w-[290px] md:w-[467px] leading-[40px]'>
                            Mattis aliquam faucibus purus in massa tempor nec. Pulvinar etiam non quam lacus.
                            Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat.
                            Non blandit massa enim nec dui nunc mattis enim. Donec enim diam vulputate ut pharetra sit amet aliquam id.
                        </p>
                    </div>
                    <Link className="text-black" href="/collections/all">
                        <Button shop="shop now" />
                    </Link>
                </div>
                <div className='w-[364px] md:w-[554px] ml-[44px]  md:m-0'>
                    <Swiper
                        modules={[Pagination]}
                    >
                        {slideTitles2.map((image, index) => (
                            <SwiperSlide>
                                <div key={index} className='w-[91%]' >
                                    <img className='rounded-tr-[80px] w-full h-[410px] md:h-[680px] object-cover' src={image.image} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <LearnMore />

            <Sterlined />

            <Comfort />



        </>
    )
}
