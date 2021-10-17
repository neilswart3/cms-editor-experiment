import { takeLatest, call, put, all } from 'redux-saga/effects'
import { createUser } from 'src/app/api'
import { authFailure, authSuccess } from '../actions/auth'
import { authTypes } from '../actions/auth/types'
import {
  getErrorMessage,
  getReadableErrorMessage,
  ResponseGenerator,
} from './helpers'

function* loginSaga({ payload }: any) {
  console.log('payload:', payload)

  try {
    const data: ResponseGenerator = yield call(createUser, payload)

    if (data.user) {
      const { accessToken, email, uid } = data.user

      yield put(
        authSuccess({
          data: {
            accessToken,
            email,
            uid,
          },
        })
      )
    }

    if (data.error) {
      const message = getReadableErrorMessage(data.error)
      yield put(authFailure({ error: message }))
    }
  } catch (error) {
    const message = getErrorMessage(error as Error)
    yield put(authFailure({ error: message }))
  }
}

export function* authWatcher() {
  yield all([takeLatest(authTypes.AUTH_REQUEST, loginSaga)])
}
