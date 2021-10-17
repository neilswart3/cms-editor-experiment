import styled from 'styled-components'
import { Toolbar, Typography } from '@material-ui/core'
import { colors } from 'src/app'

const EditorHeader = styled(Toolbar)`
  width: 100%;
`

const Text = styled(Typography)`
  color: ${colors.white};
`

const Styled = { EditorHeader, Text }

export default Styled
