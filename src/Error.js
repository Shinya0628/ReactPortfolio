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

function Error() {
    const classes = useStyles();
    return (
        <Fade in timeout={2500}>
            <Box className={classes.root}>
                <Typography variant="h1" className={classes.titleFont}>404 error</Typography>
            </Box>
        </Fade>
    );
};

export default Error;