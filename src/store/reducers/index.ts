import { combineReducers } from 'redux'
import { editorReducer } from './editor'
import { navReducer } from './nav'
import { paletteReducer } from './palette'
// import { genresReducer } from './genres'

const rootReducer = combineReducers({
  // genres: genresReducer,
  editor: editorReducer,
  nav: navReducer,
  palette: paletteReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export { rootReducer }
