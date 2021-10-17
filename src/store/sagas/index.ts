import { all, fork } from 'redux-saga/effects'
import { authWatcher } from './auth'

export function* rootSaga() {
  yield all([fork(authWatcher)])
}
