import { Paper, Typography, makeStyles } from "@material-ui/core";

import GirlsWhoCode from "../assets/images/girlswhocode.png";
import React from "react";

const useStyles = makeStyles({
  homeContainer: {
    // display: "flex",
    // justifyContent: "center",
  },
  imageContainer: {
    alignSelf: "center",
    height: "500px",
    paddingRight: "112px",
    paddingLeft: "112px",
    paddingBottom: 0,
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "64px",
  },
  text: {
    marginTop: "64px",
    fontSize: "34px",
    paddingBottom: "16px",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.homeContainer}>
        <div className={classes.textContainer}>
          <Typography className={classes.text}>Welcome and Happy Coding!</Typography>
        </div>
        <div className={classes.imageContainer}>
          <img src={GirlsWhoCode} alt="girls who code UVA " />
        </div>
      </Paper>
    </div>
  );
};

export default Home;
