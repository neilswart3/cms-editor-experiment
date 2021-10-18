import { takeLatest, call, put, all } from 'redux-saga/effects'
import { getPages, updatePage } from 'src/app/api'
import {
  pagesFailure,
  pagesSuccess,
  pagesUpdateFailure,
  pagesUpdateSuccess,
} from '../../actions/pages'
import { pagesTypes } from '../../actions/pages/types'
import {
  getErrorMessage,
  getReadableErrorMessage,
  ResponseGenerator,
} from '../helpers'

function* fetchPages() {
  try {
    const data: ResponseGenerator = yield call(getPages)

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

function* updatePages({ payload }: any) {
  const { page, values } = payload

  try {
    const data: ResponseGenerator = yield call(updatePage, {
      page,
      values,
    })

    if (data.pages) {
      console.log('data:', data)
      yield put(pagesUpdateSuccess({ data: data.pages }))
    }

    if (data.error) {
      const message = getReadableErrorMessage(data.error)
      yield put(pagesUpdateFailure({ error: message }))
    }
  } catch (error) {
    const message = getErrorMessage(error as Error)
    yield put(pagesUpdateFailure({ error: message }))
  }
}

export function* pagesWatcher() {
  yield all([
    takeLatest(pagesTypes.PAGES_REQUEST, fetchPages),
    takeLatest(pagesTypes.PAGES_UPDATE_REQUEST, updatePages),
  ])
}
