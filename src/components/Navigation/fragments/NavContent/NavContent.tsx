import React from 'react'
import Styled from './styles'

interface Props {
  children: React.ReactNode
}

const NavContent: React.FC<Props> = ({ children }) => {
  return <Styled.NavContent>{children}</Styled.NavContent>
}

export default NavContent
