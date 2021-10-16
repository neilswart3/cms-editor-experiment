import React from 'react'
import { Menu } from '@mui/icons-material'
import Logo from './Logo'
import Styled from './styles'

const Header: React.FC = () => {
  return (
    <Styled.Header position='absolute' elevation={0}>
      <Logo />
      <Styled.IconButton color='primary'>
        <Menu />
      </Styled.IconButton>
    </Styled.Header>
  )
}

export default Header
