import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};
function Header({ title, date }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6">
          {title} - {date}
          </Typography>
          
        </Toolbar>
      </AppBar>
        <Typography style={{ color: "#4aedc4" }} variant="h2">
        </Typography>
      </ThemeProvider>
    </div>
  );
}
export default Header;
