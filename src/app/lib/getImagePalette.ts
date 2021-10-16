import { rgbToHex } from '@mui/system'
import palette from 'image-palette'

const getImagePalette = (img: string): string[] => {
  const { colors } = palette(img)

  return colors.map(([r, g, b]: number[]) => rgbToHex(`rgb(${r}, ${g}, ${b})`))
}

export default getImagePalette
