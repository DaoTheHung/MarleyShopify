import React from 'react'
import RouterCheckout from '../common/router/RouterCheckout'

export default function Shipping() {
    return (
        <div className=' w-[56%] border-[#be8686] border-r-2  relative'>
            <div className='absolute w-[640px] top-[60px] right-[80px]'>
                <h3 className='font-semibold text-[28px]'>Marley Theme</h3>
                <RouterCheckout />


                <div className='w-full mt-[200px] text-[13px] pt-[21px] text-ink-100  border-t border-t-[#dedede]'>
                    All rights reserved Marley Theme
                </div>
            </div>
        </div>
    )
}
