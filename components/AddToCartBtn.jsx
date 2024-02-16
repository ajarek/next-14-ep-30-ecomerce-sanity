'use client'
import { Button } from '@/components/ui/button'
import { useShoppingCart } from 'use-shopping-cart'
import { useRouter } from 'next/navigation'
const AddToCartBtn = ({ id, currency, price, name, description, images,price_id }) => {
  const router = useRouter()
  const { addItem } = useShoppingCart()
  const handleCartBtn= () => {
    addItem(bike)
    router.push('/our')
  }
  const bike = {
    id: id,
    currency: currency,
    name: name,
    description: description,
    images: images,
    price: price,
    price_id: price_id
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
