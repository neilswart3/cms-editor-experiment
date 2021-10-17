import React from 'react'
import { EditorLayout } from '..'
import Styled from './styles'

interface Props {
  children: React.ReactNode
  palette: string[]
}

const BackgroundLayout: React.FC<Props> = ({ children, palette }) => {
  return (
    <Styled.BackgroundLayout>
      <Styled.BackgroundGradient palette={palette} />
      <EditorLayout>
        <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
      </EditorLayout>
    </Styled.BackgroundLayout>
  )
}

export default BackgroundLayout
