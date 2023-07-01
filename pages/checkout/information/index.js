import React from 'react'
import Container from 'react-bootstrap/Container';
import Information from '../../../src/components/Checkout/Information';
import ProductCheckOut from '../../../src/components/Checkout/ProductCheckOut';


export default function index() {
    // Redux

    return (
        <>
            <h3 className='font-semibold ip:block md:hidden text-[28px] p-[10px]'>Marley Theme</h3>
            <div className='w-full ip:h-auto md:h-[1041px] flex ip:flex-col-reverse md:flex-row'>
                <Information />
                <div className='pt-[76px] ip:w-full md:w-[44%] bg-[#f5f5f5] '>
                    <ProductCheckOut />
                </div>

            </div>
        </>
    )
}
