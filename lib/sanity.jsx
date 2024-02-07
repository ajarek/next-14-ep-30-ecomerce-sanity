import { createClient } from 'next-sanity'
import ImageBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'q2c5nuph',  
  dataset: 'production',
  apiVersion: '2024-02-07',
  useCdn: true
})
const imgBuilder = ImageBuilder(client)

export const urlFor = (source) => imgBuilder.image(source)
