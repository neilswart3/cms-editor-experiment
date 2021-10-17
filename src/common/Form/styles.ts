import { Toolbar } from '@material-ui/core'
import styled from 'styled-components'

const Form = styled(Toolbar).attrs(() => ({
  component: 'form',
}))`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
`

const Styled = { Form }

export default Styled
