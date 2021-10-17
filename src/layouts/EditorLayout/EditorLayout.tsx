import React from 'react'
import { Editor } from 'src/components'
import Styled from './styles'

interface Props {
  children: React.ReactNode
}

const EditorLayout: React.FC<Props> = ({ children }) => {
  return (
    <Styled.EditorLayout>
      <Editor />
      {children}
    </Styled.EditorLayout>
  )
}

export default EditorLayout
