import React from 'react'
import { useRouter } from 'next/router'
export default function RouterCheckout() {

    const router = useRouter()
    const information = router.pathname


    return (
        <div className='flex gap-[15px] mt-[13px] mb-[30px]'>
            <div onClick={() => router.push('/collections/all')} className='text-[#1773b0] text-[13px] cursor-pointer'>Cart</div>
            <div className='text-ink-100 text-[13px]'><i className="fa-solid fa-angle-right"></i></div>
            <div
                style={information == "/checkout" ? { color: 'black', fontWeight: "600" } : {}} className='text-[#1773b0] text-[13px] cursor-pointer'>Information</div>
            <div className='text-ink-100 text-[13px]'><i className="fa-solid fa-angle-right"></i></div>
            <div
                style={information == "/checkout/shipping" ? { color: 'black', fontWeight: "600", cursor: "pointer" } : {}}
                className=' text-[13px] text-ink-500'>Shipping</div>
        </div>
    )
}
