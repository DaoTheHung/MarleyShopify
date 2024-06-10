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
        <div >
            <div className=' flex justify-between mt-[75px]   lg:gap-[93px] lg:w-full flex-col md:flex-col items-center xl:flex-row lg:justify-center'>
                <div className='lg:w-[503px]  mt-[61px] mb-[90px] lg:mb-auto'>
                    <div className='flex sm:w-[655px]  lg:m-auto lg:w-auto flex-col gap-[44px]'>
                        <div className='lg:w-[35px] lg:h-[6px] w-[26px] h-[5px] rounded-[5px] bg-pink-500'></div>
                        <h3 className='text-[#1a1a1a]  w-[290px] lg:w-auto text-[44px] font-semibold lg:font-bold leading-[66px] tracking-[3px]'>
                            Loud & Clear
                            <br />
                            Music
                        </h3>
                        <p className='text-[#9e9999]  lg:w-[513px] text-[20px] lg:text-[22px] w-[290px]  \leading-[40px]'>
                            Hendrerit gravida rutrum quisque non tellus orci ac.
                            Tellus molestie nunc non blandit massa enim nec.
                            Et netus et malesuada fames ac turpis egestas sed tempus.
                            Sit amet risus nullam eget felis eget nunc. Viverra justo nec ultrices dui sapien eget mi proin.
                        </p>
                    </div>
                    <Link className="text-black" href="/collections/all">
                        <div className='sm:w-[350px]'>
                            <Button shop="shop now" className="text-black" />
                        </div>
                    </Link>
                </div>
                <div className='w-[313px]  lg:w-[596px]  lg:m-0'>
                    <Swiper
                        pagination={PaginationSlide}
                    // modules={[Pagination]}
                    >

                        {slideTitles.map((image, index) => (
                            <SwiperSlide>
                                <div key={index} className='lg:w-full ip:rounded-tr-[80px] rounded-bl-[80px] ' >
                                    <img className='rounded-bl-[80px] w-full h-[410px] lg:h-[680px] object-cover' src={image.image} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className='flex justify-between mt-[97px]  lg:gap-[93px] lg:w-full flex-col lg:flex-col items-center xl:flex-row-reverse lg:justify-center'>
                <div className='lg:w-[503px]   lg:mt-[61px] mb-[90px] lg:mb-auto'>
                    <div className='flex flex-col gap-[44px] lg:ml-auto'>
                        <div className='lg:w-[35px] lg:h-[6px] w-[26px] h-[5px] rounded-[5px] bg-pink-500'></div>
                        <h3 className='text-[#1a1a1a] w-[290px]   text-[44px] font-semibold lg:font-bold lg:w-[104%] leading-[66px] tracking-[3px]'>
                            Get in the Zone with your favorite music

                        </h3>
                        <p className='text-[#9e9999]  text-[20px] lg:text-[22px] w-[290px] lg:w-[467px] leading-[40px]'>
                            Mattis aliquam faucibus purus in massa tempor nec. Pulvinar etiam non quam lacus.
                            Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat.
                            Non blandit massa enim nec dui nunc mattis enim. Donec enim diam vulputate ut pharetra sit amet aliquam id.
                        </p>
                    </div>
                    <Link className="text-black" href="/collections/all">
                        <div className='sm:w-[350px]'>
                            <Button shop="shop now" className="text-black" />
                        </div>
                    </Link>
                </div>
                <div className='w-[327px] sm:w-[92%] ip:w-[325px]   lg:w-[555px] ip:ml-[60px] ml-[44px]  lg:m-0'>
                    <Swiper
                        modules={[Pagination]}
                    >
                        {slideTitles2.map((image, index) => (
                            <SwiperSlide>
                                <div key={index} className='w-[91%] ' >
                                    <img className='rounded-tr-[80px] w-full h-[410px] lg:h-[680px] object-cover' src={image.image} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <LearnMore />

            <Sterlined />

            <Comfort />



        </div>
    )
}
