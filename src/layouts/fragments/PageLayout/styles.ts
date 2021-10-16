import styled from 'styled-components'
import { Paper } from '@material-ui/core'
import { colors } from 'src/app'

const PageLayout = styled(Paper)`
  background-color: ${colors.white};
  width: 100%;
  height: 100%;
  border-radius: 3.5rem;
`

const Styled = { PageLayout }

export default Styled
