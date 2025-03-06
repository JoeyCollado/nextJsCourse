import React from 'react'
import ProductCard from './productCard'

interface Products{ //use interface to define expected variables to receive
    id:number,
    title:string,
    price:number,
    image:string
}

const ProductPage = async () => {

  const res = await fetch('https://fakestoreapi.com/products?limit=10') //fetch data from api endpoint
  const products : Products[] = await res.json()  

  return (
    <div className='container mx-auto px-4 py-8 '>
        <h1 className='text-4xl font-bold text-emerald-500 mb-20 text-center'>Products</h1>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
      {
        products.map((product)=><ProductCard key={product.id} product={product}/>) //render api data, map through title object, pass productCard as props
      }
     </div>
    </div>
  )
}

export default ProductPage

//map = a convention used in both React and Nextjs that is used to make multiple functions without having messy and repetitive code.