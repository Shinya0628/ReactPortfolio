import React from 'react';
import MediaQuery from "react-responsive";
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
        <>
            <MediaQuery query="(min-width: 769px)">
                <Fade in timeout={2500}>
                    <Box className={classes.root}>
                        <Typography variant="h1" className={classes.titleFont}>Hello World</Typography>
                    </Box>
                </Fade>
            </MediaQuery>
            <MediaQuery query="(max-width: 769px)">
                <Fade in timeout={2500}>
                    <Box className={classes.root}>
                        <Typography variant="h2" className={classes.titleFont}>Hello World</Typography>
                    </Box>
                </Fade>
            </MediaQuery>
        </>
    );
};

export default Home;