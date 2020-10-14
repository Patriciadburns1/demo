import { Route, Switch } from "react-router-dom";

import AppBar from "./components/AppBar";
import Home from "./components/Home";
import React from "react";
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
          </div>
        </Switch>
      </div>
      {/* <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                <Route component={Error} /> */}
    </div>
  );
};

export default Main;
