import { AppBar } from '@material-ui/core'
import styled from 'styled-components'

const NavHeader = styled(AppBar)`
  display: flex;
  gap: 2rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-shadow: none;
  background-color: transparent;
`

const Styled = { NavHeader }

export default Styled
