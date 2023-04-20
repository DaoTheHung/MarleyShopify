import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Banner from '../src/components/HomePage/Banner';
import TitleIntroPage from '../src/components/HomePage/TitleIntroPage';
import NavBarScoll from '../src/components/HomePage/NavBarScoll';
import HeadphoneData from '../src/components/HomePage/HeadphoneData';
import Comments from '../src/components/HomePage/Comments';
import Submit from '../src/components/HomePage/Submit';
export default function Home() {

  // scolling navbar


  return (
    <>
      <NavBarScoll />
      <Banner />
      <TitleIntroPage />
      <HeadphoneData />
      <Comments />
      <Submit />
    </>
  )
}
