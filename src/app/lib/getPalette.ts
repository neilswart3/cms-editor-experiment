import tinycolor from 'tinycolor2'

const shuffle = (array: string[]): string[] => {
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
}

const getPalette = (colors: string[]): string[] => {
  if (!colors) {
    return []
  }

  const palette = colors
    .map((color: string) => ({
      brightness: tinycolor(color).getBrightness(),
      color,
    }))
    .sort((a, b) => b.brightness - a.brightness)
    .slice(0, 5)
    .map(({ color }) => color)

  return shuffle(palette)
}

export default getPalette
