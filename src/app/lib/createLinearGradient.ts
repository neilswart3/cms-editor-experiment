import { rgba } from 'polished'

type Args = {
  angle?: number
  alpha?: number
  fallback?: boolean
  palette: string[]
}

const createLinearGradient = ({
  angle = 25,
  alpha = 0.5,
  palette = [],
  fallback = true,
}: Args): string => {
  const [baseColor] = palette

  return palette.length > 0
    ? `
      ${fallback ? `background: ${rgba(baseColor, alpha)};` : ''}
      background-image: linear-gradient(
        ${angle}deg,
        ${palette.map((color, i) => `${rgba(color, alpha)} ${i * 25}%`)});`
    : ''
}

export default createLinearGradient
