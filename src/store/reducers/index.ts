import { combineReducers } from 'redux'
import { editorReducer } from './editor'
import { authReducer } from './auth'
import { navReducer } from './nav'
import { paletteReducer } from './palette'
import { pagesReducer } from './page'

const rootReducer = combineReducers({
  auth: authReducer,
  pages: pagesReducer,
  editor: editorReducer,
  nav: navReducer,
  palette: paletteReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export { rootReducer }
