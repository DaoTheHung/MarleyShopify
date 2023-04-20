import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Pagination from '../common/Pagination/Pagination';
import { FormSelect } from '../common/Form/FormSelect';
import { productSelector, getProducts } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
const ProductData = () => {
    const [animate, setAnimate] = useState("left-0")
    // Get data redux
    const dispath = useDispatch()
    const products = useSelector(productSelector)

    useEffect(() => {
        dispath(getProducts())
    }, [dispath])

    // Pagination

    const [crPage, setCrPage] = useState(1)
    const [cartPage, setCartPage] = useState(4);

    const lastCart = crPage * cartPage;
    const firtCart = lastCart - cartPage;
    const fakeProductPage = [...products]
    const currenCart = fakeProductPage.slice(firtCart, lastCart)

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

                <Row className='bg-[#0000000d] py-[16px] px-[6px]'>
                    <Col xs>
                        <div className='flex relative w-[87px]'>
                            <div className={`transition-allLinear duration-[500ms] absolute bg-pink-500 w-[50%] h-full ${animate}`}>

                            </div>
                            <div onClick={() => setAnimate('left-0')} className='text-[22px] '>
                                <i class="fa-sharp fa-solid fa-list p-[10px] border border-[#e9e9e9]"></i>
                            </div>
                            <div onClick={() => setAnimate('right-0')} className='text-[22px] ml-[-1px]'>
                                <i class="fa-sharp fa-solid fa-list p-[10px] border border-[#e9e9e9]"></i>
                            </div>
                        </div>
                    </Col>
                    <Col xs={{ order: 12 }} className='flex items-center'>

                        <h3 className='text-ink-100 text-[22px] font-normal'>Paginate by</h3>
                        <FormSelect />

                    </Col>
                    <Col xs={{ order: 1 }} className='flex items-center'>
                        <h3 className='text-ink-100 text-[22px] font-normal'>Sort by</h3>
                    </Col>
                </Row>

                <div className='flex flex-wrap gap-[27px] mt-[24px] relative'>
                    {currenCart?.map((product) => (

                        <div key={product.id} className='w-[31%]  group/item overflow-hidden'>
                            <div className='relative group/edit transition duration-[600ms] cursor-pointer group-hover/item:shadow-cart  group/edit mb-[41px]'>
                                <div className='relative '>
                                    <img className='' src={product.image} />
                                    <img className='transition   duration-[600ms] absolute top-0 opacity-[0] group-hover/edit:opacity-100' src={product.imageSlick1} />
                                </div>
                                <div className='transition-opacity duration-[600ms] group-hover/edit:bottom-[20px] w-full absolute bottom-1 opacity-[0]  group-hover/edit:opacity-100'>
                                    <div className='pl-[115px]  text-[15px] tracking-[37px] gap-[10px]  flex'>
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
                            <div className='flex flex-col gap-[20px] '>
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
                <Pagination cartPage={cartPage} totalPage={products.length} paginate={paginate} crPage={crPage} />


            </div>
        </>
    );
}

export default ProductData;
