import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { useRouter } from 'next/router'
import { productSelector, getProducts, isData, isDataSelector, cartSelector } from '../../../store'
import { useSelector, useDispatch } from "react-redux"
import { NavigationSlide } from './DataSlide/DataSlide';
import Spinner from 'react-bootstrap/Spinner';


export default function PopupDetailProduct({ show, setShow, opacity, setOpacity }) {

  const router = useRouter()
  const [countQuantity, setCountQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [dataProduct, setDataProduct] = useState([])

  // Get data redux
  const data = useSelector(productSelector)
  const dataCart = useSelector(cartSelector)
  const isDataProduct = useSelector(isDataSelector)

  const dispath = useDispatch()
  useEffect(() => {
    dispath(getProducts())
  }, [dispath, isDataProduct]);

  useEffect(() => {
    const json = JSON.parse(localStorage.getItem('cart'))
    if (json !== null) {
      setDataProduct(json)
    }
  }, [isDataProduct])

  // Check loading
  const checkIsData = dataProduct?.reduce((init, product) => init + product.quantity, 0)
  useEffect(() => {
    if (checkIsData == 0) {
      setIsLoading(false)
    }
    if (!show) {
      setTimeout(() => {
        setCountQuantity(1)
      }, 1000)
    }

  }, [checkIsData, show])

  // Data detail
  const productDetail = data?.find(product => product.id == router.query)

  // Close modal detail
  const hiddenDetail = () => {
    setShow(false)
    setOpacity(0)
  }

  // Add to cart
  const handleAddToCart = (id, name, price, quantity, image) => {
    const checkProductDetail = dataProduct?.find(product => product.id == id)
    const newProduct = {
      id,
      name,
      price,
      image,
      quantity: countQuantity,
    }
    const fakeData = [...dataProduct]
    if (checkProductDetail) {

      // Update quantity and price in localstotage
      const updatedCart = dataProduct.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      setDataProduct(updatedCart)
      setIsLoading(true)

      // Time open modal cart
      setTimeout(() => {
        setIsLoading(false)
      }, 4000)
      setTimeout(() => {
        setShow(false)
      }, 2000)
    } else {
      fakeData.push(newProduct)
      setDataProduct(fakeData)
      localStorage.setItem('cart', JSON.stringify(fakeData))
      setIsLoading(true)

      // Time open modal cart
      setTimeout(() => {
        setIsLoading(false)
      }, 4000)
      setTimeout(() => {
        setShow(false)
      }, 2000)
    }
    dispath(isData(!isDataProduct))
  }


  // Prev down
  const handlePrevDown = () => {
    if (countQuantity <= 1) {
    } else {
      setCountQuantity(countQuantity - 1)
      dispath(isData(!isDataProduct))
    }
  }

  // Prev Up
  const handlePrevUp = () => {
    if (countQuantity >= 10) {
    } else {
      setCountQuantity(countQuantity + 1)
      dispath(isData(!isDataProduct))
    }
  }

  // Onchange
  const handleChange = () => { }

  return (
    <div>
      {isLoading && <div className='fixed bottom-0 left-0 right-0 top-0  bg-[#f0eeeec9]  z-50 transition-opacityDetail'>
        <div className='fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <Spinner animation="border" variant="danger" />
        </div>
      </div>}
      <div className={`fixed bottom-0 ${show ? "visible " : "invisible"}  left-0 right-0 top-0  bg-[#0b0b0bc9]  z-50 transition-opacityDetail  `}>

        {opacity == 0 &&
          <div className='text-[#9e9999] text-[25px] transition duration-[500ms]  fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
            Loading...
          </div>
        }
        <div className={`opacity-[${opacity}] ${show ? "visible " : "invisible"} transition-opacityDetail  flex overflow-hidden  w-[1160px] h-[663px] bg-[#fff] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`}>

          <button onClick={hiddenDetail} className='group absolute transition duration-[300ms] right-[7px] top-[7px] py-[5px] hover:bg-black  px-[11px]'>
            <i className="group-hover:text-[#fff]  text-[12px] fa-solid fa-x text-[#9e9999]"></i>
          </button>

          <div className='w-[550px] relative '>
            <Swiper
              modules={[Navigation]}
              slidesPerView="auto"
            >
              <SwiperSlide>
                <img className='w-[95%] object-cover h-[91%] ml-[36px] mt-[31px]' src={productDetail?.image} /></SwiperSlide>
              <SwiperSlide>
                <img className='w-[95%] object-cover h-[91%] ml-[36px] mt-[31px]' src={productDetail?.imageSlick1} /></SwiperSlide>
              <SwiperSlide>
                <img className='w-[95%] object-cover h-[91%] ml-[36px] mt-[31px]' src={productDetail?.imageSlick2} /></SwiperSlide>
              <NavigationSlide />
            </Swiper>
          </div>

          <div className='w-[601px] py-[37px] px-[46px]'>
            <h3 className='text-[40px] tracking-[1px]'>{productDetail?.name}</h3>

            <div className='mt-[25px]'>

              <div className=' flex gap-[104px]'>
                <h3 className='text-[20px] font-medium pt-[4px]'> Price:</h3>
                <span className='text-[#9e9999] text-[23px] font-medium'>Rs. {productDetail?.price * countQuantity + ".00"}</span>
              </div>

              <div className=' flex gap-[104px] mt-[15px]'>
                <div className='text-[20px] font-medium pt-[4px]'> Type:</div>
                <div className='flex gap-[13px]'>

                  <div className='border-2 border-[#ef6d9f] h-[37px] px-[12px]'>
                    <h3 className='text-[22px]  text-pink-500 h-full flex justify-center items-center'>Wireless</h3>
                  </div>

                  <div className='border h-[37px] py-0 px-[12px]'>
                    <h3 className='text-[22px] h-full flex justify-center items-center  text-[#9e9999] font-normal'>Wired</h3>
                  </div>

                </div>
              </div>

              <div className=' flex gap-[81px] mt-[28px]'>
                <div className='text-[20px] font-medium pt-[4px]'> Weight:</div>

                <div className='flex gap-[13px] flex-wrap'>

                  <div className='border-2 border-[#ef6d9f] h-[37px] px-[12px]'>
                    <h3 className='text-[22px]  text-pink-500 h-full flex justify-center items-center'>289 g</h3>
                  </div>

                  <div className='border h-[37px] py-0 px-[12px]'>
                    <h3 className='text-[22px] h-full flex justify-center items-center  text-[#9e9999] font-normal'>250 g</h3>
                  </div>

                  <div className='border h-[37px] py-0 px-[12px]'>
                    <h3 className='text-[22px] h-full flex justify-center items-center  text-[#9e9999] font-normal'>300 g</h3>
                  </div>

                  <div className='border h-[37px] py-0 px-[12px]'>
                    <h3 className='text-[22px] h-full flex justify-center items-center  text-[#9e9999] font-normal'>280 g</h3>
                  </div>

                </div>
              </div>

              <div className=' flex gap-[72px] mt-[28px]'>
                <div className='text-[20px] font-medium pt-[4px]'> Material:</div>

                <div className='flex gap-[13px] flex-wrap'>

                  <div className='border-2  border-[#ef6d9f] h-[37px] px-[12px]'>
                    <h3 className='text-[22px]  text-pink-500 h-full flex justify-center items-center'>Silicon</h3>
                  </div>

                  <div className='border h-[37px] py-0 px-[12px]'>
                    <h3 className='text-[22px] h-full flex justify-center items-center  text-[#9e9999] font-normal'>Leather</h3>
                  </div>

                  <div className='border h-[37px] py-0 px-[12px]'>
                    <h3 className='text-[22px] h-full flex justify-center items-center  text-[#9e9999] font-normal'>Fiber</h3>
                  </div>

                  <div className='border h-[37px] py-0 px-[12px]'>
                    <h3 className='text-[22px] h-full flex justify-center items-center  text-[#9e9999] font-normal'>Plastic</h3>
                  </div>

                </div>
              </div>

              <div className=' flex gap-[68px] mt-[28px]'>
                <div className='text-[20px] font-medium pt-[4px]'> Quantity:</div>
                <div className='h-[34px] w-[110px] text-center border flex'>
                  <button onClick={handlePrevDown}
                    className='hover:bg-pink-500 hover:text-[#fff] transition duration-[300ms] w-[30px] h-[31px] py-0 px-[10px] flex items-center text-[20px] text-pink-500'>-</button>
                  <input onChange={handleChange} className='text-[#9e9999] w-[46px] h-full text-center border-x-2 text-[20px]' value={countQuantity} />
                  <button
                    onClick={handlePrevUp}
                    className='hover:bg-pink-500 hover:text-[#fff] transition duration-[300ms] w-[33px] h-[31px] py-0 px-[10px] flex items-center text-pink-500 text-[20px]'>+</button>

                </div>

              </div>

              <div className=' flex gap-[19px] mt-[28px] w-[483px]'>
                <button onClick={() =>
                  handleAddToCart(
                    productDetail.id,
                    productDetail.name,
                    productDetail.price,
                    productDetail.quantity,
                    productDetail.image
                  )}
                  className='transition duration-[300ms] py-[17px] px-[32px] bg-pink-500 text-[19px] hover:bg-[#1a1a1a] text-[#fff]'>
                  Add to Cart
                </button>
                <button className='transition duration-[300ms] py-[17px] px-[32px] bg-pink-500 text-[19px] hover:bg-[#1a1a1a] text-[#fff]'>
                  Add to wishlist
                </button>
              </div>
              <Link style={{ textDecoration: "none", color: "black" }} href={`/products/${productDetail?.name}`}>
                <button onClick={() => setShow(false)} className=' hover:text-pink-500 transition duration-[300ms] flex gap-[19px] mt-[22px] w-[483px] text-[22px] items-center font-medium'>
                  View Product
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
