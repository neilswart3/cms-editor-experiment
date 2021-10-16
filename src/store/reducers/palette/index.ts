import {
  PaletteState,
  PaletteActions,
  paletteTypes,
} from 'src/store/actions/palette/types'

const initialState: PaletteState = {
  colors: [],
}

const paletteReducer = (
  state = initialState,
  action: PaletteActions
): PaletteState => {
  switch (action.type) {
    case paletteTypes.SET_PALETTE:
      return {
        ...state,
        colors: action.payload.colors,
      }
    default:
      return {
        ...state,
      }
  }
}

export { paletteReducer }
