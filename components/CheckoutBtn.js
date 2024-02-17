import Link from 'next/link'
//2:11:10
const CheckoutBtn = () => {
  return (
    <Link className='text-center bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-sm' href={'https://www.paypal.com/pl/signin'} target='_blank'>CheckoutBtn</Link>
  )
}

export default CheckoutBtn