import {
  Pages,
  PagesActions,
  PagesState,
  pagesTypes,
} from 'src/store/actions/pages/types'

const initialState: PagesState = {
  data: {},
  error: null,
  loading: false,
}

const pagesReducer = (
  state = initialState,
  action: PagesActions
): PagesState => {
  switch (action.type) {
    case pagesTypes.PAGES_REQUEST:
    case pagesTypes.PAGES_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case pagesTypes.PAGES_SUCCESS:
    case pagesTypes.PAGES_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      }
    case pagesTypes.PAGES_FAILURE:
    case pagesTypes.PAGES_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    default:
      return {
        ...state,
      }
  }
}

export { pagesReducer }
