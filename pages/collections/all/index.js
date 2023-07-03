import React, { useEffect, useState } from 'react'
import MenuProducts from '../../../src/components/HeadPhones/MenuProducts'
import ProductData from '../../../src/components/HeadPhones/ProductData'
import { productSelector, getProducts } from '../../../store'
import { useSelector, useDispatch } from 'react-redux'

export default function index() {

    // Get data redux
    const dispath = useDispatch()
    const products = useSelector(productSelector)
    useEffect(() => {
        dispath(getProducts())
    }, [dispath])

    return (
        <div>
            <div className='w-full mt-[100px] '>

                <div className='md:w-[78%] ip:w-[425px] m-auto '>
                    <div className='flex lg:gap-[216px] md:gap-0'>
                        <MenuProducts />
                        <ProductData />
                    </div>
                </div>



            </div>
        </div>
    )
}
