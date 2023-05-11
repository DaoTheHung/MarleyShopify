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
            <div className='relative bottom-[-53rem] mb-[190px] mx-[234px] flex justify-between'>
                <div className='w-[503px] mt-[61px]'>
                    <div className='flex flex-col gap-[44px]'>
                        <div className='w-[35px] h-[6px] rounded-[5px] bg-pink-500'></div>
                        <h3 className='text-[#1a1a1a] text-[44px] font-bold leading-[66px] tracking-[3px]'>
                            Loud & Clear
                            <br />
                            Music
                        </h3>
                        <p className='text-[#9e9999] text-[22px] w-[467px] leading-[40px]'>
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
                <div className='w-[554px] '>
                    <Swiper
                        pagination={PaginationSlide}
                    // modules={[Pagination]}
                    >

                        {slideTitles.map((image, index) => (
                            <SwiperSlide>
                                <div key={index} className='w-[91%] rounded-bl-[80px] ' >
                                    <img className='rounded-bl-[80px] w-full h-[680px] object-cover' src={image.image} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className='relative bottom-[-53rem] flex-row-reverse  mx-[234px] flex justify-between'>
                <div className='w-[503px] mt-[61px]'>
                    <div className='flex flex-col gap-[44px]'>
                        <div className='w-[35px] h-[6px] rounded-[5px] bg-pink-500'></div>
                        <h3 className='text-[#1a1a1a] text-[44px] font-bold w-[104%] leading-[66px] tracking-[3px]'>
                            Get in the Zone with your favorite music

                        </h3>
                        <p className='text-[#9e9999] text-[22px] w-[467px] leading-[40px]'>
                            Mattis aliquam faucibus purus in massa tempor nec. Pulvinar etiam non quam lacus.
                            Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat.
                            Non blandit massa enim nec dui nunc mattis enim. Donec enim diam vulputate ut pharetra sit amet aliquam id.
                        </p>
                    </div>
                    <Link className="text-black" href="/collections/all">
                        <Button shop="shop now" />
                    </Link>
                </div>
                <div className='w-[554px] '>
                    <Swiper
                        modules={[Pagination]}
                    >
                        {slideTitles2.map((image, index) => (
                            <SwiperSlide>
                                <div key={index} className='w-[91%]' >
                                    <img className='rounded-tr-[80px] w-full h-[680px] object-cover' src={image.image} />
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
