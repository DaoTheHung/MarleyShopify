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
            <div className='w-full relative mt-[109px] bottom-[-80rem]'>
                <div className=' w-[73%] h-full m-auto'>
                    <div className='w-[35px] h-[6px] m-auto rounded-[5px] bg-pink-500'></div>
                    <h3 className='text-center text-[52px] mt-[39px]'>Our Customers Review</h3>
                    <p className='text-center text-[24px] text-[#9e9999] mt-[29px]'>Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam fames ac turpis egestas</p>
                </div>
                <div className=' w-[73%] h-full mt-[56px] ml-[318px] cursor-grab'>
                    <Slider {...settings} >
                        {slideComments.map((slide, index) => (
                            <div className='flex' key={index}>
                                <div className='flex gap-[35px]'>
                                    <div className='w-[14%]'>
                                        <img className='rounded-[50%]' src={slide.image} />
                                    </div>
                                    <div className='flex flex-col gap-[34px] mt-[22px]'>
                                        <div>
                                            <h3 className='text-[29px] font-medium'>{slide.name}</h3>
                                            <h3 className='text-[18px] text-[#9e9999] mt-[16px]'>{slide.title}</h3>
                                        </div>
                                        <p className='text-[18px] w-[642px] text-[#9e9999] font-light'>{slide.text}</p>
                                        <div className='text-[20px] tracking-[4px]'>
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
