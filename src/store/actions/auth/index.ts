import {
  AuthFailure,
  AuthFailurePayload,
  AuthRequest,
  AuthRequestPayload,
  AuthSuccess,
  AuthSuccessPayload,
  authTypes,
} from './types'

export const authRequest = (payload: AuthRequestPayload): AuthRequest => ({
  type: authTypes.AUTH_REQUEST,
  payload,
})

export const authSuccess = (payload: AuthSuccessPayload): AuthSuccess => ({
  type: authTypes.AUTH_SUCCESS,
  payload,
})

export const authFailure = (payload: AuthFailurePayload): AuthFailure => ({
  type: authTypes.AUTH_FAILURE,
  payload,
})
