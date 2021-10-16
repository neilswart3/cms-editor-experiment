// import { Genre } from 'src/lib/types'

// export enum genresTypes {
//   FETCH_GENRES_REQUEST = 'FETCH_GENRES_REQUEST',
//   FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS',
//   FETCH_GENRES_FAILURE = 'FETCH_GENRES_FAILURE',
// }

// export interface GenresState {
//   data: Genre[]
//   error: null | string
//   loading: boolean
// }

// export interface FetchGenresSuccessPayload {
//   data: Genre[]
// }

// export interface FetchGenresFailurePayload {
//   error: string
// }

// export interface FetchGenresRequest {
//   type: typeof genresTypes.FETCH_GENRES_REQUEST
// }

// export type FetchGenresSuccess = {
//   type: typeof genresTypes.FETCH_GENRES_SUCCESS
//   payload: FetchGenresSuccessPayload
// }

// export type FetchGenresFailure = {
//   type: typeof genresTypes.FETCH_GENRES_FAILURE
//   payload: FetchGenresFailurePayload
// }

// export type GenresActions =
//   | FetchGenresRequest
//   | FetchGenresSuccess
//   | FetchGenresFailure
