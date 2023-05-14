import React from 'react'
import Container from 'react-bootstrap/Container';

export const OurTeam = () => {
    return (
        <Container>
            <div className='mt-[180px] mb-[200px]'>

                <div className='mb-[60px]'>
                    <div className='m-auto w-[30px] h-[6px] rounded-[5px] bg-pink-500 '></div>
                    <h1 className='text-center mt-[40px] text-[#1a1a1a] text-[44px] font-bold tracking-[2px]'>Our Team
                    </h1>
                </div>

                <div className='flex justify-center '>
                    <div className='w-[300px] relative group'>
                        <img className='w-full' src='../images/OurTeam/hung.jpg' />

                        <div className='text-white absolute bottom-1 flex gap-[10px] w-full justify-center transition-opacity1 duration-[300ms] group-hover:bottom-[40px]  opacity-[0]  group-hover:opacity-100 z-10'>
                            <div className='h-[45px] cursor-pointer hover:bg-black-300 transition duration-300 w-[45px] bg-pink-500 text-[18px] flex justify-center items-center'>
                                <a className='text-white' href='https://www.facebook.com/daothehung11'> <i className="fa-brands fa-facebook-f"></i></a>
                            </div>
                            <div className='h-[45px] cursor-pointer hover:bg-black-300 transition duration-300 w-[45px] bg-pink-500 text-[18px] flex justify-center items-center'>
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                            <div className='h-[45px] cursor-pointer hover:bg-black-300 transition duration-300 w-[45px] bg-pink-500 text-[18px] flex justify-center items-center'>
                                <i className="fa-brands fa-pinterest"></i>
                            </div>
                            <div className='h-[45px] cursor-pointer hover:bg-black-300 transition duration-300 w-[45px] bg-pink-500 text-[18px] flex justify-center items-center'>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <div className='absolute top-0 left-0 opacity-50 bg-[#ee8d6d] w-0 group-hover:w-[50%]  transition-color duration-500 bottom-[0]'></div>
                        <div className='absolute top-0 right-0 opacity-50 bg-[#ee8d6d] w-0 group-hover:w-[50%]  transition-color duration-500 bottom-[0]'></div>

                        <div className='absolute w-full text-center mt-[34px]'>
                            <h3>Dao The Hung</h3>
                            <p className='text-[20px] text-ink-100'>Design</p>
                        </div>
                    </div>

                </div>

            </div>
        </Container>
    )
}
