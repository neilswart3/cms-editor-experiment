import styled from 'styled-components'
import { TextField as MuiTextField } from '@material-ui/core'
import { colors } from 'src/app'
import { rgba } from 'polished'

const TextField = styled(MuiTextField)`
  display: block;

  .MuiOutlinedInput-root {
    &:hover {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${rgba(colors.white, 0.87)};
      }
    }
  }
`

const Styled = { TextField }

export default Styled
