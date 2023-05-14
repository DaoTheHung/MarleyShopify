import React from 'react'

export const TitleBaner = () => {
    return (
        <div>
            <div className='w-[80%] m-auto '>

                <div className='flex items-center mb-[150px]'>
                    <div className='w-[50%] relative group '>
                        <div className='w-[95%] bg-pink-500 h-[410px]'>
                            <img
                                className='w-full  opacity-[0] group-hover:opacity-100 duration-500 transition'
                                src='https://cdn.shopify.com/s/files/1/0434/2520/2335/files/pattern-leaf.png?v=1631188823' />

                            <img className='w-[96%] h-auto absolute top-[31px] left-[31px] object-cover' src='https://cdn.shopify.com/s/files/1/0434/2520/2335/files/abo-03_770x.jpg?v=1631536411' />
                        </div>

                    </div>
                    <div className='w-[40%] relative flex flex-col gap-[30px] ml-[70px]'>
                        <div className='w-[30px] h-[6px] rounded-[5px] bg-pink-500'></div>
                        <h3 className='text-pink-500 text-[44px] font-bold tracking-[2px]'>Play Your Mood</h3>
                        <p className='text-ink-100 text-[22px] w-[120%]'>Phasellus hendrerit dolor in bibendum vehicula. Quisque varius malesuada sapien, non sollicitudin nunc cursus vitae semper vitae metus..</p>
                    </div>
                </div>



                <div className='flex items-center flex-row-reverse mb-[150px]'>
                    <div className='w-[50%] relative group '>
                        <div className='w-[95%] bg-pink-500 h-[410px]'>
                            <img
                                className='w-full  opacity-[0] group-hover:opacity-100 duration-500 transition'
                                src='https://cdn.shopify.com/s/files/1/0434/2520/2335/files/pattern-leaf.png?v=1631188823' />

                            <img className='w-[96%] h-auto absolute top-[31px] right-[65px] object-cover' src='https://cdn.shopify.com/s/files/1/0434/2520/2335/files/abo-02_770x.jpg?v=1631536427' />
                        </div>

                    </div>
                    <div className='w-[50%] relative flex flex-col gap-[30px] '>
                        <div className='relative left-[46px]'>
                            <div className='w-[30px] h-[6px] rounded-[5px] bg-pink-500 mb-[30px]'></div>
                            <h3 className='text-pink-500 text-[44px] font-bold tracking-[2px] w-[102%]'>Connect With World
                            </h3>
                        </div>
                        <div className='text-ink-100 text-[22px] text-right relative right-[31px]'>
                            <p className='w-[535px] '>Curabitur ut nisl urna. Nam quis mauris in nisi eleifend tristique nec eu ante. Nam magna justo, mollis et enim</p>
                            <p className='w-[535px] mt-[-18px]'>ac uisque at blandit nisl.</p>
                        </div>
                    </div>
                </div>



                <div className='flex items-center my-[50px]'>
                    <div className='w-[50%] relative group '>
                        <div className='w-[95%] bg-pink-500 h-[410px]'>
                            <img
                                className='w-full  opacity-[0] group-hover:opacity-100 duration-500 transition'
                                src='https://cdn.shopify.com/s/files/1/0434/2520/2335/files/pattern-leaf.png?v=1631188823' />

                            <img className='w-[96%] h-auto absolute top-[31px] left-[31px] object-cover' src='https://cdn.shopify.com/s/files/1/0434/2520/2335/files/abo-01_770x.jpg?v=1631536446' />
                        </div>

                    </div>
                    <div className='w-[40%]  flex flex-col gap-[30px] ml-[70px]'>
                        <div className='w-[30px] h-[6px] rounded-[5px] bg-pink-500'></div>
                        <h3 className='text-pink-500 text-[44px] font-bold tracking-[2px] '>Feel The Rhythm</h3>
                        <p className='text-ink-100 text-[22px] w-[120%]'>Pellentesque auctor quam ac leo rutrum, ut lobortis dui blandit. Nam vehicula turpis at est fringilla suscipit orbi aliquet vulputate orci.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
