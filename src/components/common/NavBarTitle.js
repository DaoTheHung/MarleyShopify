import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function NavBarTitle() {
    const router = useRouter()
    const tilteRouter = {
        title:
            router.pathname == '/products/[name]' ? "PRODUCT" : "" ||
                router.pathname == '/about' ? "ABOUT" : "" ||
                    router.pathname == '/new' ? "NEW" : "" ||
                        router.pathname == '/collections/all' ? "COLLECTION" : "" ||
                            router.pathname == '/contact' ? "CONTACT" : ""
        ,

        titleLink:
            router.pathname == '/products/[name]' ? "All" : "" ||
                router.pathname == '/collections/all' ? "Home" : "",
        link: router.pathname == '/products/[name]' ? "/collections/all" : "",
        description:
            router.pathname == '/products/[name]' ? "BT Headset" : "" ||
                router.pathname == '/collections/all' ? "Travel Headphones" : ""
    }
    return (
        <div>
            <div className='text-center bg-navbar-title  w-[full] py-[40px] relative h-auto  bg-center'>
                <h3 className='text-[#fff] uppercase text-[38px] tracking-[2px]'>{tilteRouter.title}</h3>
                <div className='flex text-[#fff]  justify-center items-center gap-[9px] mt-[20px]'>
                    <Link style={{ textDecoration: "none" }} href={tilteRouter.link}>
                        <h3 className='font-normal hover:text-pink-500 transition duration-[500ms] text-[#fff] text-[23px]'>{tilteRouter.titleLink}</h3>
                    </Link>
                    <h3 className='text-[23px] font-normal'>/</h3>
                    <h3 className='text-[23px] font-normal'>{tilteRouter.description}</h3>
                </div>
            </div>
        </div>
    )
}
