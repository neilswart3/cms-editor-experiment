import { combineReducers } from 'redux'
import { editorReducer } from './editor'
// import { genresReducer } from './genres'

const rootReducer = combineReducers({
  // genres: genresReducer,
  editor: editorReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export { rootReducer }
