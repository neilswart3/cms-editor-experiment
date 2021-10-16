import React from 'react'
import { Menu } from '@material-ui/icons'
import Logo from './Logo'
import Styled from './styles'

const Header: React.FC = () => {
  return (
    <Styled.Header position='absolute' color='transparent' elevation={0}>
      <Styled.HeaderInner>
        <Logo />
        <Styled.Fab size='medium' color='secondary'>
          <Menu color='primary' />
        </Styled.Fab>
      </Styled.HeaderInner>
    </Styled.Header>
  )
}

export default Header
