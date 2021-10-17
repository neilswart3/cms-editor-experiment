export type User = {
  accessToken: string
  email: string
  uid: string
}

export enum authTypes {
  AUTH_REQUEST = 'AUTH_REQUEST',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_FAILURE = 'AUTH_FAILURE',
}

export interface AuthState {
  data: User
  error: null | string
  loading: boolean
}

export interface AuthRequestPayload {
  email: string
  password: string
}

export interface AuthSuccessPayload {
  data: User
}

export interface AuthFailurePayload {
  error: string
}

export interface AuthRequest {
  type: typeof authTypes.AUTH_REQUEST
  payload: AuthRequestPayload
}

export type AuthSuccess = {
  type: typeof authTypes.AUTH_SUCCESS
  payload: AuthSuccessPayload
}

export type AuthFailure = {
  type: typeof authTypes.AUTH_FAILURE
  payload: AuthFailurePayload
}

export type AuthActions = AuthRequest | AuthSuccess | AuthFailure
