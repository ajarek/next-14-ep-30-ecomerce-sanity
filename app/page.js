import PopularBikes from '@/components/PopularBikes'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-12 py-4">
      <h1 className='text-center text-2xl'>Popular bikes</h1>
       <p className='text-center'>
        The Worlds Premium Brands In One Destination
       </p>
      <PopularBikes/>
    </div>
  )
}

export default Home