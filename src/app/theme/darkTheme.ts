import { createTheme, ThemeOptions } from '@material-ui/core'
import colors from './colors'

const darkTheme = (theme: ThemeOptions) =>
  createTheme({
    ...theme,
    palette: {
      type: 'dark',
      ...theme.palette,
    },
    overrides: {
      ...theme.overrides,
      MuiInputBase: {
        root: {
          color: colors.white,
        },
      },
      MuiInputLabel: {
        root: {
          color: colors.white,
        },
      },
      MuiOutlinedInput: {
        notchedOutline: {
          borderColor: colors.white,
        },
      },
    },
  })

export default darkTheme
