import { createMuiTheme } from "@material-ui/core/styles";
// import moduleName from '@material-ui/core/'

export default createMuiTheme({
  palette: {
    primary: { main: "#2f74b5" },
    secondary: { main: "#b52f2f" }
  },
  overrides: {
    MuiTextField: {
      root: {
        marginBottom: "16px"
      }
    },
    MuiButton: {
      root: {
        minWidth: "150px"
      }
    },
    MuiFab: {
      root: {
        maxWidth: "40px",
        maxHeight: "40px",
        minHeight: "40px",
        boxShadow: "none"
      }
    }
  }
});
