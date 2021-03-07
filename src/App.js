import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MediaQuery from "react-responsive";
import { makeStyles, Grid } from '@material-ui/core';
import Info from './Info';
import Menu from './Menu';
import Routes from './router';

const useStyles = makeStyles({
  gridItem1: {
    background: "#FF5700",
    width: "50%",
    height: "100vh",
    textAlign: "center"
  },
  gridItem2: {
    background: "#EDEDED",
    width: "50%",
    height: "100vh",
    textAlign: "center"
  },
  gridItem1Mobile: {
    background: "#FF5700",
    width: "100%",
    textAlign: "center"
  },
  gridItem2Mobile: {
    background: "#EDEDED",
    width: "100%",
    textAlign: "center"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <BrowserRouter>
        <MediaQuery query="(min-width: 769px)">
          <Grid container direction="row">
            <Grid item className={classes.gridItem1}>
              <Info />
            </Grid>
            <Grid item className={classes.gridItem2}>
              <Menu />
              <Routes /> 
            </Grid>
          </Grid>
        </MediaQuery>
        <MediaQuery query="(max-width: 769px)">
          <Grid container direction="column">
            <Grid item className={classes.gridItem1Mobile}>
              <Info />
            </Grid>
            <Grid item className={classes.gridItem2Mobile}>
              <Menu />
              <Routes />     
            </Grid>
          </Grid>
        </MediaQuery>
      </BrowserRouter>
    </div>
  );
};

export default App;