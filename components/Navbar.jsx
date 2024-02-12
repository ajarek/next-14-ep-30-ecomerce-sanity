'use client'
import Link from 'next/link'
import { ShoppingBag, Bike } from 'lucide-react'
import CartSidebar from '@/components/CartSidebar'
import { useShoppingCart } from 'use-shopping-cart'
const Navbar = () => {
  const {cartCount, handleCartClick} = useShoppingCart()
  return (
    <div className='h-[80px] flex justify-between items-center bg-secondary text-secondary-foreground px-8 border-border'>
      <div className='flex items-center'>
        <Link
          href={'/'}
          className='flex justify-center items-center link link-hover text-xl text-red-500 font-bold gap-2'
        >
          <Bike
            color='#e11414'
            size={30}
          />
          BIKES STORE
        </Link>
      </div>
      <div className=' w-1/2  flex justify-center max-sm:hidden gap-5  '>
        <Link
          href='/'
          className='link link-hover btn-ghost text-xl'
        >
          HOME
        </Link>
        <Link
          href='/store/bikes'
          className='link link-hover btn-ghost text-xl'
        >
          OUR BIKES
        </Link>
        <div
          onClick={()=>handleCartClick()}
          className='link link-hover btn-ghost text-xl flex relative items-center'
        >
          <div className='w-5 h-5 rounded-full text-secondary text-sm bg-red-600 absolute top-3 left-4 flex justify-center items-center '>
           {cartCount}
          </div>
          <ShoppingBag />
        </div>
        <CartSidebar />
      </div>
    </div>
  )
}

export default Navbar
