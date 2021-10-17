import { Theme, createTheme } from '@material-ui/core'
import overrides from './overrides'
import palette from './palette'
import typography from './typography'

const theme: Theme = createTheme({
  palette,
  typography,
  overrides,
})

export default theme
