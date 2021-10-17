import { takeLatest, call, put, all } from 'redux-saga/effects'
import { getPages } from 'src/app/api'
import { pagesFailure, pagesSuccess } from '../actions/pages'
import { pagesTypes } from '../actions/pages/types'
import {
  getErrorMessage,
  getReadableErrorMessage,
  ResponseGenerator,
} from './helpers'

function* fetchPages() {
  // const { form, email, password } = payload
  // payload
  try {
    const data: ResponseGenerator = yield call(getPages)

    // console.log('data:', data)

    if (data.pages) {
      yield put(pagesSuccess({ data: data.pages }))
    }

    if (data.error) {
      const message = getReadableErrorMessage(data.error)
      yield put(pagesFailure({ error: message }))
    }
  } catch (error) {
    const message = getErrorMessage(error as Error)
    yield put(pagesFailure({ error: message }))
  }
}

export function* pagesWatcher() {
  yield all([takeLatest(pagesTypes.PAGES_REQUEST, fetchPages)])
}
