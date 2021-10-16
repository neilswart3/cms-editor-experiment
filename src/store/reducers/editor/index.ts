import {
  EditorState,
  EditorActions,
  editorTypes,
} from 'src/store/actions/editor/types'

const initialState: EditorState = {
  open: false,
}

const editorReducer = (
  state = initialState,
  action: EditorActions
): EditorState => {
  switch (action.type) {
    case editorTypes.EDITOR_SET_OPEN:
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

export { editorReducer }
