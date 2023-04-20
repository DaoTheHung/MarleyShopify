import Head from "next/head";
import Header from "./HomePage/Header";
import Footer from "./HomePage/Footer";
import NavBarScoll from './HomePage/NavBarScoll';
import NavBarTitle from "./common/NavBarTitle";
import BackTop from "./common/BackToTop/BackTop";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Layout = ({ children }) => {

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

    return (<>
        <Head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="shortcut icon" href="//cdn.shopify.com/s/files/1/0434/2520/2335/files/favicon_1_16x16.png?v=1631521306" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <title>Marley</title>
        </Head>

        <Header />
        {scolling && <BackTop handleBackTop={handleBackTop} />}
        <NavBarScoll />
        {router.pathname == '/' ? "" : <NavBarTitle />}
        {children}
        <Footer />


    </>
    )
}
export default Layout
