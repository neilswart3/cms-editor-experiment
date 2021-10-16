import { NavState, NavActions, navTypes } from 'src/store/actions/nav/types'

const initialState: NavState = {
  open: false,
}

const navReducer = (state = initialState, action: NavActions): NavState => {
  switch (action.type) {
    case navTypes.NAV_SET_OPEN:
      return {
        ...state,
        open: action.payload.open,
      }
    default:
      return {
        ...state,
      }
  }
}

export { navReducer }
