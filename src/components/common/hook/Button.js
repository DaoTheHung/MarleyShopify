import React from 'react'

export const Button = (props) => {
    return (
        <div>
            <button className='group  mt-[52px] relative text-[15px] md:text-[21px] ml-[65px] md:ml-auto py-[20px]  transition-colors duration-300
                font-semibold px-[31px] md:px-[40px]  hover:text-pink-500 
                uppercase tracking-[3px]'>
                <span className='group-hover:w-[50%] transition-allLinear duration-300 absolute top-0 left-0 w-[15px] h-[3px] bg-pink-500'></span>
                <span className='group-hover:h-[50%] transition-allLinear duration-300 absolute top-0 left-0 w-[3px] h-[15px] bg-pink-500'></span>
                <span className='group-hover:h-[50%] transition-allLinear duration-300  absolute top-0 right-0 w-[3px] h-[15px] bg-pink-500'></span>
                <span className='group-hover:w-[50%] transition-allLinear duration-300 absolute top-0 right-0 w-[15px] h-[3px] bg-pink-500'></span>
                <span className='group-hover:w-[50%] transition-allLinear duration-300 absolute bottom-0 right-0 w-[15px] h-[3px] bg-pink-500'></span>
                <span className='group-hover:h-[50%] transition-allLinear duration-300 absolute bottom-0 right-0 w-[3px] h-[15px] bg-pink-500'></span>
                <span className='group-hover:w-[50%] transition-allLinear duration-300 absolute bottom-0 left-0 w-[15px] h-[3px] bg-pink-500'></span>
                <span className='group-hover:h-[50%] transition-allLinear duration-300 absolute bottom-0 left-0 w-[3px] h-[15px] bg-pink-500'></span>

                {props.shop}
                {props.learn}
            </button>
        </div>
    )
}
