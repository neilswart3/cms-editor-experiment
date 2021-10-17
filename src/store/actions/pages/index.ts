import {
  PagesFailure,
  PagesFailurePayload,
  PagesRequest,
  PagesSuccess,
  PagesSuccessPayload,
  pagesTypes,
} from './types'

export const pagesRequest = (): PagesRequest => ({
  type: pagesTypes.PAGES_REQUEST,
})

export const pagesSuccess = (payload: PagesSuccessPayload): PagesSuccess => ({
  type: pagesTypes.PAGES_SUCCESS,
  payload,
})

export const pagesFailure = (payload: PagesFailurePayload): PagesFailure => ({
  type: pagesTypes.PAGES_FAILURE,
  payload,
})
