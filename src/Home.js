import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: "50%",
        height: "90vh",
        display: "table-cell",
        verticalAlign: "middle"
    }
});

function Home() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography variant="h1">Hello World</Typography>
        </Box> 
    );
};

export default Home;
