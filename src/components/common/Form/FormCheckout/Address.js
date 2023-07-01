import React from 'react'
import { Checkbox, LeftOutlined } from 'antd';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { dtCheckoutSelector, isCheckout, } from '../../../../../store';
import { useDispatch, useSelector } from 'react-redux';


export default function Address() {
    const router = useRouter()

    // Redux
    const dataCheckout = useSelector(dtCheckoutSelector)
    const dispatch = useDispatch()

    // Form
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ mode: "onSubmit" });
    const onSubmit = (data) => {

        const checkout = {
            phone: data.numberPhone,
            name: data.firstname + " " + data.lastname,
            address: data.address,
            country: data.country,
            city: data.city
        }
        if (data) {
            dispatch(isCheckout(checkout))
            router.push('/checkout/shipping')
        }
    }

    const onChange = (e) => {
    };
    return (
        <div className='mt-[32px] '>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[20px]'>
                <div>
                    <h3 className='text-[20px]'>Contact</h3>
                    <div className='mt-[15px]'>
                        <input
                            style={errors.numberPhone?.type ? { border: "3px solid #dd1d1d" } : {}}
                            placeholder='Phone Number'
                            className='border-[1px]  pl-[20px]  w-full h-[50px] rounded-[7px] focus:border-primary-500 outline-none' type='text'
                            {...register("numberPhone", {
                                required: true,
                                pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

                            })}
                        />
                        {errors.numberPhone?.type === "required" && (
                            <div className="text-red-500 text-[16px] ">Enter a phone number</div>
                        )}

                        {errors.numberPhone?.type === "pattern" && (
                            <div className="text-red-500 text-[16px] ">Enter a valid phone number</div>
                        )}

                        <Checkbox className='mt-[13px]' onChange={onChange}>Email me with news and offers</Checkbox>
                    </div>
                </div>
                <h3 className='text-[20px]  mb-[15px]'>Shipping address</h3>
                <select
                    className='border-[1px]   w-full h-[50px] rounded-[7px] focus:border-primary-500 outline-none pl-[20px]'
                    {...register("country", {
                        required: true,

                    })}
                >
                    <option value="Vietnam">Vietnam</option>
                    <option value="Uruway">Uruway</option>
                </select>

                <div className='flex gap-[20px] w-full'>

                    <div className='w-[50%]'>
                        <input
                            placeholder='First name'
                            className='border-[1px]   w-full h-[50px] pl-[20px] rounded-[7px] focus:border-primary-500 outline-none' type='text'
                            {...register("firstname", {
                                required: true,

                            })}
                        />
                    </div>

                    <div className=' w-[47%]'>
                        <input
                            style={errors.lastname?.type ? { border: "3px solid #dd1d1d" } : {}}
                            placeholder='Last name'
                            className='border-[1px]   w-full h-[50px] pl-[20px] rounded-[7px] focus:border-primary-500 outline-none' type='text'
                            {...register("lastname", {
                                required: true,
                            })}
                        />
                        {errors.lastname?.type === "required" && (
                            <div className="text-red-500  text-[16px]  ">Enter a last name</div>
                        )}
                    </div>

                </div>

                <div>
                    <input
                        style={errors.address?.type ? { border: "3px solid #dd1d1d" } : {}}
                        placeholder='Address'
                        className='border-[1px]   w-full h-[50px] pl-[20px] rounded-[7px] focus:border-primary-500 outline-none' type='text'
                        {...register("address", {
                            required: true,

                        })}
                    />
                    {errors.address?.type === "required" && (
                        <div className="text-red-500 text-[16px]  ">Enter an address</div>
                    )}
                </div>
                <div className='flex gap-[20px] '>
                    <div className='w-[50%]'>
                        <input
                            style={errors.city?.type ? { border: "3px solid #dd1d1d" } : {}}
                            placeholder='City'
                            className='border-[1px]   w-full h-[50px] pl-[20px] rounded-[7px] focus:border-primary-500 outline-none' type='text'
                            {...register("city", {
                                required: true,

                            })}
                        />
                        {errors.city?.type === "required" && (
                            <div className="text-red-500 text-[16px]  ">Enter a city</div>
                        )}
                    </div>

                    <div className='w-[47%]'>
                        <input placeholder='Postal code' className='border-[1px]   w-full h-[50px]  rounded-[7px] focus:border-primary-500 outline-none pl-[20px]' type='text' />
                    </div>
                </div>
                <div>
                    <Checkbox onChange={onChange}>Save this information for next time</Checkbox>
                </div>

                <div className='flex justify-between md:gap-0 ip:gap-[20px] ip:flex-col-reverse md:flex-row  items-center'>
                    <button onClick={() => router.push('/collections/all')} className='text-[#1773b0] transition-color duration-300 hover:text-[#1f8dd6]'>
                        <span className='mr-[20px]'><i class="fa-solid fa-angle-left"></i></span>
                        Return to cart
                    </button>
                    <button

                        type='submit'
                        className='bg-[#1773b0] ip:w-full md:w-auto transition-color duration-300 hover:bg-[#105989] rounded-[7px]  text-[#fff]  ip:p-[20px] md:p-[25px]'>Continue to shipping</button>
                </div>
            </form>
        </div>
    )
}
