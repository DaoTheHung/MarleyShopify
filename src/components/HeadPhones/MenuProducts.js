import React, { useEffect, useState } from 'react'
import { productSelector, getProducts } from '../../../store'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'

const MenuProducts = () => {
    const [position, setPosition] = useState(false)
    const [position1, setPosition1] = useState(false)
    const [position2, setPosition2] = useState(false)

    const [show, setShow] = useState(false)

    // Get data redux
    const dispath = useDispatch()
    const products = useSelector(productSelector)
    useEffect(() => {
        dispath(getProducts())
    }, [dispath])

    // Handle click tab
    const handleClickTab = () => {
        setPosition(!position), setPosition1(false), setPosition2(false)
    }

    const handleClickTab1 = () => {
        setPosition(false), setPosition1(!position1), setPosition2(false)
    }

    const handleClickTab2 = () => {
        setPosition(false), setPosition1(false), setPosition2(!position2)
    }

    return (

        <div>
            {show && <div className='fixed top-0 md:hidden lg:hidden left-0 right-0 bottom-0 bg-[#f1f1f1b3] z-10'></div>}
            <div onClick={() => setShow(true)} className='fixed flex ip:visible hover:bg-black-300 md:hidden justify-center items-center left-0 top-[50%] bottom-0 z-10 bg-pink-500 w-[50px] h-[50px]'>
                <i className="fa-solid fa-caret-right text-[#fff] text-[22px] text-center"></i>
            </div>

            <div className={`md:w-[314px] md:sticky md:p-0 ip:w-[381px] ip:pt-[102px] ip:px-[20px] transition-allLinear ip:overflow-y-scroll md:overflow-y-auto duration-500 ip:fixed ip:top-0 ip:bottom-0 ip:z-20 ip:bg-[#fff]  ${show ? "left-0" : "left-[-400px]"} `}>
                <div onClick={() => setShow(false)} className='ip:block md:hidden absolute top-[20px] text-ink-100 right-[20px] text-[20px]'>
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div className='sticky top-0'>
                    <div>
                        <h3 className='md:text-[22px] ip:text-[24px] font-semibold'>Category</h3>
                        <div className='w-full h-[2px]  bg-pink-500'></div>
                    </div>

                    <div className='mt-[50px] mb-[50px] ml-[1px] flex flex-col gap-[40px] '>
                        <div className=''>
                            <h3
                                onClick={handleClickTab}
                                className='md:text-[22px] ip:text-[29px] cursor-pointer flex justify-between font-normal items-center hover:text-pink-500 transition duration-[300ms] '>
                                Travel Headphones
                                {!position ?
                                    <i className=" fa-sharp fa-solid fa-plus  ip:text-[22px] md:text-[17px]"></i>
                                    :
                                    <i className="fa-solid fa-minus ip:text-[22px] md:text-[17px]"></i>}
                            </h3>

                            <ul className={`list-disc leading-[37px]`}>
                                <li className='hover:text-pink-500 transition duration-[300ms] ip:text-[19px] cursor-pointer '>Noise Isolated</li>
                                <li className='hover:text-pink-500 cursor-pointer transition ip:text-[19px] duration-[300ms]'>Closed Back Headset</li>
                            </ul>

                        </div>
                        <div className={` h-[74px] bg-[#fff] transition-allLinear duration-[500ms] ${position ? "mt-[-51px]" : "mt-[-118px]"} flex flex-col `}>
                            <h3
                                onClick={handleClickTab1}
                                className='md:text-[22px] ip:text-[29px] cursor-pointer flex justify-between font-normal items-center hover:text-pink-500 transition duration-[300ms] '>
                                Wireless Headphones
                                {!position1 ?
                                    <i className="fa-sharp fa-solid fa-plus ip:text-[22px]  md:text-[17px]"></i>
                                    :
                                    <i className="fa-solid fa-minus ip:text-[22px] md:text-[17px]"></i>}
                            </h3>

                            <ul className='list-disc leading-[37px]'>
                                <li className='hover:text-pink-500 transition duration-[300ms] ip:text-[19px] cursor-pointer '>HP Gaming Headset</li>
                                <li className='hover:text-pink-500 transition duration-[300ms] ip:text-[19px] cursor-pointer '>Red Headset</li>
                            </ul>
                        </div>
                        <div className={` h-[74px] bg-[#fff] transition-allLinear duration-[500ms] ${position1 ? "mt-[21px]" : "mt-[-67px]"} flex flex-col `}>
                            <h3
                                onClick={handleClickTab2}
                                className='md:text-[22px] ip:text-[29px] cursor-pointer flex justify-between font-normal items-center hover:text-pink-500 transition duration-[300ms] '>
                                Hi-Res Headphones
                                {!position2 ?
                                    <i className="fa-sharp fa-solid fa-plus ip:text-[22px] md:text-[17px]"></i>
                                    :
                                    <i className="fa-solid fa-minus ip:text-[22px] md:text-[17px]"></i>}
                            </h3>

                            <ul className='list-disc leading-[37px]'>
                                <li className='hover:text-pink-500 transition duration-[300ms] ip:text-[19px] cursor-pointer '>X2 Noise Isolated</li>
                                <li className='hover:text-pink-500 transition duration-[300ms] ip:text-[19px] cursor-pointer '>X2 Stereo</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`bg-[#fff] relative pt-[65px] transition-allLinear duration-[500ms] ${!position2 ? "mt-[-81px]" : "mt-[0px]"}`}>
                        <h3 className='text-[24px] font-semibold'>Hot Deals</h3>
                        <div className='w-full h-[2px]  bg-pink-500'></div>
                        <div className='w-full mt-[30px]'>
                            {products?.slice(5, 6).map((product) => (

                                <div key={product.id} className='w-full group/item overflow-hidden'>
                                    <div className='relative group/edit transition duration-[600ms] cursor-pointer group-hover/item:shadow-cart  group/edit mb-[41px]'>
                                        <div className='relative '>
                                            <img className='' src={product.image} />
                                            <img className='transition   duration-[600ms] absolute top-0 opacity-[0] group-hover/edit:opacity-100' src={product.imageSlick1} />
                                        </div>
                                        <div className='transition-opacity duration-[600ms] group-hover/edit:bottom-[20px] w-full absolute bottom-1 opacity-[0]  group-hover/edit:opacity-100'>
                                            <div className=' justify-center items-center  text-[15px] tracking-[37px] gap-[10px]  flex'>
                                                <Link style={{ textDecoration: "none" }} href={`/products/${product.name}`}>
                                                    <div className='w-[45px] bg-[#fff] group h-[45px] transition duration-[500ms] rounded-[50%] hover:bg-pink-500 flex justify-center items-center pl-[37px] pt-[3px]'>
                                                        <i className="text-ink-300 fa-solid fa-link transition duration-[500ms] group-hover:text-[#fff]"></i>
                                                    </div>
                                                </Link>
                                                <div className='w-[45px] bg-[#fff] group h-[45px] transition duration-[500ms] rounded-[50%] hover:bg-pink-500 flex justify-center items-center pl-[37px] pt-[3px]'>
                                                    <i className="fa-regular fa-heart transition duration-[500ms] group-hover:text-[#fff]"></i>
                                                </div>
                                                <div onClick={() => showDetail(product.id)} className='w-[45px] bg-[#fff] group h-[45px] transition duration-[500ms] rounded-[50%] hover:bg-pink-500 flex justify-center items-center pl-[37px] pt-[3px]'>
                                                    <i className="fa-solid fa-magnifying-glass transition duration-[500ms] group-hover:text-[#fff]" ></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[20px]  '>
                                        <span className='m-auto tracking-[3px]'>
                                            <i className="fa-solid text-[#1a1a1a6b] fa-star text-[12px]"></i>
                                            <i className="fa-solid text-[#1a1a1a6b] fa-star text-[12px]"></i>
                                            <i className="fa-solid text-[#1a1a1a6b] fa-star text-[12px]"></i>
                                            <i className="fa-solid text-[#1a1a1a6b] fa-star text-[12px]"></i>
                                            <i className="fa-solid text-[#1a1a1a6b] fa-star text-[12px]"></i>
                                        </span>
                                        <h3 className='text-center cursor-pointer'>{product.name}</h3>
                                        <h3 className='text-center text-[22px]'>Rs. {product.price}</h3>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
}

export default MenuProducts;
