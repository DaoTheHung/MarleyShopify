import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import Pagination from '../common/Pagination/Pagination';
import { FormSelect } from '../common/Form/FormSelect';
import { productSelector, getProducts } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
const ProductData = () => {
    const [animate, setAnimate] = useState("left-0")

    // Get data redux
    const dispath = useDispatch()

    const products = useSelector(productSelector)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api-test-two-beta.vercel.app/api/v1')
            .then((res) => {
                return (res.json())
            }).then((data) => {
                setData(data.data)
            });
        // const res = axios.get('https://api-test-two-beta.vercel.app/api/v1')
        // .then()
    }, [])

    // Pagination
    const [crPage, setCrPage] = useState(1)
    const [cartPage, setCartPage] = useState(5);
    const lastCart = crPage * cartPage;
    const firtCart = lastCart - cartPage;
    const fakeProductPage = [...products]
    const currenCart = data?.slice(firtCart, lastCart)
    const paginate = (pageNumber) => {
        setCrPage(pageNumber)

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }

    return (

        <>
            <div className='w-[845px] ml-[50px]'>

                <div className='bg-[#0000000d] py-[16px] px-[18px] flex justify-between'>
                    <div >
                        <div className='flex relative w-[87px]'>
                            <div className={`text-[22px] text-white transition-allLinear duration-[500ms] absolute  bg-pink-500 w-[50%] h-full ${animate}`}>
                                <i class="fa-sharp fa-solid fa-list p-[10px] border "></i>
                            </div>
                            <div onClick={() => setAnimate('left-0')} className='text-[22px] cursor-pointer'>
                                <i class="fa-sharp fa-solid fa-list p-[10px] border border-[#e9e9e9]"></i>
                            </div>
                            <div onClick={() => setAnimate('right-0')} className='text-[22px] ml-[-1px] cursor-pointer'>
                                <i class="fa-sharp fa-solid fa-list p-[10px] border border-[#e9e9e9]"></i>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>

                        <h3 className='text-ink-100 text-[22px] font-normal'>Paginate by</h3>

                    </div>
                    <div className='flex items-center gap-[5px]'>
                        <h3 className='text-ink-100 text-[22px] font-normal'>Sort by</h3>
                        <FormSelect setData={setData} data={data} />
                    </div>
                </div>

                <div className={`${animate == "right-0" ? "flex flex-col gap-0" : "flex "} flex-wrap gap-[27px] mt-[24px] relative`}>
                    {currenCart?.map((product) => (

                        <div key={product.id} className={`${animate == "right-0" ? "flex flex-row w-[88%]" : ""} w-[31%]  group/item overflow-hidden`}>
                            <div className='relative group/edit transition duration-[600ms] cursor-pointer group-hover/item:shadow-cart  group/edit mb-[41px]'>
                                <div className={`${animate == "right-0" ? "w-[358px] " : ""} relative`}>
                                    <img className='' src={product.image} />
                                    <img className='transition   duration-[600ms] absolute top-0 opacity-[0] group-hover/edit:opacity-100' src={product.imageSlick1} />
                                </div>
                                <div className='transition-opacity duration-[600ms] group-hover/edit:bottom-[20px] w-full absolute bottom-1 opacity-[0]  group-hover/edit:opacity-100'>
                                    <div className='justify-center  text-[15px] tracking-[37px] gap-[10px]  flex'>
                                        <Link style={{ textDecoration: "none" }} href={`/products/${product.name}`}>
                                            <div className='w-[45px] group h-[45px] transition duration-[500ms] rounded-[50%] hover:bg-pink-500 flex justify-center items-center pl-[37px] pt-[3px]'>
                                                <i className="text-ink-300 fa-solid fa-link transition duration-[500ms] group-hover:text-[#fff]"></i>
                                            </div>
                                        </Link>
                                        <div className='w-[45px] group h-[45px] transition duration-[500ms] rounded-[50%] hover:bg-pink-500 flex justify-center items-center pl-[37px] pt-[3px]'>
                                            <i className="fa-regular fa-heart transition duration-[500ms] group-hover:text-[#fff]"></i>
                                        </div>
                                        <div onClick={() => showDetail(product.id)} className='w-[45px] group h-[45px] transition duration-[500ms] rounded-[50%] hover:bg-pink-500 flex justify-center items-center pl-[37px] pt-[3px]'>
                                            <i className="fa-solid fa-magnifying-glass transition duration-[500ms] group-hover:text-[#fff]" ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${animate == "right-0" ? "flex flex-col gap-[20px] mt-[138px] ml-[22px]" : "text-center "}`}>
                                <div className={`${animate == "right-0" ? "" : "text-center"} tracking-[3px]`}>
                                    <i className="fa-solid text-[#1a1a1a6b] fa-star text-[12px]"></i>
                                    <i className="fa-solid text-[#1a1a1a6b] fa-star text-[12px]"></i>
                                    <i className="fa-solid text-[#1a1a1a6b] fa-star text-[12px]"></i>
                                    <i className="fa-solid text-[#1a1a1a6b] fa-star text-[12px]"></i>
                                    <i className="fa-solid text-[#1a1a1a6b] fa-star text-[12px]"></i>
                                </div>
                                <div className={`${animate == "right-0" ? "" : "text-center"}`}>
                                    <h3 className='cursor-pointer'>{product.name}</h3>
                                    <h3 className='text-[22px]'>Rs. {product.price}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Pagination cartPage={cartPage} totalPage={products.length} paginate={paginate} crPage={crPage} />


            </div>
        </>
    );
}

export default ProductData;
