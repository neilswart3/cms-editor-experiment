import { PaletteSetOpen, PaletteState, paletteTypes } from './types'

export const setPalette = (payload: PaletteState): PaletteSetOpen => ({
  type: paletteTypes.SET_PALETTE,
  payload,
})
