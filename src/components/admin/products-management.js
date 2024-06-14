import React, { useState, useEffect } from 'react'
import configApi from '../../../config/config';
import Link from 'next/link';
import PopupDetailProduct from '../common/PopupDetailProduct'
import { useRouter } from 'next/router';

import { CreateProduct } from './form/create-product'

const ProductsManagement = () => {
    const router = useRouter()

    const [showForm, setShowForm] = useState(false)

    //Loading
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch(configApi?.API_PRODUCTS)
            .then((res) => {
                return (res.json())
            }).then((data) => {
                setData(data)
                setIsLoading(false)
            });

        // const res = axios.get('https://api-test-two-beta.vercel.app/api/v1')
        // .then()
    }, [])

    // Hidden-block modal detail
    const [show, setShow] = useState(false)
    const [opacity, setOpacity] = useState(0)
    const showDetail = (id) => {
        router.query = `${id}`
        setShow(true)
        setTimeout(() => {
            setOpacity(1)
        }, 500);
    }

    return (
        <div className='w-[80%] mx-auto p-6 flex flex-col items-start gap-6'>
            <div className='text-xl font-medium'>Products Management</div>
            <button onClick={() => setShowForm(true)} className='py-2 px-3 bg-pink-500 text-white font-medium flex'>Create new products</button>
            <div className=' w-full flex flex-wrap justify-between items-center'>
                {!isLoading ?
                    data?.map((product) => (

                        <div key={product.id} className=' w-[29%] h-[471px] flex flex-col justify-between group/item overflow-hidden'>
                            <div className='relative group/edit transition duration-[600ms] cursor-pointer group-hover/item:shadow-cart  group/edit '>
                                <div className='relative '>
                                    <img className='h-[334px]' src={product.image} />
                                    <img className='transition w-full  duration-[600ms] absolute top-0 opacity-[0] group-hover/edit:opacity-100' src={product.imageSlick1} />
                                </div>
                                <div className='transition-opacity duration-[600ms] group-hover/edit:bottom-[20px] w-full absolute bottom-1 opacity-[0]  group-hover/edit:opacity-100'>
                                    <div className=' justify-center items-center  text-[15px] tracking-[37px] gap-[10px]  flex'>
                                        {/* <Link style={{ textDecoration: "none" }} href={`/products/${product.name}`}> */}
                                        <div className='w-[45px] bg-[rgb(255,255,255)] group h-[45px] transition duration-[500ms] rounded-[50%] hover:bg-pink-500 flex justify-center items-center pl-[37px] pt-[3px]'>
                                            <i className="text-ink-300 fa-solid fa-link transition duration-[500ms] group-hover:text-[#fff]"></i>
                                        </div>
                                        {/* </Link> */}
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
                    ))
                    : <img src="//cdn.shopify.com/s/files/1/0434/2520/2335/t/5/assets/loading.gif?v=157493769327766696621629093180" />
                }
            </div>

            {data == "" && <h3 className='text-center tracking-[3px] m-auto'>No results found!</h3>}

            <PopupDetailProduct show={show} setShow={setShow} opacity={opacity} setOpacity={setOpacity} />
            {showForm && <CreateProduct setShowForm={setShowForm} showForm={showForm} />}


        </div>
    )
}
export default ProductsManagement