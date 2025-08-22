"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

export default function Login() {
  return (
    <div>
      <button className='btn btn-success' onClick={()=>signIn()}>Login</button>
    </div>
  )
}
