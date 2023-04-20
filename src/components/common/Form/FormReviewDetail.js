import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import { timeComment } from '../FormatDate/getDateComment';
// React hook form
import { useForm } from "react-hook-form";

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { addComments, isDataSelector, isData, getProducts, productSelector, commentsSelector } from '../../../../store';


export default function FormReviewDetail({ setOpenFormReview }) {
    const refInput = useRef()
    const router = useRouter()

    // Get data redux
    const dispath = useDispatch()
    const dataProduct = useSelector(productSelector)
    const comments = useSelector(commentsSelector)
    const isDataProduct = useSelector(isDataSelector)
    useEffect(() => {
        dispath(getProducts())
    }, [dispath])

    const check = dataProduct?.find(product => product.name == router.query.name)


    // useForm
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ mode: "onSubmit" });
    const onSubmit = (data) => {
        const newComments = {
            pId: check.id,
            name: data.name,
            review: data.review,
            time: timeComment
        }
        dispath(addComments(newComments))
        dispath(isData(!isDataProduct))
        setOpenFormReview(false)


    };
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-[20px]">
                <h3 className='text-[18px] font-semibold'>Write a review</h3>
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex flex-col'>
                        <label className='text-ink-100 text-[20px]'>Name</label>
                        <input
                            type='text'
                            ref={refInput}
                            className='border-2 transition duration-[300ms] outline-none py-[18px] px-[15px] text-[20px] focus:border-pink-500 outline-offset-0'
                            placeholder='Enter your name'
                            defaultValue=""
                            {...register("name", {
                                required: true,
                                minLength: 3
                            })}
                        />
                        {errors.name?.type === "required" && (
                            <span className="text-red-500 text-[18px] font-medium mt-2">Is required!</span>
                        )}
                        {errors.name?.type == "minLength" && (
                            <span className="text-red-500 text-[18px] font-medium mt-2">Name 3 or more characters</span>
                        )}
                    </div>


                    <div className='flex flex-col'>
                        <label className='text-ink-100 text-[20px]'>Body of Review(1500)</label>
                        <textarea
                            type='text'
                            ref={refInput}
                            className='border-2 transition duration-[300ms] outline-none py-[18px] px-[15px] text-[20px] focus:border-pink-500 outline-offset-0'
                            placeholder='Write your review'
                            defaultValue=""
                            {...register("review", {
                                required: true,
                            })}
                        />
                        {errors.review?.type === "required" && (
                            <span className="text-red-500 text-[18px] font-medium mt-2">Is required!</span>
                        )}
                    </div>


                    <div className='pt-[15px] pb-[30px]'>
                        <button
                            type='submit'
                            className='transition duration-[300ms] py-[17px] px-[32px] bg-pink-500 text-[19px] hover:bg-[#1a1a1a] text-[#fff]'>
                            Submit Review
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
