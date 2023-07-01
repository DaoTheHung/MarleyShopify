import React from 'react'
import { Input } from 'antd'
import { Checkbox } from 'antd';
import Address from '../common/Form/FormCheckout/Address';
import Shipping from './Shipping';

import { useRouter } from 'next/router';
import RouterCheckout from '../common/router/RouterCheckout';
import ProductCheckOut from './ProductCheckOut';
export default function Information() {
    const router = useRouter()

    const onChange = (e) => {
    };
    return (

        <div className='ip:w-full sm:w-[56%] md:w-[56%] border-[#be8686] sm:border-none sm:border-r-2 md:border-r-2  relative'>
            <div className='md:absolute sm:absolute ip:w-full ip:static ip:p-[14px] md:p-0  md:w-[640px] sm:w-[640px] top-[60px] right-[80px]'>
                <h3 className='font-semibold ip:hidden md:block text-[28px]'>Marley Theme</h3>
                <RouterCheckout />
                <Address />

                <div className='w-full mt-[200px] text-[13px] pt-[21px] text-ink-100  border-t border-t-[#dedede]'>
                    All rights reserved Marley Theme
                </div>
            </div>
        </div>


    )
}
