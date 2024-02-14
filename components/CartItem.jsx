'use client'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { useShoppingCart } from 'use-shopping-cart'
import { Plus, Minus, Trash2 } from 'lucide-react'

const CartItem = ({ item }) => {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart()
  return (
    <div className='w-full flex justify-between items-center mb-2 border-b'>
      <div>
        <Image
          src={urlFor(item.images[0]).url()}
          alt={item.name}
          width={80}
          height={80}
        />
      </div>
      <div>
        <h5>{item.name}</h5>
        <div className='flex gap-2'>
          <button onClick={() => decrementItem(item.id)}>
            <Minus />
          </button>
          <div>{item.quantity}</div>
          <button onClick={() => incrementItem(item.id)}>
            <Plus />
          </button>
        </div>
      </div>

      <div>{(item.price * item.quantity).toFixed(2)}</div>
      <div>
        <button onClick={() => removeItem(item.id)}>
          <Trash2 color='red'/>
        </button>
      </div>
    </div>
  )
}

export default CartItem

//
