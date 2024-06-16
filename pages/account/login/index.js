import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useForm } from "react-hook-form";
import { isLogin, getUsers, loginSelector, isUserSelector } from '../../../store';
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router';
export default function index() {
    const router = useRouter()
    // store
    const dispath = useDispatch()
    const listUser = useSelector(loginSelector)
    const isUserSelect = useSelector(isUserSelector)

    // state
    const [checkLogin, setCheckLogin] = useState({})

    useEffect(() => {
        dispath(getUsers())
    }, [dispath, isUserSelect, router])

    const checkUsersLogin = listUser?.some(item => checkLogin.email === item.email && checkLogin.password === item.password)

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ mode: "onSubmit" });
    const onSubmit = (data) => {

        const loginData = {
            email: data.email,
            password: data.password,
        }

        if (loginData) {
            const checkUsersLogin = listUser?.some(item => loginData.email === item.email && loginData.password === item.password)
            const checkUsersId = listUser?.find(item => loginData.email === item.email && loginData.password === item.password)

            if (checkUsersLogin) {
                Cookies.set('token', checkUsersId.id)
                if(data.email !== 'admin@gmail.com'){
                    router.push('/')
                }else{
                    router.push('/admin')
                }

            }

            setCheckLogin({
                email: data.email,
                password: data.password,
            })

        }

    }

  



    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[89%] lg:w-[700px] mx-auto my-11 flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <input
                        type='email'
                        placeholder='Email'
                        className='py-[10px] px-5 lg:text-base text-sm border outline-none focus:ring-1 focus:ring-[#f96e89]'
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
                        className='py-[10px] px-5 border lg:text-base text-sm  outline-none focus:ring-1 focus:ring-[#f96e89]'
                        {...register("password", {
                            required: true,
                            minLength: 5,
                            maxLength: 50

                        })}
                    />
                    {errors.password?.type === "required" && (
                        <div className="text-red-500 lg:text-base text-sm  ">Enter a password</div>
                    )}

                    {errors.password?.type === "minLength" && (
                        <div className="text-red-500 lg:text-base text-sm  ">Password must be at least 5 characters or more</div>
                    )}
                    {errors.password?.type === "maxLength" && (
                        <div className="text-red-500 lg:text-base text-sm  ">Password maximum 50 characters</div>
                    )}
                </div>

                {
                    Object.keys(checkLogin).length !== 0 &&
                    !checkUsersLogin && <div className='text-red-500 lg:text-base text-sm  '>User account or password incorrect</div>
                }
                <div className='w-full flex justify-center'>
                    <button className='py-[10px] px-[28px] bg-[#f96e89] text-white lg:text-base text-sm ' type='submit'>Sign In</button>
                </div>
            </form>

            <div className='mt-2 border-t-2'>
                <p className='text-center no-underline cursor-pointer'>
                    <Link className='no-underline text-black font-medium lg:text-base text-sm ' href='/account/register' >Create account ?</Link>
                </p>
            </div>
        </>
    )
}