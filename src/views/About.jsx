import React from "react";
import {Paper, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  presenterContainer: {
    paddingLeft: '200px',
    paddingRight: '200px',
    paddingBottom: '100px',
    paddingTop: '100px'
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.presenterContainer}>
        <h4>The Presenters: </h4>
        <Divider />
        <h5> Laura Webb </h5>
        <h5>Patricia Burns </h5>
        <h5> Kimberly Bazemore </h5>
      </Paper>
    </div>
  );
};

export default About;
