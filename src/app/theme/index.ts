import { Theme, createTheme } from '@mui/material/styles'
import colors from './colors'
import typography from './typography'

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#fb8c00',
    },
  },
  typography,
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colors.white,
        },
      },
    },
  },
})

export default theme
