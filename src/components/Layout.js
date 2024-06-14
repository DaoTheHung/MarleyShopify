import Head from "next/head";
import Header from "./HomePage/Header";
import Footer from "./HomePage/Footer";
import NavBarScoll from './HomePage/NavBarScoll';
import RouterBanner from "./common/router/RouterBanner";
import BackTop from "./common/BackToTop/BackTop";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { loginSelector, isUserSelector, getUser } from '../../store/index'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import ProductsManagement from '../../src/components/admin/products-management'

const Layout = ({ children }) => {

    const listUser = useSelector(loginSelector)
    const isUserSelect = useSelector(isUserSelector)
    const dispath = useDispatch()


    useEffect(() => {
        const id = Cookies.get('token')
        if (id) {

            dispath(getUser(id))
        } else {

            dispath(getUser(''))
        }


    }, [dispath, isUserSelect])

    // Scolling & Back to top
    const router = useRouter()
    const [scolling, setScolling] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 400) {
                setScolling(true)
            } else {
                setScolling(false)
            }
        })
    }, [])

    const handleBackTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    // if (router.pathname === '/admin' && listUser?.fullname?.includes('Admin')) {
    //     return <ProductsManagement />
    // }



    return (<>
        <Head>

            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <link rel="shortcut icon" href="//cdn.shopify.com/s/files/1/0434/2520/2335/files/favicon_1_16x16.png?v=1631521306" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <title>Marley</title>

        </Head>

        {router.pathname == '/checkout/information'
            || router.pathname == '/checkout/shipping'
            ? ""
            : <Header />}
        {scolling && <BackTop handleBackTop={handleBackTop} />}
        <NavBarScoll />
        {router.pathname == '/admin' || router.pathname == '/' ||
            router.pathname == '/checkout/information' ||
            router.pathname == '/checkout/shipping'
            ? ""
            : <RouterBanner />}
        {children}
        {router.pathname == '/checkout/information' ||
            router.pathname == '/checkout/shipping'
            ? ""
            : <Footer />}



    </>
    )
}
export default Layout
