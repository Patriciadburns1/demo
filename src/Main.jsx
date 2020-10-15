import { Route, Switch } from "react-router-dom";

import About from './views/About';
import AppBar from "./components/AppBar";
import Home from "./views/Home";
import React from "react";
import Resources from "./views/Resources";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  appContainer: {
    width: "100%",
    maxHeight: "100%",
    overflowY: "auto",
  },
  mainContentContainer: {
    display: "flex",
    justifyContent: "center",
  },
});

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.appContainer}>
      <AppBar />
      <div>
        <Switch>
          <div className={classes.mainContentContainer}>
            <Route path="/" component={Home} exact />
            <Route path="/Resources" component={Resources} />
            <Route path="/About" component={About} />
          </div>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
