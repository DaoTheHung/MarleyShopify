import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getCart, cartSelector, isDataSelector, isData, showCartSelector, showCart } from '../../../store'
import { useSelector, useDispatch } from "react-redux"
import Link from 'next/link';

export default function PopupCart({ cart, setCart }) {
    const router = useRouter()
    const [dataProduct, setDataProduct] = useState([])
    const [count, setCount] = useState(0)
    // Get data redux
    const data = useSelector(cartSelector)
    const isDataProduct = useSelector(isDataSelector)
    const dispatch = useDispatch()
    const showCartS = useSelector(showCartSelector)

    const dispath = useDispatch()
    useEffect(() => {
        const json = JSON.parse(localStorage.getItem('cart'))
        if (json !== null) {
            setDataProduct(json)
        }
    }, [isDataProduct])

    useEffect(() => {
        if (router) {
            dispath(showCart(true))

        }
    }, [router])


    // Remove product in cart
    const handleRemoveProduct = (id) => {
        const removeId = [...dataProduct]
        const removeProduct = removeId.filter(product => product.id != id)
        setDataProduct(removeProduct)
        localStorage.setItem('cart', JSON.stringify(removeProduct))
        dispatch(isData(!isDataProduct))
    }

    // Close popup cart
    const handleClosePopup = () => {
        dispath(showCart(true))
    }

    // Total product 
    const total = dataProduct?.reduce((init, product) => init + product.price * product.quantity, 0)

    // Onchange
    const handleChange = () => {

    }

    // Up quantity

    const handlePrevUp = (id, quantity, price) => {
        const myCart = [...dataProduct]
        const prevQuantity = myCart.map((p) => {
            return p.id == id ? { ...p, quantity: p.quantity + 1 } : p
        })
        if (quantity < 10) {
            setDataProduct(prevQuantity)
            localStorage.setItem('cart', JSON.stringify(prevQuantity))
        }
        dispatch(isData(!isDataProduct))
    }

    // Reduce quantity
    const handlePrevDown = (id, quantity, price) => {
        const myCart = [...dataProduct]
        const prevQuantity = myCart.map((p) =>
            p.id == id ? { ...p, quantity: p.quantity - 1, } : p)
        if (quantity > 1) {
            setDataProduct(prevQuantity)
            localStorage.setItem('cart', JSON.stringify(prevQuantity))
        } else {
            const remove = myCart.filter(p => p.id !== id)
            setDataProduct(remove)
            localStorage.setItem('cart', JSON.stringify(remove))
        }
        dispatch(isData(!isDataProduct))
    }
    // Checkout link
    const handleCheckout = () => {
        router.push(`/checkout/information`)
        dispath(showCart(false))
    }



    return (
        <>

            <div className={`fixed bottom-0  left-0 right-0 top-0 bg-[#00000085] z-50 ${!showCartS ? "visible" : "invisible"}`}>
                <span onClick={handleClosePopup} className={`right-[270px] md:right-[301px] z-50 cursor-pointer ${showCartS ? "translate-x-[18rem]" : "translate-x-[-100%]"} hover:bg-[#1a1a1a] transition duration-500 w-[30px] h-[30px]  md:w-[33px] md:h-[33px] bg-pink-500 absolute flex items-center justify-center text-[#fff]`}>
                    <i className="fa-solid fa-xmark"></i>
                </span>
                <div className={`border-none overflow-y-scroll transition-allLinear duration-500  fixed ${!showCartS ? "right-[0]" : "right-[-335px]"}  top-0 bottom-0 w-[300px] md:w-[334px] bg-[#fff]`}>
                    <h3 className='px-[15px] py-[15px] shadow-yourCart lg:text-[22px] text-base text-[#1a1a1a]'>Your Cart</h3>
                    <div className='w-full flex flex-col '>
                        {dataProduct?.map((product, idx) => (
                            <div className='flex gap-[10px] mt-[11px] ml-[15px] group' key={idx} >
                                <div className='w-[70px] relative'>
                                    <div onClick={() => handleRemoveProduct(product.id)} className='opacity-[0] group-hover:opacity-[1] absolute text-[#fff] hover:bg-[#1a1a1a] transition duration-500 w-[20px] h-[20px] bg-pink-500 flex items-center justify-center'>
                                        <i className="cursor-pointer fa-solid fa-xmark"></i>
                                    </div>
                                    <img className='w-full' src={product.image} />
                                </div>
                                <div className='leading-[36px]'>

                                    <h3 className='text-[20px]'>{product.name}</h3>
                                    <p className='text-[13px] text-hex-100 font-normal'>Wireless / 289 g / Silicon</p>
                                    <h3 className='text-[23px] text-hex-100 font-normal'>Rs. {dataProduct?.length > 0 ? product.price * product.quantity + ".00" : product.price + ".00"}</h3>

                                    <div className='h-[34px] w-[110px] text-center border flex mt-[15px]'>
                                        <button onClick={() => handlePrevDown(product.id, product.quantity, product.price)} className='hover:bg-pink-500 hover:text-[#fff] transition duration-[300ms] w-[30px] h-[31px] py-0 px-[10px] flex items-center text-[20px] text-pink-500'>-</button>
                                        <input onChange={handleChange} className='text-[#9e9999] w-[46px] h-full text-center border-x-2 text-[15px] md:text-[20px]' value={product.quantity} />
                                        <button onClick={() => handlePrevUp(product.id, product.quantity, product.price)} className='hover:bg-pink-500 hover:text-[#fff] transition duration-[300ms] w-[33px] h-[31px] py-0 px-[10px] flex items-center text-pink-500 text-[20px]'>+</button>

                                    </div>
                                </div>
                            </div>


                        ))}
                    </div>
                    <div className='px-[15px] mt-[24px] w-[99%] h-[33%]'>
                        {dataProduct?.length == 0 &&
                            <>
                                <h3 className='lg:text-[22px] text-base text-[#9e9999] font-normal'>Your cart is currently empty.</h3>
                                <button className='w-full mt-[7px] py-[16px] lg:text-[20px] bg-pink-500 hover:bg-[#1a1a1a] transition duration-500 text-[#fff]'><Link className='no-underline text-white' href='/collections/all'>Continue Shopping</Link></button>
                            </>
                        }
                        {dataProduct?.length >= 1 &&
                            <div>
                                <div className='w-full flex justify-between border-y items-center h-[76px] pt-[6px] mt-[37px]'>
                                    <h3 className='text-[20px] md:text-[23px] text-[#9e9999]'>Total</h3>
                                    <h3 className='text-[20px] md:text-[23px] text-[#9e9999]'>Rs. {total + ".00"}</h3>
                                </div>
                                <h3 className='text-[15px] text-[#9e9999] font-normal leading-[40px] mt-[9px]'>Shipping, taxes, and discounts will be calculated at checkout.</h3>
                                <div className='mt-[16px]'>
                                    <button
                                        onClick={handleCheckout}
                                        className='w-full mt-[7px] py-[14px] text-[18px] md:text-[20px] bg-pink-500 hover:bg-[#1a1a1a] transition duration-500 text-[#fff]'>
                                        Proceed to Checkout
                                    </button>
                                    <button className=' w-full mt-[11px] py-[14px] text-[18px] md:text-[20px] bg-pink-500 hover:bg-[#1a1a1a] transition duration-500 text-[#fff]'>{dataProduct?.length > 0 ? "View Cart" : "Continue shopping"}</button>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div >

        </>
    )
}
