import React from 'react'
import { Typography } from '@material-ui/core'
import Styled from './styles'

interface Props {}

const EditorHeader: React.FC<Props> = (props) => {
  return (
    <Styled.EditorHeader>
      <Typography align='center' variant='h4' color='textPrimary'>
        Landing Page
      </Typography>
    </Styled.EditorHeader>
  )
}

export default EditorHeader
