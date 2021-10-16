import { all, fork } from 'redux-saga/effects'
// import { filmsWatcher } from './films'
// import { genresWatcher } from './genres'

export function* rootSaga() {
  yield all([
    // fork(genresWatcher),
    // fork(filmsWatcher)
  ])
}
