import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideComments } from '../common/DataSlide/DataSlide';
export default function Comments() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className='lg:w-full sm:w-full ip:w-[404px] relative mt-[109px] bottom-[-39rem] lg:bottom-[-40rem]'>
                <div className=' w-[65%]  lg:w-[73%] h-full m-auto mb-[36px] lg:mb-auto'>
                    <div className='w-[35px] h-[6px] m-auto rounded-[5px] bg-pink-500'></div>
                    <h3 className='text-center text-[44px] lg:text-[52px] mt-[39px]'>Our Customers Review</h3>
                    <p className='text-center text-[20px] lg:text-[24px] text-[#9e9999] mt-[29px]'>Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam fames ac turpis egestas</p>
                </div>
                <div className=' w-[73%] h-full sm:mt-[56px] lg:mt-[56px] ml-[60px]  xl:ml-[318px] cursor-grab'>
                    <Slider {...settings} >
                        {slideComments.map((slide, index) => (
                            <div className='flex' key={index}>
                                <div className='flex flex-col  xl:w-full sm:w-auto lg:ml-0  md:w-[73%] sm:flex-row lg:flex-row gap-[35px]'>
                                    <div className='w-[82%] sm:w-[14%] lg:w-[14%]'>
                                        <img className='rounded-[50%]' src={slide.image} />
                                    </div>
                                    <div className='flex flex-col gap-[34px] mt-[22px] lg:w-[90%]'>
                                        <div>
                                            <h3 className=' text-[26px] lg:text-[29px] font-medium'>{slide.name}</h3>
                                            <h3 className='text-[18px] font-normal lg:font-medium text-[#9e9999] mt-[16px]'>{slide.title}</h3>
                                        </div>
                                        <p className='text-[17px]  lg:text-[18px]  text-[#9e9999] font-light'>{slide.text}</p>
                                        <div className='text-[17px] lg:text-[20px] tracking-[4px]'>
                                            <i className="fa-sharp fa-solid fa-star text-pink-500"></i>
                                            <i className="fa-sharp fa-solid fa-star text-pink-500"></i>
                                            <i className="fa-sharp fa-solid fa-star text-pink-500"></i>
                                            <i className="fa-regular fa-star text-pink-500"></i>
                                            <i className="fa-regular fa-star text-pink-500"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}
