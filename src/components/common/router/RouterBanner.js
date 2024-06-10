import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function RouterBanner() {
    const router = useRouter()
    const tilteRouter = {
        title:
            router.pathname == '/products/[name]' ? "PRODUCT" : "" ||
                router.pathname == '/about' ? "ABOUT" : "" ||
                    router.pathname == '/new' ? "NEW" : "" ||
                        router.pathname == '/collections/all' ? "COLLECTION" : "" ||
                            router.pathname == '/contact' ? "CONTACT" : "" ||
                                router.pathname == '/account/login' ? "ACCOUNT" : "" ||
                                    router.pathname == '/account/register' ? "ACCOUNT" : "" ||
                                        router.pathname == '/account' ? "ACCOUNT" : ""
        ,

        titleLink:
            router.pathname == '/products/[name]' ? "All" : "" ||
                router.pathname == '/collections/all' ? "Home" : "" ||
                    router.pathname == '/about' ? "Home" : "" ||
                        router.pathname == '/account/login' ? "Home" : "" ||
                            router.pathname == '/account/register' ? "Home" : "" ||
                                router.pathname == '/account' ? "Home" : "",

        link:
            router.pathname == '/products/[name]' ? "/collections/all" : "" ||
                router.pathname == '/about' ? "/" : "",
        description:
            router.pathname == '/products/[name]' ? "BT Headset" : "" ||
                router.pathname == '/collections/all' ? "Products" : "" ||
                    router.pathname == '/about' ? "About" : "" ||
                        router.pathname == '/account/login' ? "Account" : "" ||
                            router.pathname == '/account/register' ? "Account" : "" ||
                                router.pathname == '/account' ? "Account" : ""

    }
    return (
        <div className='ip:w-[425px] sm:w-full md:w-full lg:w-full'>
            <div className='text-center  w-[full] relative   h-auto  bg-center'>
                <div className=''>
                    <img className='md:w-full lg:w-full h-[253px] object-cover' src="//cdn.shopify.com/s/files/1/0434/2520/2335/files/breadcrumb_c3095538-703a-405c-8e89-e3ef1a1cae12.jpg?v=1631520809" />
                </div>
                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-[#fff]  uppercase text-[38px] tracking-[2px]'>{tilteRouter.title}</h3>
                    <div className='flex text-[#fff] ab justify-center items-center gap-[9px] mt-[20px]'>
                        <Link style={{ textDecoration: "none" }} href={tilteRouter.link}>
                            <h3 className='font-normal hover:text-pink-500 transition duration-[500ms] text-[#fff] lg:text-[23px] text-lg'>{tilteRouter.titleLink}</h3>
                        </Link>
                        <h3 className='lg:text-[23px] text-lg font-normal'>/</h3>
                        <h3 className='lg:text-[23px] text-lg font-normal'>{tilteRouter.description}</h3>
                    </div></div>
            </div>
        </div>
    )
}
