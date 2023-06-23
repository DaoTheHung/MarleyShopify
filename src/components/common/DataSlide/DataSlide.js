import React from "react"
import { useSwiper } from "swiper/react"
import { isDataSelector, isData } from "../../../../store"
import { useSelector, useDispatch } from "react-redux"
export const slides = [
    {
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/files/banner-slider.jpg?v=1614290489",
        imageSize: "https://cdn.shopify.com/s/files/1/0434/2520/2335/files/Mble_sldr_768x940.jpg?v=1614290811",
        headerText: "Find Best",
        contentText: "Matley ",
        spanText: "Sound",
        lastText: "Stylish, folded design with active noise cancellation for crystal clear audio 3.5mm  Wired or Bluetooth wireless conncectivity."

    },
    {
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/files/slider2-bg.jpg?v=1614296701",
        imageSize: "https://cdn.shopify.com/s/files/1/0434/2520/2335/files/slider2-bg-res_768x940.jpg?v=1614296701",
        headerText: "Live Smart",
        contentText: "Hear ",
        spanText: "Smart",
        lastText: "You bring the music, we bring the quality. Make music a pleasant experience."
    },
    {
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/files/slider3-bg.jpg?v=1614296702",
        imageSize: "//cdn.shopify.com/s/files/1/0434/2520/2335/files/slider3-bg-res_768x940.jpg?v=1614296702",
        headerText: "Less Noise",
        contentText: "More ",
        spanText: "Sound",
        lastText: "Headphones that make you forget everything around. Make music come to life."
    }
]

export const slideTitles = [
    {
        image: "https://cdn.shopify.com/s/files/1/0434/2520/2335/files/home-scroll-2_1728x.jpg?v=1614297019"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0434/2520/2335/files/home-scroll-3_600x.jpg?v=1614297019"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0434/2520/2335/files/latest-collection-img2_600x.jpg?v=1614290494"
    },


]
export const slideTitles2 = [

    {
        image: "https://cdn.shopify.com/s/files/1/0434/2520/2335/files/home-scroll-3_600x.jpg?v=1614297019"
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0434/2520/2335/files/latest-collection-img2_600x.jpg?v=1614290494"
    },


]
export const slideComments = [
    {
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/files/home-02_400x400.jpg?v=1631538136",
        name: "Freda Casey",
        title: "Musician",
        text: " Fusce dictum lacinia erat in mattis. Cras iaculis, magna in condimentum iaculis, enim tortor facilisis lectus, et molestie sem sapien id odio."
    },
    {
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/files/home-03_400x400.jpg?v=1631538085",
        name: "Hannah Stocking",
        title: "Architect",
        text: "Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Feugiat pretium nibh ipsum consequat nisl. Erat imperdiet sed euismod."
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0434/2520/2335/files/home-01_400x400.jpg?v=1631538115",
        name: "Freda Casey",
        title: "Journalist",
        text: "Sed cras ornare arcu dui vivamus arcu. Ultrices vitae auctor eu augue ut. Rhoncus dolor purus non enim praesent elementum facilisis. "
    }

]


export const NavigationSlide = ({ productDetail }) => {
    // Redux
    const dispath = useDispatch()
    const isDataProduct = useSelector(isDataSelector)

    const swiper = useSwiper()
    const handleSlidePrev = () => {
        swiper.slidePrev()
        dispath(isData(!isDataProduct))
    }

    const handleSlideNext = () => {
        swiper.slideNext()
        dispath(isData(!isDataProduct))




    }
    return (
        <div className='absolute left-[35px] ip:top-[209px] ip:left-[7px] top-[304px] flex z-10'>
            <div
                onClick={handleSlidePrev}
                style={swiper.activeIndex == 0 ? { opacity: "0.5", cursor: "auto" } : { opacity: "1" }}
                className={`transition-height duration-300 ${swiper.activeIndex !== 0 ? "hover:bg-[#1a1a1a]" : ""} cursor-pointer text-white ip:w-[40px] ip:h-[40px] w-[45px] h-[45px] bg-[#ef6d9f] absolute left-[10px] flex items-center justify-center`}>
                <div className='w-[12px] h-[12px] border-l-[1px] border-b-[1px] border-white rotate-45 ml-2'></div>
            </div>
            <div
                onClick={handleSlideNext}
                style={swiper.activeIndex == "3" ? { opacity: "0.5", cursor: "auto" } : { opacity: "1" }}
                className={`transition-height duration-300 z-20 ${swiper.activeIndex !== 3 ? "hover:bg-[#1a1a1a]" : ""} cursor-pointer text-white ip:w-[40px] ip:h-[40px] w-[45px] h-[45px] bg-[#ef6d9f]  right-[-514px]  absolute flex items-center justify-center`}>
                <div className='w-[12px] h-[12px] border-r-[1px] border-t-[1px] border-white rotate-45 mr-2'></div>
            </div>
        </div >
    )
}





