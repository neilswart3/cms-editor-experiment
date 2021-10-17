import { all, fork } from 'redux-saga/effects'
import { authWatcher } from './auth/auth'
import { pagesWatcher } from './pages'

export function* rootSaga() {
  yield all([fork(authWatcher), fork(pagesWatcher)])
}
