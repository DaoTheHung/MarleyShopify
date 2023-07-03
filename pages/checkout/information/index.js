import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Information from '../../../src/components/Checkout/Information';
import ProductCheckOut from '../../../src/components/Checkout/ProductCheckOut';
import { isDataSelector } from '../../../store'
import { useSelector } from 'react-redux';

export default function index() {
    const [showCart, setShowCart] = useState(false)
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
            <h3 className='font-semibold ip:block md:hidden text-[28px] p-[10px]'>Marley Theme</h3>
            <div className='w-full ip:h-auto lg:h-[1041px] md:h-[1041px] flex ip:flex-col-reverse md:flex-row'>
                <Information showCart={showCart} />
                <div className='md:pt-[76px] lg:w-[50%] lg:pt-[76px] ip:pb-[20px] md:pb-0 lg:pb-0  ip:pt-[16px] ip:w-full md:w-[49%] bg-[#f5f5f5] '>

                    <div onClick={() => setShowCart(!showCart)} className='w-full items-center mb-[36px] h-[42px]  ip:visible md:hidden lg:hidden flex justify-between px-[10px]'>
                        <div className='flex items-center text-[#1773b0]'>
                            <i className="fa-solid fa-cart-shopping "></i>
                            <span className='ml-[12px] text-[14px]'>
                                Show order summary
                                {showCart ?
                                    <i className="fa-solid fa-chevron-up text-[9px] ml-[6px]"></i> :
                                    <i className="fa-solid fa-chevron-down text-[9px] ml-[6px]"></i>
                                }

                            </span>
                        </div>
                        <div className='text-[17px] text-[#1773b0] font-semibold'>
                            ${total}.00
                        </div>
                    </div>

                    <ProductCheckOut />
                </div>

            </div>
        </>
    )
}
