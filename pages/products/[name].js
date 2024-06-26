import React, { useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Redux


// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation, Thumbs } from "swiper";

import { useRouter } from 'next/router'

// Redux
import { productSelector, getProducts, isDataSelector, isData, showCartSelector, showCart, loginSelector } from '../../store'
import { useSelector, useDispatch } from "react-redux"

//
import { NavigationSlide } from '../../src/components/common/DataSlide/DataSlide';
import Tabs from '../../src/components/DetailPage/Tabs';
import DataDetail from '../../src/components/DetailPage/DataDetail';
import Spinner from 'react-bootstrap/Spinner';


export default function products() {
    const ref = useRef()
    const [dataProduct, setDataProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)



    // Sliders
    const [slideThumbs, setSlideThumbs] = useState(null);

    // Zoom Image
    const [origin, setOrigin] = useState({

    })

    const [scale, setScale] = useState(1)

    // Quantity product
    const [count, setCount] = useState(1)


    const router = useRouter()
    // Get data redux
    const data = useSelector(productSelector)
    const isDataProduct = useSelector(isDataSelector)
    const listUser = useSelector(loginSelector)


    const dispath = useDispatch()
    useEffect(() => {
        dispath(getProducts())
    }, [dispath]);

    // Find products detail
    const findDetail = data.find(product => product.name == router.query.name)

    const productDetail = {
        id: findDetail?.id,
        name: findDetail?.name,
        price: findDetail?.price,
        quantity: findDetail?.quantity,
        image: findDetail?.image,
        imageSlick1: findDetail?.imageSlick1,
        imageSlick2: findDetail?.imageSlick2,
        imageSlick3: findDetail?.imageSlick3,
    }

    const images = [
        {
            id: 1,
            image: findDetail?.image

        },
        {
            id: 2,
            image: findDetail?.imageSlick1
        },
        {
            id: 3,
            image: findDetail?.imageSlick2
        },
        {
            id: 4,
            image: findDetail?.imageSlick3
        }
    ]

    // Default slide
    const [typeImage, setTypeImage] = useState(images[0].id)


    // Prev quantity product
    const handlePrevDown = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const handlePrevUp = () => {
        if (count < 10) {
            setCount(count + 1)
        }

    }

    // Zoom Image
    const handleZoomImage = (e) => {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        const a = {
            x,
            y,
        }
        setOrigin(a)
        setScale("2")
    }

    const handleDefautZoom = (e) => {
        setOrigin("center")
        setScale(1)
    }

    // Onchange
    const handleChange = (event) => {

    }

    // Add to cart
    useEffect(() => {
        const json = JSON.parse(localStorage.getItem('cart'))
        if (json !== null) {
            setDataProduct(json)
        }
    }, [isDataProduct])

    const handleAddtoCart = () => {
        const checkProductDetail = dataProduct?.find(product => product.id == productDetail?.id)
        const newProduct = {
            id: productDetail?.id,
            name: productDetail?.name,
            price: productDetail?.price,
            image: productDetail?.image,
            quantity: productDetail?.quantity,
        }
        const fakeData = [...dataProduct]
        if (!listUser.fullname) {
            router.push('/account/login')
        } else {

            if (checkProductDetail) {

                // Update quantity and price in localstotage
                const updatedCart = dataProduct.map((p) =>
                    p.id === productDetail?.id ? { ...p, quantity: p.quantity + 1 } : p
                )
                localStorage.setItem('cart', JSON.stringify(updatedCart))
                setDataProduct(updatedCart)
                setIsLoading(true)

                // Time open modal cart
                setTimeout(() => {
                    setIsLoading(false)
                    dispath(showCart(false))

                }, 2000)

            } else {
                fakeData.push(newProduct)
                setDataProduct(fakeData)
                localStorage.setItem('cart', JSON.stringify(fakeData))
                setIsLoading(true)

                // Time open modal cart
                setTimeout(() => {
                    setIsLoading(false)
                    dispath(showCart(false))

                }, 2000)

            }
            dispath(isData(!isDataProduct))
        }
    }


    return (

        <div className='w-full  sm:w-[99%] mt-[74px]'>
            {isLoading && <div className='fixed bottom-0 left-0 right-0 top-0  bg-[#f0eeeec9]  z-50 transition-opacityDetail'>
                <div className='fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <Spinner animation="border" variant="danger" />
                </div>
            </div>}
            <div className=' justify-center m-auto  flex flex-col sm:flex-row xl:flex-row md:flex-col'>
                <div className=' xl:w-[578px]  relative cursor-pointer '>
                    <div onMouseMove={handleZoomImage} onMouseLeave={handleDefautZoom} className='overflow-hidden '>
                        <Swiper
                            thumbs={{ swiper: slideThumbs && !slideThumbs.destroyed ? slideThumbs : null }}
                            modules={[Navigation, Thumbs]}
                        >

                            {
                                images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            style={typeImage === image.id ? { transformOrigin: `${origin.x}px ${origin.y}px`, transform: `scale(${scale})` } : { transform: 'scale(1)' }}
                                            className={` w-[100%] origin-center object-cover h-auto`}
                                            src={image.image} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>

                    <div className='mt-[20px] ml-[40px] md:ml-[20px] xl:ml-[20px]'>
                        <Swiper
                            onSwiper={setSlideThumbs}
                            slidesPerView={4}
                            modules={[Navigation, Thumbs]}

                        >
                            {
                                images.map((image, index) => (

                                    <SwiperSlide key={index}>
                                        <div
                                            style={typeImage === image.id ? { border: "4px solid #ef6d9f", opacity: "1" } : {}}
                                            className='md:w-[136.75px] xl:w-[136.75px] w-[61px] transition duration-[300ms] opacity-[0.5] mr-[10px] cursor-pointer hover:border-4 hover:border-pink-500 hover:opacity-[1]'
                                            onClick={() => (setTypeImage(image.id))}
                                            key={index}
                                        >

                                            <img className='w-full  object-cover' src={image.image} />
                                        </div>
                                    </SwiperSlide>

                                ))
                            }
                        </Swiper>
                    </div>

                </div>
                <div className='xl:w-[601px] px-[49px] py-[37px] md:px-[82px] xl:px-[82px]'>
                    <h3 className='text-[40px] tracking-[1px]'>{productDetail?.name}</h3>

                    <div className='mt-[25px]'>

                        <div className=' flex gap-[104px] md:justify-start xl:justify-start justify-between'>
                            <h3 className='text-[20px] font-medium pt-[4px]'> Price:</h3>
                            <span className='text-pink-500 text-[23px] font-medium'>Rs. {productDetail?.price * count + ".00"}</span>
                        </div>

                        <div className=' flex gap-[104px] mt-[15px] md:justify-start xl:justify-start justify-between'>
                            <div className='text-[20px] font-medium pt-[4px]'> Type:</div>
                            <div className='flex gap-[13px] flex-col  md:flex-row xl:flex-row'>

                                <div className='border-2 border-[#ef6d9f] h-[37px] px-[12px]'>
                                    <h3 className='text-[22px]  text-pink-500 h-full flex justify-center items-center'>Wireless</h3>
                                </div>

                                <div className='border h-[37px] py-0 px-[12px]'>
                                    <h3 className='text-[22px] h-full flex justify-center items-center  text-[#9e9999] font-normal'>Wired</h3>
                                </div>

                            </div>
                        </div>

                        <div className=' flex gap-[81px] mt-[28px] md:justify-start xl:justify-start justify-between'>
                            <div className='text-[20px] font-medium pt-[4px]'> Weight:</div>

                            <div className='flex gap-[13px] flex-col md:flex-row xl:flex-row'>

                                <div className='border-2 border-[#ef6d9f] h-[37px] w-[83px]'>
                                    <h3 className='text-[22px]  text-pink-500 h-full flex justify-center items-center'>289 g</h3>
                                </div>

                                <div className='border h-[37px] w-[83px]'>
                                    <h3 className='text-[22px] h-full flex justify-center items-center  text-[#9e9999] font-normal'>250 g</h3>
                                </div>

                                <div className='border h-[37px]  w-[83px]'>
                                    <h3 className='text-[22px] h-full flex justify-center items-center  text-[#9e9999] font-normal'>300 g</h3>
                                </div>

                                <div className='border h-[37px] w-[83px]'>
                                    <h3 className='text-[22px] h-full flex justify-center items-center  text-[#9e9999] font-normal'>280 g</h3>
                                </div>

                            </div>
                        </div>

                        <div className=' flex gap-[72px] mt-[28px] md:justify-start xl:justify-start justify-between'>
                            <div className='text-[20px] font-medium pt-[4px]'> Material:</div>

                            <div className='flex gap-[13px] flex-col md:flex-row xl:flex-row'>

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

                        <div className=' flex gap-[80px] mt-[20px] md:justify-start xl:justify-start justify-between'>
                            <h3 className='text-[20px] font-medium pt-[4px]'> Vendor:</h3>
                            <h3 className='text-black font-normal text-[23px] cursor-pointer hover:text-pink-500 transition duration-[500ms]'>Bloom</h3>
                        </div>

                        <div className=' flex gap-[103px] mt-[20px] md:justify-start xl:justify-start justify-between'>
                            <h3 className='text-[20px] font-medium pt-[4px]'> Type:</h3>
                            <h3 className='text-ink-100 font-normal text-[23px] '>Headphone</h3>

                        </div>

                        <div className=' flex gap-[48px] mt-[20px] md:justify-start xl:justify-start justify-between'>
                            <h3 className='text-[20px] font-medium pt-[4px]'> Availability:</h3>
                            <h3 className='text-green-400 font-normal text-[23px] '>In stock!</h3>

                        </div>

                        <div className=' flex gap-[68px] mt-[20px]  md:justify-start xl:justify-start justify-between'>
                            <div className='text-[20px] font-medium pt-[4px]'> Quantity:</div>
                            <div className='h-[34px] w-[110px] text-center border flex'>
                                <button
                                    onClick={handlePrevDown}
                                    className='hover:bg-pink-500 hover:text-[#fff] transition duration-[300ms] w-[30px] h-[31px] py-0 px-[10px] flex items-center text-[20px] text-pink-500'>-</button>
                                <input
                                    onChange={handleChange}
                                    className='text-[#9e9999] w-[46px] h-full text-center border-x-2 text-[20px]'
                                    value={count || ''}
                                />
                                <button
                                    onClick={handlePrevUp}
                                    className='hover:bg-pink-500 hover:text-[#fff] transition duration-[300ms] w-[33px] h-[31px] py-0 px-[10px] flex items-center text-pink-500 text-[20px]'>+</button>

                            </div>

                        </div>


                        <div className=' flex gap-[19px] mt-[28px] w-[270px] md:w-[483px] flex-col md:flex-row xl:flex-row'>
                            <button
                                onClick={handleAddtoCart}
                                className='transition duration-[300ms] py-[17px] px-[32px] bg-pink-500 text-[19px] hover:bg-[#1a1a1a] text-[#fff]'>
                                Add to Cart
                            </button>
                            <button className='transition duration-[300ms] py-[17px] px-[32px] bg-pink-500 text-[19px] hover:bg-[#1a1a1a] text-[#fff]'>
                                Buy it now
                            </button>
                        </div>
                        <div className=' flex gap-[19px] mt-[20px] w-[270px] md:w-[483px]'>
                            <button
                                className='transition duration-[300ms] py-[17px] px-[32px] bg-pink-500 text-[19px] hover:bg-[#1a1a1a] text-[#fff]'>
                                Add to wishlist
                            </button>
                        </div>

                    </div >
                </div >
            </div >
            <Tabs />
            <DataDetail />
        </div >
    )
}
