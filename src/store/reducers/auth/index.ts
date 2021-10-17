import { AuthActions, AuthState, authTypes } from 'src/store/actions/auth/types'

const initialState: AuthState = {
  data: {
    accessToken: '',
    email: '',
    uid: '',
  },
  error: null,
  loading: false,
}

const authReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case authTypes.AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case authTypes.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      }
    case authTypes.AUTH_FAILURE:
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

export { authReducer }
