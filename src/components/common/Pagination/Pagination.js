import React from 'react';
import { useState } from 'react';

const Pagination = ({ cartPage, totalPage, paginate, crPage }) => {
    const [total, setTotal] = useState([])

    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(totalPage / cartPage); i++) {
        pageNumbers.push(i + 1)
    }

    return (
        <div className=''>
            <div className='flex justify-center gap-[6px] mt-[39px]'>
                {pageNumbers.map((item, i) => (
                    <button
                        key={i}
                        className={`hover:bg-[#000000] transition duration-[300ms] ${item === crPage ? "bg-black" : ''}   text-white h-[40px] w-[40px] bg-pink-500`}
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
