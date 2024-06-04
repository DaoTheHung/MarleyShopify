import React, { useState } from 'react'
import { useEffect } from 'react'
import { getCart, cartSelector, isDataSelector, isData } from '../../../store'
import { useSelector, useDispatch } from "react-redux"

export default function ProductCheckOut() {
    const [dataProduct, setDataProduct] = useState([])
    // Redux
    const isDataProduct = useSelector(isDataSelector)


    useEffect(() => {
        const json = JSON.parse(localStorage.getItem('cart'))
        if (json !== null) {
            setDataProduct(json)
        }
    }, [isDataProduct])

    // Subtotal
    const subTotal = dataProduct.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const total = subTotal + 1000.00

    return (
        <>
            <div className='flex flex-col px-[15px]  md:px-[50px] w-full md:w-[559px] gap-[15px]'>

                {dataProduct?.map(product => (
                    <div className='flex justify-between items-center' key={product.id}>
                        <div className='flex items-center gap-[15px]'>
                            <div className='w-[70px] h-[70px] relative border border-[#d6d6d6] rounded-[10px]  bg-[#fff]'>
                                <img src={product.image} className='w-full h-full object-contain' />
                                <div className='w-[23px] text-center text-[#fff] h-[23px] absolute right-[-4px] top-[-11px] rounded-full bg-[#6b6a6aea]'>
                                    {product.quantity}
                                </div>
                            </div>
                            <div className=''>
                                <h1 className='text-[16px] font-semibold'>{product.name}</h1>
                                <div className='text-[13px] '>Wireless / 289 g / Silicon</div>
                            </div>

                        </div>
                        <div className=''>
                            ${product.price}
                        </div>
                    </div>
                ))}

                <div className='flex mt-[10px] justify-between'>
                    <div>
                        Subtotal
                    </div>
                    <div className='font-semibold'>
                        ${subTotal}.00
                    </div>
                </div>

                <div className='flex  justify-between'>
                    <div>
                        Shipping
                    </div>
                    <div className=''>
                        $1000.00
                    </div>
                </div>

                <div className='flex  justify-between'>
                    <div className='font-semibold text-[19px]'>
                        Total
                    </div>
                    <div className='font-semibold'>
                        ${total}.00
                    </div>
                </div>
            </div>

        </>
    )
}
