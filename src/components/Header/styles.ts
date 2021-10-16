import styled from 'styled-components'
import { AppBar, IconButton as MuiIconButton } from '@mui/material'
import { colors } from 'src/app'

const Header = styled(AppBar)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 3rem 1rem;
  background-color: transparent;
`

const IconButton = styled(MuiIconButton)``

const Styled = { Header, IconButton }

export default Styled
