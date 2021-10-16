import { NavSetOpen, NavState, navTypes } from './types'

export const navOpen = (payload: NavState): NavSetOpen => ({
  type: navTypes.NAV_SET_OPEN,
  payload,
})
