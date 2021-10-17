import { backgrounds } from 'src/app/lib'
import {
  ImageState,
  ImageActions,
  imageTypes,
} from 'src/store/actions/image/types'

const [{ src, name }] = backgrounds

const initialState: ImageState = {
  src,
  name,
}

const imageReducer = (
  state = initialState,
  action: ImageActions
): ImageState => {
  switch (action.type) {
    case imageTypes.SET_IMAGE:
      return {
        ...state,
        src: action.payload.src,
      }
    default:
      return {
        ...state,
      }
  }
}

export { imageReducer }
