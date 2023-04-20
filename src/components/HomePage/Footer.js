import React from 'react'
import { useRouter } from 'next/router'
export default function Footer() {
    const router = useRouter()
    return (
        <div
            style={router.pathname !== "/" ? { marginTop: "30px" } : { marginTop: "100px", bottom: "-84rem" }}
            className='text-[32px] mt-[100px] bg-footer relative  bg-center h-[356px] bg-cover'
        >
            <div className='absolute left-[195px] top-[170px] w-[245px]'>
                <img className='w-full' src='../images/matley-footer-logo.webp' />
            </div>
            <div className='absolute right-[90px] top-[160px] w-[245px]'>
                <h3 className='text-[#9e9999] text-[18px]'>Follow us</h3>
                <div className='text-[14px] text-[#9e9999] flex gap-[37px] mt-[28px] ' >
                    <i className="fa-brands fa-facebook-f cursor-pointer"></i>
                    <i className="fa-brands fa-pinterest cursor-pointer"></i>
                    <i className="fa-brands fa-instagram cursor-pointer"></i>
                </div>
            </div>
        </div>
    )
}
