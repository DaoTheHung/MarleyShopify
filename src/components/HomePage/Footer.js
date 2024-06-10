import React from 'react'
import { useRouter } from 'next/router'
export default function Footer() {
    const router = useRouter()
    return (
        <div
            style={router.pathname !== "/" ? { marginTop: "30px", bottom: "auto" } : { marginTop: "100px" }}
            className="text-[32px]  lg::w-full lg::border-none border-t-2 pt-[100px] bottom-[-46rem] sm:w-full ip:w-[425px] lg::bg-[url('https://cdn.shopify.com/s/files/1/0434/2520/2335/files/footer-bg.jpg?v=1614290780')] lg:h-[422px] relative  bg-center h-[382px] lg::h-[356px] bg-cover"
        >
            <div className='lg::absolute m-auto lg::m-0 left-[195px] top-[170px]  w-[225px] lg::w-[245px]'>
                <img className='w-full mb-[59px] lg::mb-0' src='../images/matley-footer-logo.webp' />
            </div>
            <div className='lg::absolute m-auto lg::m-0 text-center lg::text-start lg::ml-auto right-[90px] top-[160px] w-[245px]'>
                <h3 className='text-[#9e9999]  text-[16px] lg::text-[18px]'>Follow us</h3>
                <div className='lg::text-[14px] text-[13px] justify-center lg::justify-start text-[#9e9999]  flex gap-[37px] mt-[28px] ' >
                    <i className="fa-brands fa-facebook-f cursor-pointer"></i>
                    <i className="fa-brands fa-pinterest cursor-pointer"></i>
                    <i className="fa-brands fa-instagram cursor-pointer"></i>
                </div>
            </div>
        </div>
    )
}
