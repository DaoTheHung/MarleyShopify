import React from 'react'
import { useForm } from "react-hook-form";
export default function index() {

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ mode: "onSubmit" });
    const onSubmit = (data) => {

        const login = {
            email: data.email,
            password: data.password,

        }
        console.log(login)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-[700px] mx-auto my-11 flex flex-col gap-6'>
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
            <div className='w-full flex justify-center'>
                <button className='py-[10px] px-[28px] bg-[#f96e89] text-white' type='submit'>Sign In</button>
            </div>
        </form>
    )
}