import React from 'react'

export default function Submit() {
    return (
        <div>
            <div className='w-full sm:w-[420px]  relative mt-[109px] bottom-[-39rem] md:bottom-[-80rem]'>
                <div className='w-[87%] md:w-[73%] h-full m-auto'>
                    <div className='md:w-[35px] md:h-[6px] w-[26px] h-[5px] m-auto rounded-[5px] bg-pink-500'></div>
                    <h3 className='text-center text-[45px] md:text-[52px] mt-[39px]'>Say hello to us</h3>
                    <p className='text-center text-[20px] md:text-[22px] text-[#9e9999] mt-[29px]'>Eu lobortis elementum nibh tellus. Varius quam quisque id diam vel facilisis leo

                    </p>
                </div>
                <form className=' flex justify-center mt-[62px]'>
                    <div className='h-[78px] sm:w-[354px] md:w-[625px] text-[19px] md:text-[23px] relative'>
                        <input

                            type="email"
                            placeholder='Your email address'
                            className='rounded-[30px] placeholder:text-[#cfcece] shadow-form outline-none  w-full h-full pl-[19px] md:pl-[27px]'
                        />
                        <button className='transition duration-[400ms]  hover:bg-[#ee8d6d] absolute gap-[13px] top-[11px] md:top-[5px] right-[5px] flex items-center bg-pink-500 h-[58px] md:h-[68px] rounded-[30px] pr-[5px] pl-[5px] md:pl-[25px] '
                            type='submit'>
                            <span className='text-white text-[19px] hidden md:block'>Submit</span>
                            <div className='w-[48px] flex items-center justify-center h-[48px] rounded-[100%] bg-[#fff] text-center'>
                                <i className="fa-solid fa-paper-plane text-[16px] md:text-[20px] text-pink-500"></i>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
