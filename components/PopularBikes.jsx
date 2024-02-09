import { client } from '@/lib/sanity'
import PopularBikeCarousel from './PopularBikeCarousel'

const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category'  && name == 'popular']._id, categories )]{
    _id,
    name,
      description,
      images,
      price,
      price_id,
      "slug": slug.current,
      "categories": categories[]-> {name}
  }`
  const data = await client.fetch(query)
  return data
}

const PopularBikes = async () => {
  const bikes = await getData()

  return (
    <div>
      <h1 className='text-center text-2xl'>Popular bikes</h1>
      <p className='text-center'>
        The Worlds Premium Brands In One Destination{' '}
      </p>
      <PopularBikeCarousel bikes={bikes} />
    </div>
  )
}

export default PopularBikes
