import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import PopupCart from '../common/PopupCart'
import { useRouter } from 'next/router'
import { cartSelector, getCart, isDataSelector, isData } from '../../../store'
import { useSelector, useDispatch } from "react-redux"
export default function NavBarScoll() {

    const [navBar, setNavBar] = useState(true)
    const [opacity, setOpacity] = useState(0)
    const router = useRouter()
    const [dataProduct, setDataProduct] = useState([])
    const [cart, setCart] = useState(true)

    // Scolling
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 100) {
                setNavBar(false)
                setOpacity(1)
            } else {
                setNavBar(true)
                setOpacity(0)
            }
        })
    }, [])

    // Get data redux
    const data = useSelector(cartSelector)
    const isDataProduct = useSelector(isDataSelector)
    const dispath = useDispatch()
    useEffect(() => {
        dispath(getCart())
    }, [dispath]);

    // Get data localstorage
    useEffect(() => {
        const json = localStorage.getItem('cart')
        if (json !== null) {
            setTimeout(() => {
                setDataProduct(JSON.parse(json))
            }, 2000)
        }
    }, [isDataProduct])

    // Total quantity
    const countProduct = dataProduct?.reduce((int, product) => int + product.quantity, 0)

    // Open modal cart
    const handleModalCart = () => {
        setCart(false)
    }
    return (

        <>
            <div className={`transition-allLinear  duration-[400ms] hidden  md:block w-full fixed z-10 bg-[#1a1a1ae3] opacity-[${opacity}] ${navBar ? 'top-[-125px]' : ' top-[0px]'}  shadow-navBar`}>
                <div className={`flex py-0 lg:px-[218px] px-[160px] h-[124px] animate-height-slow items-center justify-between`}>
                    <div>
                        <img className='h-[87px]' src='//cdn.shopify.com/s/files/1/0434/2520/2335/files/logo_300x300.png?v=1631012061' />
                    </div>

                    <ul className='flex m-auto lg:gap-[73px] md:gap-[73px] pl-0'>
                        <Link style={{ textDecoration: "none" }} href="/" >
                            <li
                                style={{ transition: "0.3s linear" }}
                                className=' text-[#fff] font-semibold text-[19px] hover:text-[#ef6d9f]'>
                                Home
                            </li>
                        </Link>
                        <Link style={{ textDecoration: "none" }} href="/collections/all">
                            <li
                                style={{ transition: "0.3s linear" }}
                                className='text-[#fff] font-semibold text-[19px] hover:text-[#ef6d9f]'>
                                Headphones
                            </li>
                        </Link>
                        <Link style={{ textDecoration: "none" }} href="/about">
                            <li
                                style={{ transition: "0.3s linear" }}
                                className='text-[#fff] font-semibold text-[19px] hover:text-[#ef6d9f]'>
                                About
                            </li>
                        </Link>
                        <Link style={{ textDecoration: "none" }} href="/new">
                            <li
                                style={{ transition: "0.3s linear" }}
                                className='text-[#fff] font-semibold text-[19px] hover:text-[#ef6d9f]'>
                                New
                            </li>
                        </Link>

                        <Link style={{ textDecoration: "none" }} href="/contact">
                            <li
                                style={{ transition: "0.3s linear" }}
                                className='text-[#fff] font-semibold text-[19px] hover:text-[#ef6d9f]'>
                                Contact
                            </li>
                        </Link>
                    </ul>
                    <div className='flex gap-[6px] justify-center'>
                        <i onClick={handleModalCart} className="text-[#fff] cursor-pointer text-[30px] fa-solid fa-bag-shopping rounded-0 "></i>
                        <div className='w-[20px]   h-[20px] rounded-[50%] flex justify-center bg-pink-500'>
                            <h3 className='text-[12px] text-[#fff] m-auto'>{countProduct ? countProduct : "0"}</h3>
                        </div>
                    </div>
                </div>

            </div>
            <PopupCart cart={cart} setCart={setCart} />

        </>

    )
}
