import { Typography, makeStyles } from "@material-ui/core";

import GirlsWhoCode from "../assets/images/girlswhocode.png";
import React from "react";

const useStyles = makeStyles({
  homeContainer: {
    // display: "flex",
    // justifyContent: "center",
  },
  imageContainer: {
    alignSelf: "center",
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeContainer}>
      <div className={classes.textContainer}>
        <Typography
          style={{ marginTop: "64px", fontSize: "34px", paddingBottom: "16px" }}
        >
          Welcome!
        </Typography>
      </div>
      <div className={classes.imageContainer}>
        <img src={GirlsWhoCode} alt="girls who code UVA" />
      </div>
    </div>
  );
};

export default Home;
