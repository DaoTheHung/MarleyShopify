import React from "react"
import { useSwiper } from "swiper/react"
export const slides = [
    {
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/files/banner-slider.jpg?v=1614290489",
        headerText: "Find Best",
        contentText: "Matley ",
        spanText: "Sound",
        lastText: "Stylish, folded design with active noise cancellation for crystal clear audio 3.5mm  Wired or Bluetooth wireless conncectivity."

    },
    {
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/files/slider2-bg.jpg?v=1614296701",
        headerText: "Live Smart",
        contentText: "Hear ",
        spanText: "Smart",
        lastText: "You bring the music, we bring the quality. Make music a pleasant experience."
    },
    {
        image: "//cdn.shopify.com/s/files/1/0434/2520/2335/files/slider3-bg.jpg?v=1614296702",
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


export const NavigationSlide = () => {
    const swiper = useSwiper()
    return (
        <div className='absolute left-[35px] top-[304px] flex z-10'>
            <div
                onClick={() => swiper.slidePrev()}
                style={{ transition: "0.3s linear" }}
                className=' hover:bg-[#1a1a1a] cursor-pointer text-white w-[45px] h-[45px] bg-[#ef6d9f] absolute left-[10px] flex items-center justify-center '>
                <div className='w-[12px] h-[12px] border-l-[1px] border-b-[1px] border-white rotate-45 ml-2'></div>
            </div>
            <div
                onClick={() => swiper.slideNext()}
                style={{ transition: "0.3s linear" }}
                className='z-20 hover:bg-[#1a1a1a] cursor-pointer text-white w-[45px] h-[45px] bg-[#ef6d9f]  right-[-514px]  absolute flex items-center justify-center'>
                <div className='w-[12px] h-[12px] border-r-[1px] border-t-[1px] border-white rotate-45 mr-2'></div>
            </div>
        </div>
    )
}

export const PaginationSlide = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return pagination;
}



