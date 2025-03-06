"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const pathname = usePathname();

  return (
    <div className="">
    <span className="absolute text-white mt-4 ml-12 text-3xl">Logo</span> 
    <nav className="bg-emerald-950 w-full h-20">
      <ul className="flex flex-row-reverse gap-12 right-0 text-slate-200 pt-6 pr-12 ">
        <li className={pathname === '/contact' ? 'text-emerald-300' : ''}>
          <Link href="/contact" className="hover:text-emerald-300">Contact</Link>
        </li>
        <li className={pathname === '/products' ? 'text-emerald-300' : ''}>
          <Link href="/products" className="hover:text-emerald-300">Products</Link>
        </li>
        <li className={pathname === '/about' ? 'text-emerald-300' : ''}>
          <Link href="/about" className="hover:text-emerald-300">About</Link>
        </li>
        <li className={pathname === '/' ? 'text-emerald-300' : ''}>
          <Link href="/#" className="hover:text-emerald-300">Home</Link>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default Navbar
