import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  box: {
    padding: "10px",
    zIndex: "1000",
    position: "fixed"
  }
});

export default function Footer() {
  const classes = useStyles();

  return (
    <Paper className={classes.box}>
      <img src={wallet} alt="Wallet" />
    </Paper>
  );
}
