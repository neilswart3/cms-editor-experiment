import React from 'react'
import Styled from './styles'

const EditorHeader: React.FC = () => {
  return (
    <Styled.EditorHeader>
      <Styled.Text align='center' variant='h4' color='textSecondary'>
        Landing Page
      </Styled.Text>
    </Styled.EditorHeader>
  )
}

export default EditorHeader
