import React from 'react'
import { Input } from 'antd'
import { Checkbox } from 'antd';
import Address from '../common/Form/FormCheckout/Address';
import Shipping from './Shipping';

import { useRouter } from 'next/router';
import RouterCheckout from '../common/router/RouterCheckout';
import ProductCheckOut from './ProductCheckOut';
export default function Information({ showCart }) {
    const router = useRouter()

    const onChange = (e) => {
    };
    return (
        <div>

            <div className={`${!showCart ? "mt-[-240px]" : "mt-0"} transition-allLinear duration-300 bg-[#fff] z-10 md:mt-0 lg:mt-0 w-full sm:w-[807px] md:w-[807px] border-[#be8686] sm:border-none sm:border-r-2 md:border-r-2  relative`}>
                <div className='md:absolute sm:absolute w-full static p-[14px] md:p-0  md:w-[640px] sm:w-[640px] top-[60px] right-[80px]'>
                    <h3 className='font-semibold hidden md:block text-[28px]'>Marley Theme</h3>
                    <RouterCheckout />
                    <Address />

                    <div className='w-full lg:mt-4 text-[13px] pt-[21px] text-ink-100  border-t border-t-[#dedede]'>
                        All rights reserved Marley Theme
                    </div>
                </div>
            </div>
        </div>


    )
}
