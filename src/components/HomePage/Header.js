import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import PopupCart from '../common/PopupCart'
import { useRouter } from 'next/router'
import { cartSelector, getCart, isDataSelector } from '../../../store'
import { useSelector, useDispatch } from "react-redux"
import { MenuHead } from '../common/MenuHead'


export default function Header() {
  const router = useRouter()
  const [cart, setCart] = useState(true)
  const [dataProduct, setDataProduct] = useState([])
  const [top, setTop] = useState(false)
  const [opacity, setOpacity] = useState("0")


  // Get data redux
  const data = useSelector(cartSelector)
  const isDataProduct = useSelector(isDataSelector)

  const dispath = useDispatch()
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
  }, [isDataProduct])

  // Total quantity
  const quantityProduct = dataProduct?.reduce((int, product) => int + product.quantity, 0)


  // Open modal cart
  const handleModalCart = () => {
    setCart(false)
  }

  return (
    <div>
      <div className='w-full relative z-20 '>
        <div className={`flex ${router.pathname == "/" ? "" : "bg-black-300"}  py-0 px-[160px] h-[110px] items-center justify-between`}>
          <div>
            <img className='h-[87px]' src='//cdn.shopify.com/s/files/1/0434/2520/2335/files/logo_300x300.png?v=1631012061' />
          </div>

          <ul className='flex h-[108px] items-center m-auto gap-[46px] pl-0'>
            <div className='h-full flex items-center'>
              <Link style={{ textDecoration: "none" }} href="/" >
                <li
                  style={{ transition: "0.3s linear" }}
                  className=' text-[#fff]   font-semibold text-[19px] hover:text-[#ef6d9f]'>
                  Home
                </li>
              </Link>
            </div>

            <div className='h-full flex items-center' onMouseOut={() => { setTop(false), setOpacity("0") }} onMouseOver={() => { setTop(true), setOpacity("1") }} >
              <Link style={{ textDecoration: "none" }} href="/collections/all">
                <li
                  style={{ transition: "0.3s linear" }}
                  className='text-[#fff] font-semibold text-[19px] hover:text-[#ef6d9f]'>
                  Headephones
                </li>
              </Link>
              <MenuHead top={top} opacity={opacity} />
            </div>

            <div className='h-full flex items-center'>
              <Link style={{ textDecoration: "none" }} href="/about">
                <li
                  style={{ transition: "0.3s linear" }}
                  className='text-[#fff] font-semibold text-[19px] hover:text-[#ef6d9f]'>
                  About
                </li>
              </Link>
            </div>

            <div className='h-full flex items-center'>
              <Link style={{ textDecoration: "none" }} href="/new">
                <li
                  style={{ transition: "0.3s linear" }}
                  className='text-[#fff] font-semibold text-[19px] hover:text-[#ef6d9f]'>
                  New
                </li>
              </Link>
            </div>

            <div className='h-full flex items-center'>
              <Link style={{ textDecoration: "none" }} href="/contact">
                <li
                  style={{ transition: "0.3s linear" }}
                  className='text-[#fff] font-semibold text-[19px] hover:text-[#ef6d9f]'>
                  Contact
                </li>
              </Link>
            </div>
          </ul>
          <div className='flex gap-[6px] justify-center '>
            <i onClick={handleModalCart} className="text-[#fff] text-[30px] fa-solid fa-bag-shopping rounded-0 cursor-pointer"></i>
            <div className='w-[20px] h-[20px] rounded-[50%] flex justify-center bg-pink-500'>
              <h3 className='text-[12px] text-[#fff] m-auto'>{quantityProduct ? quantityProduct : "0"}</h3>
            </div>
          </div>
        </div>

      </div>
      <PopupCart cart={cart} setCart={setCart} />

    </div>
  )
}
