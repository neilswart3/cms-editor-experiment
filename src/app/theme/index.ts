import { Theme, createTheme } from '@material-ui/core'
import colors from './colors'
import typography from './typography'

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#fb8c00',
    },
    secondary: {
      main: colors.white,
    },
  },
  typography,
  overrides: {
    MuiIconButton: {
      root: {
        color: colors.white,
      },
    },
  },
})

export default theme
