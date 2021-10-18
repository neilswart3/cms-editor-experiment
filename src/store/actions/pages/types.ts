export type Image = {
  src: string
  name: string
}

export type Page = {
  title?: string
  content?: string
  image?: Image
}

export type Pages = {
  landing?: Page
}

export enum pagesTypes {
  PAGES_REQUEST = 'PAGES_REQUEST',
  PAGES_SUCCESS = 'PAGES_SUCCESS',
  PAGES_FAILURE = 'PAGES_FAILURE',
  PAGES_UPDATE_REQUEST = 'PAGES_UPDATE_REQUEST',
  PAGES_UPDATE_SUCCESS = 'PAGES_UPDATE_SUCCESS',
  PAGES_UPDATE_FAILURE = 'PAGES_UPDATE_FAILURE',
}

export interface PagesState {
  data: Pages
  error: null | string
  loading: boolean
}

export interface PagesSuccessPayload {
  data: Pages
}

export interface PagesFailurePayload {
  error: string
}

export interface PagesRequest {
  type: typeof pagesTypes.PAGES_REQUEST
}

export type PagesSuccess = {
  type: typeof pagesTypes.PAGES_SUCCESS
  payload: PagesSuccessPayload
}

export type PagesFailure = {
  type: typeof pagesTypes.PAGES_FAILURE
  payload: PagesFailurePayload
}

export interface PagesUpdateRequestPayload {
  page: string
  values: Page
}

export interface PagesUpdateSuccessPayload {
  data: Pages
}

export interface PagesUpdateFailurePayload {
  error: string
}

export type PagesUpdateRequest = {
  type: typeof pagesTypes.PAGES_UPDATE_REQUEST
  payload: PagesUpdateRequestPayload
}

export type PagesUpdateSuccess = {
  type: typeof pagesTypes.PAGES_UPDATE_SUCCESS
  payload: PagesUpdateSuccessPayload
}

export type PagesUpdateFailure = {
  type: typeof pagesTypes.PAGES_UPDATE_FAILURE
  payload: PagesUpdateFailurePayload
}

export type PagesActions =
  | PagesRequest
  | PagesSuccess
  | PagesFailure
  | PagesUpdateRequest
  | PagesUpdateSuccess
  | PagesUpdateFailure
