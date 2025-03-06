import React, { cache, Suspense } from 'react'
import ProductCard from './productCard'
import Loading from '../loading'


interface Products{ //use interface to define expected variables to receive
    id:number,
    title:string,
    price:number,
    image:string
}

const ProductPage = async () => {

  const res = await fetch('http://localhost:3000/api/products',{cache:'no-store'}) //fetch data from api endpoint, added dynamic rendering
  const products : Products[] = await res.json()  

  return (
    <div className='container mx-auto px-4 py-8 '>
        

        <h1 className='text-4xl font-bold text-emerald-500 mb-20 text-center'>Products</h1>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
      <Suspense fallback={<Loading/>}>
      {
        products.map((product)=><ProductCard key={product.id} product={product}/>) //render api data, map through title object, pass productCard as props
      }
      </Suspense>
   

     </div>
    </div>
  )
}

export default ProductPage

//map = a convention used in both React and Nextjs that is used to make multiple functions without having messy and repetitive code.