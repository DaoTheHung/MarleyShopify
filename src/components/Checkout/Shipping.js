import React from 'react'
import { useRouter } from 'next/router';
import RouterCheckout from '../common/router/RouterCheckout'
import { dtCheckoutSelector, setDataCheckout } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';

export default function Shipping() {
    const router = useRouter()

    // Redux
    const dataCheckout = useSelector(dtCheckoutSelector)
    const dispatch = useDispatch()

    const handleOrder = () => {
        alert("Order Success")
    }
    return (
        <div className=' md:w-[56%] w-full border-[#be8686] border-none md:border-r-2  relative'>
            <div className='md:absolute sm:absolute w-full static flex flex-col justify-between h-full p-[14px] md:w-[640px] top-[60px] right-[80px]'>
                <div>
                    <h3 className='font-semibold text-[28px]'>Marley Theme</h3>
                    <RouterCheckout />
                    <div className='w-full border rounded-[5px] p-[15px]'>

                        <div className='flex justify-between border-b pb-[11px]'>
                            <div className='flex gap-[68px]'>
                                <div className='text-[#5e5d5d]'>Contact</div>
                                <div>{dataCheckout?.phone}</div>
                            </div>
                            <div className='underline text-[#1773b0] text-[13px]'>

                                Change
                            </div>
                        </div>

                        <div className='flex justify-between mt-[11px]'>
                            <div className='flex gap-[68px]'>
                                <div className='text-[#5e5d5d]'>Ship to</div>
                                <div>
                                    {dataCheckout?.address}, {dataCheckout?.city}, {dataCheckout?.country}
                                </div>
                            </div>
                            <div className='underline text-[#1773b0] text-[13px]'>

                                Change
                            </div>
                        </div>

                    </div>

                    <div className='mt-[50px]'>
                        <h3 className='text-[20px]'>Shipping method</h3>
                        <div className='w-full border-[1px] rounded-[5px] p-[18px]  border-primary-500 bg-[#90c7ec7c]'>
                            <div className='flex justify-between '>
                                <div>Standard</div>
                                <div className='font-semibold'>$1500.00</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between  items-center mt-[30px]'>
                        <button onClick={() => router.push('/checkout/information')} className='text-[#1773b0] transition-color duration-300 hover:text-[#1f8dd6]'>
                            <span className='mr-[20px]'><i class="fa-solid fa-angle-left"></i></span>
                            Return to information
                        </button>
                        <button
                            onClick={handleOrder}
                            type='submit'
                            className='bg-[#1773b0] transition-color duration-300 hover:bg-[#105989] rounded-[7px]  text-[#fff] p-[25px]'>Order</button>
                    </div>
                </div>

                <div className='w-full  text-[13px] pt-[21px] text-ink-100  border-t border-t-[#dedede]'>
                    All rights reserved Marley Theme
                </div>
            </div>


        </div>
    )
}
