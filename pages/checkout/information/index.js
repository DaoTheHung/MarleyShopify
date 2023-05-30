import React from 'react'
import Container from 'react-bootstrap/Container';
import Information from '../../../src/components/Checkout/Information';
import ProductCheckOut from '../../../src/components/Checkout/ProductCheckOut';

export default function index() {
    return (
        <div className='w-full h-[1041px] flex'>
            <Information />
            <div className='pt-[76px] w-[44%] bg-[#f5f5f5] px-[100px]'>
                <ProductCheckOut />
            </div>

        </div>
    )
}
