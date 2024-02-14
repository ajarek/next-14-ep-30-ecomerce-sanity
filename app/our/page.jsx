import AddToCartBtn from '@/components/AddToCartBtn'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { Eye } from 'lucide-react'
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

const Our = async () => {
  const bike = await getData()
  return (
    <div className='flex min-h-[calc(100vh-80px)] flex-col items-center justify-start px-12 py-4'>
      <h1 className='text-2xl font-semibold mb-2'>Our bikes</h1>
      <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8'>
        {bike.map((el) => (
          <div
            className='flex flex-col justify-center items-center relative p-4  border shadow-lg rounded-sm'
            key={el._id}
          >
            <Link
              href={`product/${el._id}`}
              className='absolute top-1 right-1 bg-red-500 text-white p-1 rounded-sm'
            >
              <Eye />
            </Link>

            <Image
              src={urlFor(el.images[0]).url()}
              alt='bike'
              width={300}
              height={300}
            />
            <div className=' bg-gray-500 text-white p-1 rounded-sm'>
              {el.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Our
