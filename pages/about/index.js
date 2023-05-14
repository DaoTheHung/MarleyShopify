import React from 'react'
import { TitleBaner } from '../../src/components/About/TitleBaner'
import { ProductIntro } from '../../src/components/About/ProductIntro'
import { OurTeam } from '../../src/components/About/OurTeam'

export default function index() {
    return (
        <div className='w-full mt-[150px]'>
            <TitleBaner />
            <ProductIntro />
            <OurTeam />
        </div>
    )
}
