export enum editorTypes {
  EDITOR_SET_OPEN = 'EDITOR_SET_OPEN',
}

export interface EditorState {
  open: boolean
}

export interface EditorStatePayload {
  open: boolean
}

export type EditorSetOpen = {
  type: typeof editorTypes.EDITOR_SET_OPEN
  payload: EditorStatePayload
}

export type EditorActions = EditorSetOpen
