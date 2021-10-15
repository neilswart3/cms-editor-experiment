import styled from 'styled-components'
import {
  IconButton as MuiIconButton,
  Toolbar as MuiToolbar,
} from '@mui/material'
import { colors } from 'src/app'

const Header = styled.div`
  display: block;
`

const IconButton = styled(MuiIconButton)`
  svg {
    color: ${colors.white};
  }
`

const Toolbar = styled(MuiToolbar)`
  display: flex;
  justify-content: space-between;
`

const Styled = { Header, IconButton, Toolbar }

export default Styled
