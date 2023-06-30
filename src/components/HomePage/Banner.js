import React, { useRef } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from '../common/DataSlide/DataSlide';

export default function Banner
    () {
    const slider = useRef()
    const settings = {
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className='relative top-[-110px]  ip:w-[425px]  sm:w-[420px] md:w-full lg:w-full  z-0 overflow-hidden cursor-grab'>
                <Slider ref={slider} {...settings} >
                    {slides.map((slide, index) => (

                        <div key={index}>
                            <div className='bg-[#181818da] md:hidden h-[447px] ip:w-[346px] absolute w-[340px] ml-[40px]'></div>

                            <div className='h-[448px] lg:h-[1004px] md:h-auto'>
                                <img className='h-full object-cover  lg:object-[0px] md:object-[1px] object-[-408px]' width="100%" src={slide.image} />
                            </div>

                            <div className='absolute lg:ml-[213px] lg:top-[282px] top-[173px] ip:ml-[96px] ml-[93px]  md:ml-[156px]'>
                                <h3 className='hidden md:block md:text-[65px] lg:text-[98px] text-white text-[70px]'>{slide.headerText}</h3>
                                <h3 className='ip:ml-[-13px] ip:text-[40px] md:ml-[-3px] lg:text-[133px] font-bold md:font-medium md:text-[87px] text-[#ff9cb2] mt-[14px] md:mt-[-7px]'>{slide.contentText}
                                    <span className='text-white'>{slide.spanText}</span>
                                </h3>
                                <h3 className='hidden  md:block lg:w-[809px] text-white md:w-[697px] leading-[40px] md:text-[21px] lg:mt-[22px] md:mt-[19px] font-normal'>{slide.lastText}</h3>
                                <button
                                    style={{ transition: "0.3s linear" }}
                                    className='transition-allLinear bg-[#ef6d9f] hover:bg-[#ee8d6d] w-[140px] md:w-[158px] mt-[55px] ml-[52px] md:ml-auto md:mt-[38px] p-[8px] '>
                                    <h3 className='text-white text-[17px] md:text-[20px] mt-2 font-medium'>Shop Now</h3>
                                </button>
                            </div>

                        </div>
                    ))}
                </Slider>
                <div className='relative top-[-210px] md:top-[-431px] flex'>
                    <div
                        style={{ transition: "0.3s linear" }}
                        onClick={() => slider.current.slickPrev()}
                        className=' hover:bg-[#1a1a1a] cursor-pointer text-white w-[40px] h-[40px] md:w-[45px] md:h-[45px] bg-[#ef6d9f] absolute left-[10px] flex items-center justify-center '>
                        <div className='w-[12px] h-[12px] border-l-[1px] border-b-[1px] border-white rotate-45 ml-2'></div>
                    </div>
                    <div
                        style={{ transition: "0.3s linear" }}
                        onClick={() => slider.current.slickNext()}
                        className=' hover:bg-[#1a1a1a] cursor-pointer text-white w-[40px] h-[40px] md:w-[45px] md:h-[45px] bg-[#ef6d9f]  right-[10px]  absolute flex items-center justify-center'>
                        <div className='w-[12px] h-[12px] border-r-[1px] border-t-[1px] border-white rotate-45 mr-2'></div>
                    </div>
                </div>

            </div>

        </>
    )
}
