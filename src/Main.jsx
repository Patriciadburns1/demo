import { Route, Switch } from "react-router-dom";

import AppBar from "./components/AppBar";
import Home from "./components/Home";
import React from "react";

const Main = () => {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                <Route component={Error} /> */}
      </Switch>
    </>
  );
};

export default Main;
