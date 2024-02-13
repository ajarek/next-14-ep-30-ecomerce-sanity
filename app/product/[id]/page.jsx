
import AddToCartBtn from '@/components/AddToCartBtn'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'

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

const ProductDetail =async ({params}) => {
  const id =params.id    
  const bike = await getData()
  const productId =bike.find((el)=>el._id === id)
  
  return (
    <div className=" min-h-[calc(100vh-80px)] grid grid-cols-2 max-sm:grid-cols-1 px-12 py-4">
      <div className='flex justify-center items-center'>
        <Image
        src={urlFor(productId.images[0]).url()}
        alt='bike'
        width={500}
        height={500}
        />
      </div>
      <div className='flex flex-col justify-center items-start gap-6 p-8'>
        <h1 className='text-3xl font-semibold'>{productId.name}</h1>
        <p className='text-xl'>{productId.categories.map((el)=>el.name+' ')}</p>
        <p className='text-xl'>{productId.description}</p>
        <p className='text-2xl'>${(productId.price).toFixed(2)}</p>
        <AddToCartBtn
        id={productId._id}
        name={productId.name} 
        currency='USD'
        description={productId.description}
        images={productId.images}
        price={productId.price}
        />
      </div>
    </div>
  )
}

export default ProductDetail