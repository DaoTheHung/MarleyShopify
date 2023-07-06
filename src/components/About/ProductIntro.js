import React from 'react'
import Container from 'react-bootstrap/Container';


export const ProductIntro = () => {
    return (
        <div className='bg-[#f1f1f1] mt-[220px]'>
            <Container >
                <div className='py-[100px]'>

                    <div>
                        <div className='m-auto w-[30px] h-[6px] rounded-[5px] bg-pink-500 '></div>
                        <h1 className='text-center mt-[40px] text-[#1a1a1a] text-[44px] font-bold tracking-[2px]'>Move With Beat</h1>
                    </div>

                    <div className='flex flex-wrap mt-[50px] gap-[32px] justify-center'>

                        <div className='group flex flex-col justify-center items-center w-[300px]'>
                            <div className='w-[180px] h-[180px] bg-[#ee8d6d] group-hover:bg-pink-500    transition duration-500  rounded-intro animate-effect flex justify-center items-center'>
                                <img className='w-[136px] group-hover:scale-[1.2] transition duration-500 ' src=' //cdn.shopify.com/s/files/1/0434/2520/2335/files/abo-08.png?v=1631536483' />
                            </div>
                            <div className='mt-[40px] text-center'>
                                <h3 className='text-pink-500 text-[23px]'>Wireless Headset</h3>
                                <p className='text-ink-100 text-[23px] w-[292px] text-center mt-[22px]'>Ut efficitur sapien felis, quis vehicula dui porta sed. Donec lorem ipsum, luctus eu aliquam</p>
                            </div>
                        </div>

                        <div className='group flex flex-col justify-center items-center w-[300px]'>
                            <div className='w-[180px] h-[180px] bg-[#ee8d6d] group-hover:bg-pink-500    transition duration-500  rounded-intro animate-effect flex justify-center items-center'>
                                <img className='w-[136px] group-hover:scale-[1.2] transition duration-500 ' src='//cdn.shopify.com/s/files/1/0434/2520/2335/files/abo-09.png?v=1631536532' />
                            </div>
                            <div className='mt-[40px] text-center'>
                                <h3 className='text-pink-500 text-[23px]'>Noiseless Headphones</h3>
                                <p className='text-ink-100 text-[23px] w-[292px] text-center mt-[22px]'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>
                            </div>
                        </div>

                        <div className='group flex flex-col justify-center items-center w-[300px]'>
                            <div className='w-[180px] h-[180px] bg-[#ee8d6d] group-hover:bg-pink-500    transition duration-500  rounded-intro animate-effect flex justify-center items-center'>
                                <img className='w-[136px] group-hover:scale-[1.2] transition duration-500 ' src='//cdn.shopify.com/s/files/1/0434/2520/2335/files/abo-10.png?v=1631536552' />
                            </div>
                            <div className='mt-[40px] text-center'>
                                <h3 className='text-pink-500 text-[23px]'>Open Back Headset</h3>
                                <p className='text-ink-100 text-[23px] w-[292px] text-center mt-[22px]'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
                            </div>
                        </div>

                        <div className='group flex flex-col justify-center items-center w-[300px]'>
                            <div className='w-[180px] h-[180px] bg-[#ee8d6d] group-hover:bg-pink-500    transition duration-500  rounded-intro animate-effect flex justify-center items-center'>
                                <img className='w-[136px] group-hover:scale-[1.2] transition duration-500 ' src='//cdn.shopify.com/s/files/1/0434/2520/2335/files/abo-11.png?v=1631536566' />
                            </div>
                            <div className='mt-[40px] text-center'>
                                <h3 className='text-pink-500 text-[23px]'>Gaming Headset</h3>
                                <p className='text-ink-100 text-[23px] w-[292px] text-center mt-[22px]'>Sed vestibulum nulla elementum auctor tincidunt aliquam sit amet cursus mauris</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}
