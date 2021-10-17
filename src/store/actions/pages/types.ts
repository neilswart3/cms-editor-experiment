export type Field = {
  uid: string
  content: string
}
export type Page = {
  title?: Field
  content?: Field
}

export type Pages = {
  landing?: Page
}

export enum pagesTypes {
  PAGES_REQUEST = 'PAGES_REQUEST',
  PAGES_SUCCESS = 'PAGES_SUCCESS',
  PAGES_FAILURE = 'PAGES_FAILURE',
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

export type PagesActions = PagesRequest | PagesSuccess | PagesFailure
