"use client";
import { useSession } from 'next-auth/react'
import React from 'react'

export default function UserInfo() {
    const session = useSession();
  return (
    <div className='my-10'>
      <h2 className='text-2xl text-center text-green-600'>Authenticated User</h2>
      <p>{JSON.stringify(session)}</p>
    </div>
  )
}
