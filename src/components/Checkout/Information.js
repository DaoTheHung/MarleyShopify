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

        <div className=' w-[56%] border-[#be8686] border-r-2  relative'>
            <div className='absolute w-[640px] top-[60px] right-[80px]'>
                <h3 className='font-semibold text-[28px]'>Marley Theme</h3>
                <RouterCheckout />
                <Address />

                <div className='w-full mt-[200px] text-[13px] pt-[21px] text-ink-100  border-t border-t-[#dedede]'>
                    All rights reserved Marley Theme
                </div>
            </div>
        </div>


    )
}
