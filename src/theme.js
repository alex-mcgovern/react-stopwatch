import { grey, pink, red } from '@material-ui/core/colors'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
      hover: red[300],
    },
    secondary: {
      main: pink[500],
    },
    background: {
      grey: '#f4f7f9',
      lightGrey: '#f9fbfc',
    },
  },
})

theme = responsiveFontSizes(theme)

theme.props = {
  MuiButton: {
    disableElevation: false,
    variant: 'contained',
    color: 'primary',
    disableRipple: 'true',
  },
  MuiInputLabel: {
    shrink: true,
  },
  MuiInput: {
    disableUnderline: true,
  },
  MuiTooltip: {
    arrow: true,
  },
}

theme.overrides = {
  MuiCssBaseline: {
    root: {
      body: {
        backgroundColor: theme.palette.background.Grey,
        height: '100%',
      },
    },
  },
  MuiContainer: {
    root: {
      margin: '60px 0',
      width: `100%`,
    },
  },
  MuiButton: {
    root: {
      color: 'white',
    },

    containedPrimary: {
      '&:hover': {
        backgroundColor: theme.palette.primary.hover,
      },
    },
    containedSecondary: {
      fontWeight: 700,
    },
  },
  MuiGrid: {
    root: {
      width: '100%',
    },
  },
  MuiCard: {
    root: {
      margin: '15px',
    },
  },
}

export default theme
