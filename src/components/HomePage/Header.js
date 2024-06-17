import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import PopupCart from '../common/PopupCart'
import { useRouter } from 'next/router'
import { cartSelector, getCart, isDataSelector, getUser, isUserSelector, showCartSelector, showCart } from '../../../store'
import { MenuHead } from '../common/MenuHead'
import { useDispatch, useSelector } from 'react-redux'
import { loginSelector } from '../../../store';
import Cookies from 'js-cookie'

export default function Header() {



  const router = useRouter()
  const [dataProduct, setDataProduct] = useState([])
  const [top, setTop] = useState(false)
  const [opacity, setOpacity] = useState(false)
  const [show, setShow] = useState(false)


  // Get data redux
  const data = useSelector(cartSelector)
  const isDataProduct = useSelector(isDataSelector)

  const dispath = useDispatch()

  const listUser = useSelector(loginSelector)
  const isUserSelect = useSelector(isUserSelector)


  useEffect(() => {
    const id = Cookies.get('token')
    if (id) {

      dispath(getUser(id))
    } else {

      dispath(getUser(''))
    }


  }, [dispath, isUserSelect])



  useEffect(() => {
    dispath(getCart())
  }, [dispath]);

  useEffect(() => {
    const json = localStorage.getItem('cart')
    if (json !== null) {
      setTimeout(() => {
        setDataProduct(JSON.parse(json))
      }, 2000)
    }
  }, [isUserSelect])

  useEffect(() => {
    if (router) {
      setShow(false)
    }
  }, [router])


  // Total quantity
  const quantityProduct = dataProduct?.reduce((int, product) => int + product.quantity, 0)


  // Open modal cart
  const handleModalCart = () => {
    dispath(showCart(false))
  }
  return (
    <div>
      <div className=' relative  lg:bg-inherit bg-[#1a1a1a]  z-20 '>
        <div className={`flex ${router.pathname == "/" ? "lg:absolute  mx-auto w-full" : "bg-black-300"} px-4 lg:px-8   py-0 h-[81px]  lg:h-[110px] items-center justify-between`}>
          <div onClick={() => router.push('/')} className=' lg:static   left-[50px]'>
            <img className=' lg:h-[87px] h-[52px]' src='//cdn.shopify.com/s/files/1/0434/2520/2335/files/logo_300x300.png?v=1631012061' />
          </div>

          {show && <div className='fixed  bottom-0 left-0 right-0 top-0 bg-[#00000085] lg:bg-inherit z-50'>
          </div>}
          <ul className={`z-[51] m-auto w-[258px] lg:w-auto pt-[45px] lg:pt-0   pl-0 bg-[#fff] fixed top-0 bottom-0  lg:bg-[#fff0]  ${show ? "right-0" : "right-[-268px]"} transition-allLinear duration-500  lg:items-center  lg:static flex flex-col lg:flex-row md:gap-6 xl:gap-[46px]`}>
            <div onClick={() => setShow(false)} className="absolute cursor-pointer top-[11px] left-[15px] lg:hidden">
              <i className="fa-solid fa-xmark"></i>
            </div>
            {
              listUser?.fullname && <Link href='/account' className='text-[#ef6d9f]  p-[10px] lg:hidden no-underline'>{listUser.fullname}</Link>
            }

            <div className='flex w-full p-[10px] lg:items-center lg:border-none  border-t-[1px]'>
              <Link style={{ textDecoration: "none" }} href="/" >
                <li
                  style={{ transition: "0.3s linear" }}
                  className=' lg:text-[#fff] text-black-300   font-normal lg:font-semibold lg:text-[19px] hover:text-[#ef6d9f]'>
                  Home
                </li>
              </Link>
            </div>

            <div
              // onMouseOut={() => setTop(false)} onMouseOver={() => setTop(true)}
              className='  w-full  p-[10px] lg:border-none  border-t-[1px] lg:items-center cursor-pointer' >
              <Link style={{ textDecoration: "none" }} href="/collections/all">
                <li

                  style={{ transition: "0.3s linear" }}
                  className='lg:text-[#fff] text-black-300 font-normal lg:font-semibold lg:text-[19px] hover:text-[#ef6d9f] flex items-center'>
                  Headephones
                  <i className="pl-[5px] text-[11px] fa-solid fa-angle-down"></i>
                </li>
              </Link>
              <MenuHead top={top} setTop={setTop} setOpacity={setOpacity} opacity={opacity} />
            </div>

            <div className=' flex w-full p-[10px] lg:border-none  border-t-[1px] lg:items-center'>
              <Link style={{ textDecoration: "none" }} href="/about">
                <li
                  style={{ transition: "0.3s linear" }}
                  className='lg:text-[#fff] text-black-300 font-normal lg:font-semibold lg:text-[19px] hover:text-[#ef6d9f]'>
                  About
                </li>

              </Link>

            </div>

            <div className=' flex w-full p-[10px] lg:border-none border-t-[1px] lg:items-center'>
              <Link style={{ textDecoration: "none" }} href="/new">
                <li
                  style={{ transition: "0.3s linear" }}
                  className='lg:text-[#fff] text-black-300 font-normal lg:font-semibold lg:text-[19px] hover:text-[#ef6d9f]'>
                  New
                </li>
              </Link>
            </div>

            <div className=' flex w-full p-[10px] lg:border-none border-t-[1px] lg:items-center'>
              <Link style={{ textDecoration: "none" }} href="/contact">
                <li
                  style={{ transition: "0.3s linear" }}
                  className='lg:text-[#fff] text-black-300 font-normal lg:font-semibold lg:text-[19px] hover:text-[#ef6d9f]'>
                  Contact
                </li>
              </Link>
            </div>


          </ul>

          <div className='flex items-center gap-4'>
            {
              listUser?.fullname ? <Link href='/account' className='text-white text-xl hidden lg:block no-underline'>{listUser.fullname}</Link> : <Link href='/account/login'>
                <div className=' lg:text-[24px]  text-[#fff]'><i className="fa-solid fa-user"></i></div>
              </Link>
            }


            <div className='flex items-center gap-6'>
              <div onClick={() => setShow(true)} className='lg:hidden cursor-pointer text-[#fff]  right-[135px] text-[19px]'>
                <i className="fa-solid fa-bars"></i>
              </div>

              <div className='flex gap-[6px] justify-center '>
                <i onClick={handleModalCart} className="text-[#fff]  text-lg lg:text-[30px] fa-solid fa-bag-shopping rounded-0 cursor-pointer"></i>
                <div className='w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] rounded-[50%] flex justify-center bg-pink-500'>
                  <h3 className='text-[10px] lg:text-[12px] text-[#fff] m-auto'>{quantityProduct ? quantityProduct : "0"}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >
      <PopupCart />

    </div >
  )
}
