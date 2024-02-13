'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  ScrollArea,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useShoppingCart } from "use-shopping-cart"
import CartItem from "./CartItem"

const CartSidebar = () => {
  const {cartCount, cartDetails, shouldDisplayCart, handleCartClick, totalPrice} = useShoppingCart()
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
  
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="text-left mb-12 uppercase">My Shopping Cart({cartCount})</SheetTitle>
    </SheetHeader>
    <>
    {/* {cartCount === 0 ? <div>Your cart is empty</div>:
      <ScrollArea>
        {cartDetails && Object.entries(cartDetails).map((key,item) =>{
          return <CartItem key={key} item={item}/>
        }
        )}
      </ScrollArea>       
    } */}
    </>
  </SheetContent>
</Sheet>

  )
}

export default CartSidebar