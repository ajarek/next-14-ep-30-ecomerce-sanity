'use client'
import { Button } from '@/components/ui/button'
import { useShoppingCart } from 'use-shopping-cart'

const AddToCartBtn = ({ id, currency, price, name, description, images }) => {
  const { addItem } = useShoppingCart()
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
      onClick={() => addItem(bike)}
      variant='default'
    >
      Add to cart
    </Button>
  )
}

export default AddToCartBtn
