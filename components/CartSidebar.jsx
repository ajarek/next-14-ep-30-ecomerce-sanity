'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useShoppingCart } from "use-shopping-cart"
const CartSidebar = () => {
  const {cartCount, cartDetails, shouldDisplayCart, handleCartClick, totalPrice} = useShoppingCart()
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
  
  <SheetContent>
    <SheetHeader>
      <SheetTitle>My Shopping Cart</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}

export default CartSidebar