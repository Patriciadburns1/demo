import {Route, Switch} from "react-router-dom";

import About from "./views/About";
import Example from './views/ApiCall'; 
import AppBar from "./components/AppBar";
import Home from "./views/Home";
import React from "react";
import Resources from "./views/Resources";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  appContainer: {
    width: "100%",
    maxHeight: "100%",
    overflowY: "auto"
  },
  mainContentContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "64px"
  }
});

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.appContainer}>
      <AppBar />
      <div>
        <div className={classes.mainContentContainer}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Example" component={Example} />
            <Route path="/About" component={About} />
            <Route path="/Resources" component={Resources} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Main;
