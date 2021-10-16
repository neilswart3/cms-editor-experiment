import React from 'react'
import Styled from './styles'

interface Props {
  children: React.ReactNode
  palette: string[]
}

const BackgroundLayout: React.FC<Props> = ({ children, palette }) => {
  return (
    <Styled.BackgroundLayout>
      <Styled.BackgroundGradient palette={palette} />
      {children}
    </Styled.BackgroundLayout>
  )
}

export default BackgroundLayout
