import { combineReducers } from 'redux'
import { editorReducer } from './editor'
import { authReducer } from './auth'
import { navReducer } from './nav'
import { paletteReducer } from './palette'

const rootReducer = combineReducers({
  auth: authReducer,
  editor: editorReducer,
  nav: navReducer,
  palette: paletteReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export { rootReducer }
