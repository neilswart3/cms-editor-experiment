import React from 'react'
import Styled from './styles'

interface Props {
  children: React.ReactNode
  palette: string[]
}

const BackgroundLayout: React.FC<Props> = ({ children, palette }) => {
  return (
    <Styled.BackgroundLayout palette={palette}>
      {children}
    </Styled.BackgroundLayout>
  )
}

export default BackgroundLayout
