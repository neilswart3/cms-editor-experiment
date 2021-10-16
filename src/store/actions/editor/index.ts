import { EditorSetOpen, EditorState, editorTypes } from './types'

export const editorOpen = (payload: EditorState): EditorSetOpen => ({
  type: editorTypes.EDITOR_SET_OPEN,
  payload,
})
