import React from 'react'
import { TitleBaner } from '../../src/components/About/TitleBaner'
import { ProductIntro } from '../../src/components/About/ProductIntro'
import { OurTeam } from '../../src/components/About/OurTeam'

export default function index() {
    return (
        <div className='md:w-full ip:w-[425px] mt-[150px]'>
            <TitleBaner />
            <ProductIntro />
            <OurTeam />
        </div>
    )
}
