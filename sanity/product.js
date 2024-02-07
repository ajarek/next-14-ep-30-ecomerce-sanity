// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Product Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Product Price',
      type: 'number'
      },
    
    {
      name: 'price_id',
      title: 'Stripe Product Price ID',
      type: 'string',
    },
    {
      name: 'images',
      title: ' Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
        }
      ]
    },
    
  ]
}
