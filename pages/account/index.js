import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { getUser } from '../../store';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, loginSelector, isUser, isUserSelector } from '../../store';

const index = () => {
  const router = useRouter()
  const dispath = useDispatch()
  const listUser = useSelector(loginSelector)
  const isUserSelect = useSelector(isUserSelector)

  useEffect(() => {
    const id = Cookies.get('token')
    dispath(getUser(id))
  }, [dispath, isUserSelect,router])


  const handleSignOut = () => {
    dispath(isUser(!isUserSelect))
    router.push('/')
    Cookies.remove('token')
  }
  return (
    <div className='w-[700px]  mx-auto my-11 flex flex-col gap-6'>
      <div className='font-medium'>Order History</div>
      <div className='w-full flex justify-start'>
        <button onClick={handleSignOut} className='py-[10px] px-[28px] bg-[#f96e89] text-white' type='submit'>Sign Out</button>
      </div>
      <div className='italic'>You haven't placed any orders yet.</div>

      <div className='border py-4 flex flex-col items-center'>
        <div className='text-[#f96e89]'>Account Details</div>
        <div>{listUser?.fullname}</div>
        <div>{listUser?.email}</div>
      </div>
    </div>
  )
}

export default index