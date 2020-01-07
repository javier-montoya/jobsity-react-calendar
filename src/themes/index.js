import { createMuiTheme } from "@material-ui/core/styles";

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
