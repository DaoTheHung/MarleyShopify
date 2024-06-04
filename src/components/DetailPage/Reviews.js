import React, { useState, useEffect } from 'react'
import FormReviewDetail from '../common/Form/FormReviewDetail'
import { useRouter } from 'next/router'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { commentsSelector, getComment, productSelector, isDataSelector, isData } from '../../../store'
export default function Reviews() {
    const [data, setData] = useState({})
    const router = useRouter()
    // State
    const [openFormReview, setOpenFormReview] = useState(false)
    // Get data redux
    const dispath = useDispatch()
    const dataProduct = useSelector(productSelector)
    const comments = useSelector(commentsSelector)
    const isDataProduct = useSelector(isDataSelector)

    useEffect(() => {
        dispath(getComment())

    }, [dispath, isDataProduct])

    // Detail
    const detailComment = dataProduct?.find(product => product.name == router.query.name)


    return (
        <div>
            <h3>
                Customer Reviews
            </h3>
            <div className='w-full flex-col md:flex-row lg:flex-row border-t border-b flex justify-between'>
                <div className='flex flex-col md:flex-row lg:flex-row  gap-[20px] pt-[20px] pb-[30px]'>
                    <span className=' tracking-[3px]'>
                        <i className="fa-solid text-[#1a1a1a6b] fa-star text-[30px]"></i>
                        <i className="fa-solid text-[#1a1a1a6b] fa-star text-[30px]"></i>
                        <i className="fa-solid text-[#1a1a1a6b] fa-star text-[30px]"></i>
                        <i className="fa-solid text-[#1a1a1a6b] fa-star text-[30px]"></i>
                        <i className="fa-solid text-[#1a1a1a6b] fa-star text-[30px]"></i>
                    </span>
                    <h3 className='text-ink-100 text-[22px] font-normal'>
                        Based on 3 reviews
                    </h3>

                </div>
                <div className='pt-[15px] pb-[30px]'>
                    <button
                        onClick={() => setOpenFormReview(!openFormReview)}
                        className='transition duration-[300ms] py-[17px] px-[32px] bg-pink-500 text-[19px] hover:bg-[#1a1a1a] text-[#fff]'>
                        Write a review
                    </button>
                </div>
            </div>
            {openFormReview && <FormReviewDetail setOpenFormReview={setOpenFormReview} />}
            {comments?.map(comment => (
                <div key={comment.id} className='w-full border-t border-b  justify-between' >
                    {comment.pId == detailComment.id &&
                        <div className=' flex flex-col gap-[14px] pt-[20px] pb-[30px]'>
                            <span className=' tracking-[3px]'>
                                <i className="fa-solid text-[#1a1a1a6b] fa-star text-[18px]"></i>
                                <i className="fa-solid text-[#1a1a1a6b] fa-star text-[18px]"></i>
                                <i className="fa-solid text-[#1a1a1a6b] fa-star text-[18px]"></i>
                                <i className="fa-solid text-[#1a1a1a6b] fa-star text-[18px]"></i>
                                <i className="fa-solid text-[#1a1a1a6b] fa-star text-[18px]"></i>
                            </span>
                            <h3 className='text-[18px] font-semibold'>
                                {comment.review}
                            </h3>
                            <h3 className='text-[18px] text-ink-100 font-semibold italic'>
                                {comment.name} <span className='font-normal'>on</span> {comment.time}
                            </h3>

                        </div>
                    }
                </div>
            ))}
        </div>
    )
}
