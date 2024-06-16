import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { updateProduct, isData, isDataSelector } from '../../../../store/index';

export const EditProduct = ({ showForm, setShowForm, data }) => {
    const dispath = useDispatch()
    const isDataState = useSelector(isDataSelector)

    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        defaultValues: {
            id: data.id,
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            star: data.star,
            titleImage: data.image,
            imageSlick1: data.imageSlick1,
            imageSlick2: data.imageSlick2,
            imageSlick3: data.imageSlick3,
        }
    });

    const onSubmit = (data) => {
        if (data) {
            console.log(data)
            dispath(updateProduct({ ...data, image: data.titleImage }))
            setShowForm('')
            dispath(isData(!isDataState))
        }
    }


    const handleImageChange = (e) => {
        setValue('name', e.target.value);
    };

    return (
        <div
            onClick={() => setShowForm(false)}
            className='fixed top-0 left-0 bottom-0 right-0 bg-black-300/90 z-[9999999]'>
            <div onClick={(e) => e.stopPropagation()} className='bg-white p-6 h-[75dvh]  w-[96%] overflow-y-auto lg:w-fit  rounded-md absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                <div onClick={() => setShowForm(false)} className='flex justify-end cursor-pointer'><i className="fa-solid fa-xmark"></i></div>
                <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex lg:gap-2 justify-between lg:flex-row flex-col gap-6 '>
                        <div className='flex flex-col gap-2 lg:w-1/2'>
                            <label htmlFor='name'>Name</label>
                            <input
                                id='name'
                                style={errors.name?.type ? { border: "3px solid #dd1d1d" } : {}}
                                type='name'
                                className='py-[10px] px-2 border  text-sm lg:text-base outline-none focus:ring-1 focus:ring-[#f96e89]'
                                {...register("name", {
                                    required: true,
                                    maxLength: 50

                                })}
                                onChange={handleImageChange}
                            />
                            {errors.name?.type === "required" && (
                                <div className="text-red-500 text-sm lg:text-base ">Enter a First Name</div>
                            )}


                            {errors.name?.type === "maxLength" && (
                                <div className="text-red-500 text-sm lg:text-base ">First Name maximum 10 characters</div>
                            )}
                        </div>
                        <div className='flex flex-col gap-2 lg:w-1/2'>
                            <label htmlFor='quantity'>Quantity</label>

                            <input
                                disabled
                                id='quantity'
                                type='quantity'
                                placeholder='Quantity'
                                value={1}
                                className='py-[10px] px-2 border text-sm lg:text-base outline-none focus:ring-1 focus:ring-[#f96e89]'
                                {...register("quantity", {
                                    required: true,
                                    maxLength: 10

                                })}

                            />

                        </div>
                    </div>

                    <div className='flex lg:gap-2 justify-between lg:flex-row flex-col gap-6 '>
                        <div className='flex flex-col gap-2 lg:w-1/2'>
                            <label htmlFor='prive'>Price</label>
                            <input
                                id='price'
                                style={errors.price?.type ? { border: "3px solid #dd1d1d" } : {}}
                                type='price'
                                placeholder='850.00'
                                className='py-[10px] px-2 border  text-sm lg:text-base outline-none focus:ring-1 focus:ring-[#f96e89]'
                                {...register("price", {
                                    required: true,
                                    maxLength: 10

                                })}
                            />
                            {errors.price?.type === "required" && (
                                <div className="text-red-500 text-sm lg:text-base ">Enter a First Name</div>
                            )}


                            {errors.price?.type === "maxLength" && (
                                <div className="text-red-500 text-sm lg:text-base ">First Name maximum 10 characters</div>
                            )}
                        </div>
                        <div className='flex flex-col gap-2 lg:w-1/2'>
                            <label htmlFor='star'>Star</label>

                            <input

                                id='star'
                                type='star'
                                placeholder='five'
                                className='py-[10px] px-2 border text-sm lg:text-base outline-none focus:ring-1 focus:ring-[#f96e89]'
                                {...register("star", {
                                    maxLength: 10

                                })}
                            />

                        </div>
                    </div>

                    <div className='flex flex-col gap-2 lg:w-full'>
                        <label htmlFor='titleImage'>Title Image</label>

                        <input
                            id='titleImage'
                            type='titleImage'
                            className='py-[10px] px-2 border text-sm lg:text-base outline-none focus:ring-1 focus:ring-[#f96e89]'
                            {...register("titleImage", {
                                required: true,
                                // pattern: /\.(jpeg|jpg|png|gif|bmp)$/i,

                            })}
                        />
                        {errors.titleImage?.type === "required" && (
                            <div className="text-red-500 text-sm lg:text-base ">Enter a Title Image</div>
                        )}
                        {/* {errors.titleImage?.type === "pattern" && (
                            <div className="text-red-500 text-sm lg:text-base ">Please enter a valid image URL</div>
                        )} */}
                    </div>

                    <div className='flex flex-col gap-2 lg:w-full'>
                        <label htmlFor='imageSlick1'>Image Slick - 1</label>

                        <input
                            id='imageSlick1'
                            type='imageSlick1'
                            className='py-[10px] px-2 border text-sm lg:text-base outline-none focus:ring-1 focus:ring-[#f96e89]'
                            {...register("imageSlick1", {
                                required: true,
                                // pattern: /\.(jpeg|jpg|png|gif|bmp)$/i,

                            })}
                        />
                        {errors.imageSlick1?.type === "required" && (
                            <div className="text-red-500 text-sm lg:text-base ">Enter a Image Slick - 1</div>
                        )}
                        {/* {errors.imageSlick1?.type === "pattern" && (
                            <div className="text-red-500 text-sm lg:text-base ">Please enter a valid image URL</div>
                        )} */}
                    </div>

                    <div className='flex flex-col gap-2 lg:w-full'>
                        <label htmlFor='imageSlick2'>Image Slick - 2</label>

                        <input
                            id='imageSlick2'
                            type='imageSlick2'
                            className='py-[10px] px-2 border text-sm lg:text-base outline-none focus:ring-1 focus:ring-[#f96e89]'
                            {...register("imageSlick2", {
                                required: true,
                                // pattern: /\.(jpeg|jpg|png|gif|bmp)$/i,

                            })}
                        />
                        {errors.imageSlick2?.type === "required" && (
                            <div className="text-red-500 text-sm lg:text-base ">Enter a Image Slick - 2</div>
                        )}
                        {/* {errors.imageSlick2?.type === "pattern" && (
                            <div className="text-red-500 text-sm lg:text-base ">Please enter a valid image URL</div>
                        )} */}
                    </div>

                    <div className='flex flex-col gap-2 lg:w-full'>
                        <label htmlFor='imageSlick3'>Image Slick - 3</label>

                        <input
                            id='imageSlick3'
                            type='imageSlick3'
                            className='py-[10px] px-2 border text-sm lg:text-base outline-none focus:ring-1 focus:ring-[#f96e89]'
                            {...register("imageSlick3", {
                                required: true,
                                // pattern: /\.(jpeg|jpg|png|gif|bmp)$/i,

                            })}
                        />
                        {errors.imageSlick3?.type === "required" && (
                            <div className="text-red-500 text-sm lg:text-base ">Enter a Image Slick - 2</div>
                        )}
                        {/* {errors.imageSlick3?.type === "pattern" && (
                            <div className="text-red-500 text-sm lg:text-base ">Please enter a valid image URL</div>
                        )} */}
                    </div>
                    <div className='w-full flex justify-center'>
                        <button type='sbmit' className='py-[10px] px-[28px] bg-[#f96e89] text-white' >Create</button>
                    </div>
                </form>


            </div>
        </div>
    )
}
