import {createMuiTheme} from "@material-ui/core/styles"

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#82c341"
    }
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif"
  },
  overrides: {
    MuiContainer: {
      maxWidthXl: {
        "@media only screen and (max-width: 1920px)": {
          maxWidth: "1440px !important"
        }
      },
      maxWidthLg: {
        "@media only screen and (max-width: 1920px)": {
          maxWidth: "1200px !important"
        }
      }
    }
  }
})

export default theme
