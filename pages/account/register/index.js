import React, { useEffect, useState } from 'react'
import { useForm, watch } from "react-hook-form";
import { registerAccount, getUsers, loginSelector } from '../../../store';
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
export default function index() {
    // store
    const dispath = useDispatch()
    const listUser = useSelector(loginSelector)
    // state
    const [isData, setIsData] = useState({})
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        dispath(getUsers())
    }, [dispath])


    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm({ mode: "onSubmit" });
    const onSubmit = (data) => {

        const loginData = {
            email: data.email,
            password: data.password,
            fullname: data.firstName + ' ' + data.lastName
        }
        if (loginData) {
            setIsData(loginData)
            const checkUsersLogin = listUser?.some(item => loginData.email === item.email)

            if (!checkUsersLogin) {
                setIsLogin(true)
                dispath(registerAccount(loginData))
            } else {
                setIsLogin(false)

            }
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[700px] mx-auto my-11 flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 justify-between'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <input
                                style={errors.firtName?.type ? { border: "3px solid #dd1d1d" } : {}}
                                type='firstName'
                                placeholder='First Name'
                                className='py-[10px] px-5 border outline-none focus:ring-1 focus:ring-[#f96e89]'
                                {...register("firstName", {
                                    required: true,
                                    maxLength: 10

                                })}
                            />
                            {errors.firstName?.type === "required" && (
                                <div className="text-red-500 text-[16px] ">Enter a First Name</div>
                            )}


                            {errors.firstName?.type === "maxLength" && (
                                <div className="text-red-500 text-[16px] ">First Name maximum 10 characters</div>
                            )}
                        </div>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <input
                                style={errors.firtName?.type ? { border: "3px solid #dd1d1d" } : {}}
                                type='lastName'
                                placeholder='Last Name'
                                className='py-[10px] px-5 border outline-none focus:ring-1 focus:ring-[#f96e89]'
                                {...register("lastName", {
                                    required: true,
                                    maxLength: 10

                                })}
                            />
                            {errors.lastName?.type === "required" && (
                                <div className="text-red-500 text-[16px] ">Enter a Last Name</div>
                            )}


                            {errors.lastName?.type === "maxLength" && (
                                <div className="text-red-500 text-[16px] ">Last Name maximum 10 characters</div>
                            )}
                        </div>
                    </div>

                </div>
                <div className='flex flex-col gap-2'>
                    <input
                        type='email'
                        placeholder='Email'
                        className='py-[10px] px-5 border outline-none focus:ring-1 focus:ring-[#f96e89]'
                        style={errors.email?.type ? { border: "3px solid #dd1d1d" } : {}}
                        {...register("email", {
                            required: true,
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

                        })}
                    />
                    {errors.email?.type === "required" && (
                        <div className="text-red-500 text-[16px] ">Enter a email</div>
                    )}

                    {errors.email?.type === "pattern" && (
                        <div className="text-red-500 text-[16px] ">Enter a valid email</div>
                    )}
                </div>
                <div className='flex flex-col gap-2'>
                    <input
                        style={errors.password?.type ? { border: "3px solid #dd1d1d" } : {}}
                        type='password'
                        placeholder='Password'
                        className='py-[10px] px-5 border outline-none focus:ring-1 focus:ring-[#f96e89]'
                        {...register("password", {
                            required: true,
                            minLength: 5,
                            maxLength: 50

                        })}
                    />
                    {errors.password?.type === "required" && (
                        <div className="text-red-500 text-[16px] ">Enter a password</div>
                    )}

                    {errors.password?.type === "minLength" && (
                        <div className="text-red-500 text-[16px] ">Password must be at least 5 characters or more</div>
                    )}
                    {errors.password?.type === "maxLength" && (
                        <div className="text-red-500 text-[16px] ">Password maximum 50 characters</div>
                    )}
                </div>


                <div className='flex flex-col gap-2'>
                    <input
                        style={errors.confirm_password?.type ? { border: "3px solid #dd1d1d" } : {}}
                        type='password'
                        placeholder='Confirm Password'
                        className='py-[10px] px-5 border outline-none focus:ring-1 focus:ring-[#f96e89]'
                        {...register("confirm_password", {
                            required: true,
                            validate: (value) => value === watch("password") || "Passwords do not match"
                        })}
                    />
                    {errors.confirm_password && <div className="text-red-500 text-[16px] ">{errors.confirm_password.message}</div>}
                </div>

                {
                    Object.keys(isData).length !== 0 && !isLogin &&
                    <div className='text-red-500 text-[16px] '>Email already exists</div>
                }
                {
                    Object.keys(isData).length !== 0 && isLogin &&
                    <div className='text-green-500 text-[16px] '>Sign Up Success {'-->'}<span className='text-base cursor-pointer text-black-500'>
                        <Link className='underline decoration-0' href='/account/login'>Log In now</Link>
                    </span></div>
                }

                <div className='w-full flex justify-center'>
                    <button className='py-[10px] px-[28px] bg-[#f96e89] text-white' type='submit'>Create</button>
                </div>
            </form>


        </>
    )
}