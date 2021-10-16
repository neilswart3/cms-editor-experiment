import { combineReducers } from 'redux'
import { editorReducer } from './editor'
import { navReducer } from './nav'
// import { genresReducer } from './genres'

const rootReducer = combineReducers({
  // genres: genresReducer,
  editor: editorReducer,
  nav: navReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export { rootReducer }
