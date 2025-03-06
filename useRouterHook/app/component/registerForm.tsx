'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const RegisterForm = () => {

    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        console.log('Email:', formData.get('email'))
        console.log('Password:', formData.get('password'))

        //navigate to other page using useRouter
        router.push('/login')
    }
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl mt-12'>Register</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 border p-8 max-auto mt-8'>
      <label htmlFor='email'>Enter email</label>
      <input type='email' name='email' className='border p-1 pl-2' alt='email' placeholder='myEmail@gmail.com'></input>

      <label htmlFor='password' className=''>Enter Password</label>
      <input type='password' name='passowrd' className='border p-1 pl-2' alt='password' placeholder='myPassword'></input>

      <button type='submit' className='w-full bg-emerald-600 hover:bg-emerald-400 text-white py-2 rounded'>Register</button>
      </form>
    </div>
  )
}

export default RegisterForm
