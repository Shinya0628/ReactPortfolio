import React from 'react';
import { makeStyles, Fade, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        padding: "200px 0px"
    },
    titleFont: {
        fontFamily: "Bebas Neue"
    }
});

function Home() {
    const classes = useStyles();
    return (
        <Fade in timeout={2500}>
            <Box className={classes.root}>
                <Typography variant="h1" className={classes.titleFont}>Hello World</Typography>
            </Box>
        </Fade>
    );
};

export default Home;