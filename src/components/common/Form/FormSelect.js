import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productSelector, getProducts } from '../../../../store'
export const FormSelect = ({ setData }) => {
    const [show, setShow] = useState(false)
    const [type, setType] = useState()

    // Data select
    const dataSort = [
        {
            name: "Featured"
        },
        {
            name: "Best selling"
        },
        {
            name: "Alphabetically, A-Z"
        },
        {
            name: "Alphabetically, Z-A"
        },
        {
            name: "Price, low to high"
        },
        {
            name: "Price, high to low"
        },
        {
            name: "Date, old to new"
        },
        {
            name: "Date, new to old"
        },
    ]
    // Get data redux
    const products = useSelector(productSelector)
    const dispath = useDispatch()

    useEffect(() => {
        dispath(getProducts())
    }, [dispath])


    // Handle data
    const handleSortProduct = (name) => {
        setType(name)
        const arrProduct = [...products]

        // Featured
        if (name === "Featured") {
            setData(arrProduct)
        }


        // A - Z
        if (name === "Alphabetically, A-Z") {
            const lowText = arrProduct.sort((a, b) => a.name.localeCompare(b.name))
            setData(lowText)
        }

        // A - Z
        if (name === "Alphabetically, Z-A") {
            const highText = arrProduct.sort((a, b) => b.name.localeCompare(a.name))
            setData(highText)
        }

        // Price, low to high
        if (name === "Price, low to high") {
            const lowPrice = arrProduct.sort((a, b) => a.price - b.price)
            setData(lowPrice)
        }


        // Price, high to low
        if (name === "Price, high to low") {
            const highPrice = arrProduct.sort((a, b) => b.price - a.price)
            setData(highPrice)
        }



    }
    return (
        <>
            <div onClick={() => setShow(!show)} className='w-[223px] cursor-pointer  h-[30px] bg-pink-500 px-[10px] flex items-center justify-between relative'>
                <div className='text-[18px] text-white'>Featured</div>
                <div className='mt-[-6px] text-white text-[12px]'><i class="fa-solid fa-sort-down"></i></div>
                {show && <div className=' w-[223px] h-[218px] bg-[#fff] absolute top-[35px] left-0 z-10 overflow-y-scroll '>
                    {dataSort.map((item, i) => (
                        <div
                            onClick={() => handleSortProduct(item.name)}
                            style={type === item.name ? { background: "#3498db", color: "#fff" } : {}}
                            className='pl-[13px] text-[18px] hover:bg-[#3498db] hover:text-[#fff] cursor-pointer leading-[35px] text-ink-100' key={i}>{item.name}</div>
                    ))}
                </div>}
            </div>
        </>
    )
}

