import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import Link from 'next/link';
import PopupDetailProduct from '../common/PopupDetailProduct'
import { useSelector, useDispatch } from "react-redux"
import { getProducts, productSelector, cartSelector } from '../../../store'

export default function HeadphoneData() {
  const router = useRouter()

  // Get data redux
  const data = useSelector(productSelector)
  const dataCart = useSelector(cartSelector)
  const dispath = useDispatch()

  useEffect(() => {
    dispath(getProducts())
  }, [dispath])

  const countProduct = dataCart?.reduce((int, product) => int + product.quantity, 0)
  useEffect(() => {
    setShow(false)
    setOpacity(0)
  }, [countProduct])

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
    <div className=' relative bottom-[-29rem] md:bottom-[-40rem]'>
      <div className='md:w-full  sm:w-full h-full m-auto '>
        <div className='md:w-[35px] md:h-[6px] w-[26px] h-[5px] m-auto rounded-[5px] bg-pink-500'></div>
        <h3 className='text-center text-[45px] md:text-[52px] mt-[39px]'>Choose your wireless<br />
          headphone</h3>
        <p className='text-center text-[24px] text-[#9e9999] mt-[29px]'>Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum raucibus pulvinar elementum integer</p>
      </div>

      <div className='w-[89%]    md:w-[73%] m-auto flex-col sm:flex-row md:flex-row flex justify-between '>
        {data?.slice(0, 3).map((product) => (

          <div key={product.id} className='w-full sm:w-[] md:w-[31%] h-auto md:h-[700px] group/item overflow-hidden'>
            <div className='relative group/edit transition duration-[600ms] cursor-pointer group-hover/item:shadow-cart  group/edit mb-[41px]'>
              <div className='relative '>
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
            <div className='flex flex-col gap-[20px] '>
              <span className='m-auto tracking-[3px]'>
                <i className="fa-solid text-[#1a1a1a6b] fa-star text-[12px]"></i>
                <i className="fa-solid text-[#1a1a1a6b] fa-star text-[12px]"></i>
                <i className="fa-solid text-[#1a1a1a6b] fa-star text-[12px]"></i>
                <i className="fa-solid text-[#1a1a1a6b] fa-star text-[12px]"></i>
                {product.star == "for" ? <i className="fa-regular text-[12px] fa-star text-[#1a1a1a6b]"></i> : <i className="fa-solid text-[#1a1a1a6b] fa-star text-[12px]"></i>}
              </span>
              <h3 className='text-center cursor-pointer'>{product.name}</h3>
              <h3 className='text-center text-[22px]'>Rs. {product.price}</h3>
            </div>
          </div>
        ))}
      </div>
      <PopupDetailProduct show={show} setShow={setShow} opacity={opacity} setOpacity={setOpacity} />

    </div >
  )
}
