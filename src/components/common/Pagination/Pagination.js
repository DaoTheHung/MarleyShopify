import React from 'react';
import { useState } from 'react';

const Pagination = ({ cartPage, totalPage, paginate, crPage }) => {
    const [color, setColor] = useState('')

    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalPage / cartPage); i++) {
        pageNumbers.push(i)

    }


    return (
        <div className='absolute left-[58%] bottom-[-525px]'>
            <div className='flex justify-center gap-[6px] '>
                {pageNumbers.map((item, i) => (

                    <button
                        key={i}
                        className={`${item === crPage ? "bg-black" : ''} text-white h-[40px] w-[40px] bg-pink-500`}
                        onClick={(e) => paginate(item)} >
                        <div className='text-[20px] font-semibold'>
                            {item}
                        </div>
                    </button>

                ))}
            </div>
        </div>
    )
}

export default Pagination