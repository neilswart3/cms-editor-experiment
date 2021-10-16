import React from 'react'
import Styled from './styles'

interface Props {
  children: React.ReactNode
  palette: string[]
  className?: string
}

const BackgroundLayout: React.FC<Props> = ({
  children,
  palette,
  className = 'BackgroundLayout',
}) => {
  return (
    <Styled.BackgroundLayout className={className}>
      <Styled.BackgroundGradient palette={palette} />
      {children}
    </Styled.BackgroundLayout>
  )
}

export default BackgroundLayout
