'use client'
import { Button } from '@/components/ui/button'
import { useShoppingCart } from 'use-shopping-cart'
import { useRouter } from 'next/navigation'
const AddToCartBtn = ({ id, currency, price, name, description, images }) => {
  const router = useRouter()
  const { addItem } = useShoppingCart()
  const handleCartBtn= () => {
    addItem(bike)
    router.push('/')
  }
  const bike = {
    id: id,
    currency: currency,
    name: name,
    description: description,
    images: images,
    price: price,
  }
  return (
    <Button
      onClick={ handleCartBtn}
      variant='default'
    >
      Add to cart
    </Button>
  )
}

export default AddToCartBtn
