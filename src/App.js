import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { makeStyles, Grid } from '@material-ui/core';
import Info from './Info';
import Menu from './Menu';
import Routes from './router';

const useStyles = makeStyles({
  gridItem1: {
    background: "red",
    width: "50%",
    textAlign: "center"
  },
  gridItem2: {
    width: "50%",
    textAlign: "center"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <BrowserRouter>
        <Grid container direction="row">
          <Grid item className={classes.gridItem1}>
            <Info />
          </Grid>
          <Grid item className={classes.gridItem2}>
            <Menu />
            <Routes />     
          </Grid>
        </Grid>
      </BrowserRouter>
    </div>
  );
};

export default App;
