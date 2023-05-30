import React from 'react';
import Shipping from '../../../src/components/Checkout/Shipping';
import ProductCheckOut from '../../../src/components/Checkout/ProductCheckOut';

const Index = () => {
    return (
        <div className='w-full h-[1041px] flex'>
            <Shipping />
            <div className='pt-[76px] w-[44%] bg-[#f5f5f5] px-[100px]'>
                <ProductCheckOut />
            </div>

        </div>
    );
}

export default Index;
