export enum imageTypes {
  SET_IMAGE = 'SET_IMAGE',
}

export interface ImageState {
  src: string
  name: string
}

export interface ImageStatePayload {
  src: string
  name: string
}

export type SetImage = {
  type: typeof imageTypes.SET_IMAGE
  payload: ImageStatePayload
}

export type ImageActions = SetImage
