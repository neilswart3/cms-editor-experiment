import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import Logo from './Logo'
import Styled from './styles'
import { Edit, Menu } from '@mui/icons-material'

interface Props {}

const Header: React.FC<Props> = (props: Props) => {
  return (
    <Styled.Header>
      <AppBar position='static' elevation={0}>
        <Styled.Toolbar>
          <Typography variant='h6' component='div'>
            <Logo />
          </Typography>
          <Styled.IconButton>
            <Menu />
          </Styled.IconButton>
        </Styled.Toolbar>
      </AppBar>
    </Styled.Header>
  )
}

export default Header
