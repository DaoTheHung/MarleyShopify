import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import PopupCart from '../common/PopupCart'
import { useRouter } from 'next/router'
import { cartSelector, getCart, isDataSelector, isData, loginSelector, getUser, isUserSelector, showCart } from '../../../store'
import Cookies from 'js-cookie'
import { useSelector, useDispatch } from "react-redux"
export default function NavBarScoll() {

    const [navBar, setNavBar] = useState(true)
    const [opacity, setOpacity] = useState(0)
    const router = useRouter()
    const [dataProduct, setDataProduct] = useState([])


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
    const isUserSelect = useSelector(isUserSelector)


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

    const listUser = useSelector(loginSelector)

    useEffect(() => {
        const id = Cookies.get('token')
        if (id) {

            dispath(getUser(id))
        } else {

            dispath(getUser())
        }
    }, [dispath, isUserSelect])

    // Total quantity
    const quantityProduct = dataProduct?.reduce((int, product) => int + product.quantity, 0)

    // Open modal cart
    const handleModalCart = () => {
        dispath(showCart(false))

    }
    return (

        <>
            <div className={`transition-allLinear z-50 duration-[400ms] hidden  lg:block w-full fixed  bg-[#1a1a1ae3] opacity-[${opacity}] ${navBar ? 'top-[-125px]' : ' top-[0px]'}  shadow-navBar`}>
                <div className={`px-8 flex  py-0  h-[110px] items-center justify-between animate-height-slow `}>
                    <div>
                        <img className='h-[87px]' src='//cdn.shopify.com/s/files/1/0434/2520/2335/files/logo_300x300.png?v=1631012061' />
                    </div>

                    <ul className='flex m-auto md:gap-6 xl:gap-[46px] pl-0'>
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
                    <div className='flex items-center gap-4'>
                        {
                            listUser.fullname ? <Link href='/account' className='text-white text-xl hidden lg:block no-underline'>{listUser.fullname}</Link> : <Link href='/account/login'>
                                <div className='text-[24px] lg:text-[27px] text-[#fff]'><i class="fa-solid fa-user"></i></div>
                            </Link>
                        }


                        <div className='flex items-center gap-6'>
                            <div onClick={() => setShow(true)} className='lg:hidden cursor-pointer text-[#fff]  right-[135px] text-[19px]'>
                                <i className="fa-solid fa-bars"></i>
                            </div>

                            <div className='flex gap-[6px] justify-center '>
                                <i onClick={handleModalCart} className="text-[#fff] text-[24px] lg:text-[30px] fa-solid fa-bag-shopping rounded-0 cursor-pointer"></i>
                                <div className='w-[20px] h-[20px] rounded-[50%] flex justify-center bg-pink-500'>
                                    <h3 className='text-[12px] text-[#fff] m-auto'>{quantityProduct ? quantityProduct : "0"}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <PopupCart />

        </>

    )
}
