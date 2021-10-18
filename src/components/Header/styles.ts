import styled from 'styled-components'
import { AppBar, Fab as MuiFab } from '@material-ui/core'
import { colors } from 'src/app'
import MenuFab from 'src/common/MenuFab'

const Header = styled(AppBar)`
  padding: 2rem 3rem 1rem;
`

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Fab = styled(MenuFab)``

const Styled = { Header, HeaderInner, Fab }

export default Styled
