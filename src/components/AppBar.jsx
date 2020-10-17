import AppBar from "@material-ui/core/AppBar";
import Drawer from "./Drawer";
import React from "react";
import {Link} from "react-router-dom";
import {Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    marginLeft: "34px"
  }
}));

const AppBarComponent = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      style={{backgroundColor: "black", display: "flex", justifyContent: "flex-end"}}
    >
      <Toolbar>
        <Drawer />
        <Typography variant="h3" className={classes.title}>
          Girls Who Code
        </Typography>
        <div style={{paddingRight: "12px"}}>
          <Link to="/">
            <HomeIcon />
          </Link>
        </div>
        <a href="https://github.com/" rel="noopener noreferrer" target="_blank">
          <GitHubIcon />
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
