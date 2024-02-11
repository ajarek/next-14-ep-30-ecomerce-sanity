'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='h-[80px] flex justify-between items-center bg-secondary text-secondary-foreground px-4 border-border'>
      <div className='flex items-center'>
        <Link
          href={'/'}
          className='btn btn-ghost max-sm:btn-sm text-xl'
        >
          Bikes Store
        </Link>
      </div>
      <div className=' w-1/2  flex justify-center max-sm:hidden gap-4  '>
        <Link
          href='/'
          className='link link-hover btn-ghost text-xl'
        >
          Home
        </Link>
        <Link
          href='/store/men'
          className='link link-hover btn-ghost text-xl'
        >
          Men
        </Link>
        <Link
          href='/store/women'
          className='link link-hover btn-ghost text-xl'
        >
          Women
        </Link>
        <Link
          href='/store/all'
          className=' link link-hover btn-ghost text-xl'
        >
          All
        </Link>
      </div>
    </div>
  )
}

export default Navbar
