import React from 'react'
import Styled from './styles'

interface Props {
  background: string
  children: React.ReactNode
}

const HomeLayout: React.FC<Props> = ({ background, children }) => {
  return (
    <Styled.HomeLayout page='home' background={background}>
      {children}
    </Styled.HomeLayout>
  )
}

export default HomeLayout
