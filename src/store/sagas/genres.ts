import { takeLatest, call, put, all } from 'redux-saga/effects'
// import { getGenres } from 'src/lib/api/getGenres'
// import { fetchGenresFailure, fetchGenresSuccess } from '../actions/genres'
// import { genresTypes } from '../actions/genres/types'
// import { getErrorMessage, ResponseGenerator } from './helpers'

// function* fetchGenres() {
//   try {
//     const res: ResponseGenerator = yield call(getGenres)

//     yield put(
//       fetchGenresSuccess({
//         data: res.data.Genres,
//       })
//     )
//   } catch (error) {
//     const message = getErrorMessage(error as Error)

//     yield put(
//       fetchGenresFailure({
//         error: message,
//       })
//     )
//   }
// }

// export function* genresWatcher() {
//   yield all([takeLatest(genresTypes.FETCH_GENRES_REQUEST, fetchGenres)])
// }
