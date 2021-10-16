type Args = {
  id: string
  width?: number
  height?: number
}

const getImageUrl = ({ id, width = 1600, height = 900 }: Args): string =>
  `https://source.unsplash.com/${id}/${width}x${height}`

export default getImageUrl
