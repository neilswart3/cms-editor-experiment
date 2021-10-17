import { SetImage, ImageState, imageTypes } from './types'

export const setImage = (payload: ImageState): SetImage => ({
  type: imageTypes.SET_IMAGE,
  payload,
})
