"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

export default function Logout() {
  return (
    <div>
      <button className='btn btn-success' onClick={()=>signOut()}>Logout</button>
    </div>
  )
}
