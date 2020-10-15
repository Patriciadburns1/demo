import AppBar from "@material-ui/core/AppBar";
import Drawer from "./Drawer";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: '34px'
  },
}));

const AppBarComponent = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      style={{ backgroundColor:'black', display: "flex", justifyContent: "flex-end"}}
    >
      <Toolbar>
        <Drawer />
        <Typography variant="h6" className={classes.title}>
          Girls Who Code
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
