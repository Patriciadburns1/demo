import React from "react";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  resourceContainer: {
    paddingLeft: "200px",
    paddingRight: "200px",
    paddingBottom: "100px",
    paddingTop: "100px"
  }
}));

const Resources = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.resourceContainer}>
      <div>
        <h2> Resources </h2>
      </div>
      <div>
        <a href="https://brew.sh/" target="_blank" rel="noopener noreferrer">
          Homebrew
        </a>
      </div>
      <div>
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          React Docs
        </a>
      </div>
      <div>
        <a
          href="https://codesandbox.io/"
          absolute-center
          target="_blank"
          rel="noopener noreferrer"
        >
          CodeSandbox
        </a>
      </div>
      <div>
        <a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">
          Material UI
        </a>
      </div>
    </Paper>
  );
};

export default Resources;
