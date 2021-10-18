import { Drawer } from '@material-ui/core'
import { rgba } from 'polished'
import { colors } from 'src/app'
import styled from 'styled-components'

const Navigation = styled(Drawer)`
  display: block;
`
interface NavigationInnerProps {
  bgColor: string
}

const NavigationInner = styled.div<NavigationInnerProps>`
  background-color: ${({ bgColor }) => rgba(bgColor || colors.white, 0.25)};
  transition: background-color 0.5s ease;
  min-width: 20vw;
  height: 100%;
`

const Styled = { Navigation, NavigationInner }

export default Styled
