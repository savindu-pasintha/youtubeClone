import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import RecomendVidios from "./Recomendvideios";

import { Button } from "react-bootstrap";

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
function Body() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
          <RecomendVidios />
          {/* <Paper className={classes.paper}>recomended vidios</Paper> */}
      </Grid>
    </div>
  );
}

export default Body;
