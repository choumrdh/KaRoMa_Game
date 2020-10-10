import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const Counter = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Score</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Game Round: {props.gameRound}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            Player Win:{props.playerWinCount}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            Computer Win:{props.computerWinCount}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            Tie Game:{props.tieCount}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Counter;
