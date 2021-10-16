export enum navTypes {
  NAV_SET_OPEN = 'NAV_SET_OPEN',
}

export interface NavState {
  open: boolean
}

export interface NavStatePayload {
  open: boolean
}

export type NavSetOpen = {
  type: typeof navTypes.NAV_SET_OPEN
  payload: NavStatePayload
}

export type NavActions = NavSetOpen
