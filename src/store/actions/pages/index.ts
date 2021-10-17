import {
  PagesFailure,
  PagesFailurePayload,
  PagesRequest,
  PagesSuccess,
  PagesSuccessPayload,
  pagesTypes,
  PagesUpdateFailure,
  PagesUpdateFailurePayload,
  PagesUpdateRequest,
  PagesUpdateRequestPayload,
  PagesUpdateSuccess,
  PagesUpdateSuccessPayload,
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

export const pagesUpdateRequest = (
  payload: PagesUpdateRequestPayload
): PagesUpdateRequest => ({
  type: pagesTypes.PAGES_UPDATE_REQUEST,
  payload,
})

export const pagesUpdateSuccess = (
  payload: PagesUpdateSuccessPayload
): PagesUpdateSuccess => ({
  type: pagesTypes.PAGES_UPDATE_SUCCESS,
  payload,
})

export const pagesUpdateFailure = (
  payload: PagesUpdateFailurePayload
): PagesUpdateFailure => ({
  type: pagesTypes.PAGES_UPDATE_FAILURE,
  payload,
})
