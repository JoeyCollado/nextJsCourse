import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-e-emerald-950'></div>
    </div>
  )
}

export default Loading

//applying suspense globally
//filename should always be = loading.tsx