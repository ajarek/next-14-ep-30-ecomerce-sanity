'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
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
    {cartCount === 0 ? <div>Your cart is empty</div>:
      <ScrollArea className="h-[350px] w-full rounded-md border p-4">
        {cartDetails && Object.entries(cartDetails).map(([key,item]) =>{
          return <CartItem key={key} item={item}/>
        }
        )}
      </ScrollArea>       
    }
    </>
    {cartCount > 0 &&(
      <div className="flex justify-end">
        <div className='flex gap-4 items-center'>
          <div>Total</div>
          <div className="text-xl">${totalPrice.toFixed(2)}</div>
        </div>
      </div>
    )}
  </SheetContent>
</Sheet>

  )
}

export default CartSidebar