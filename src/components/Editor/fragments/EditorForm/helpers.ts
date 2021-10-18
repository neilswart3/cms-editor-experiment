import { Image } from 'src/store/actions/pages/types'

export const getImage = (src: string, images: Image[]): Image => {
  const [filteredImage] = images.filter((img) => src === img.src)

  return filteredImage
}
