export enum paletteTypes {
  SET_PALETTE = 'SET_PALETTE',
}

export interface PaletteState {
  colors: string[]
}

export interface PaletteStatePayload {
  colors: string[]
}

export type PaletteSetOpen = {
  type: typeof paletteTypes.SET_PALETTE
  payload: PaletteStatePayload
}

export type PaletteActions = PaletteSetOpen
