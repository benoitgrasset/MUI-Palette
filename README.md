# MUI_Palette
Color palette for theme

## Need to install: 
"@material-ui/core"


## Usage: 
<Palette theme={theme} />


example:
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4400',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
