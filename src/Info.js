import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import Skills from './Skills';
import Img from './images/myphoto.JPG';

const useStyles = makeStyles({
    root: {
        height: "100vh"
    },
    imgBox: {
        width: "35%",
        margin: "0 auto"
    },
    img: {
        width: "100%",
        maxWidth: "100%",
        height: "auto"
    }
});

function Name() {
    return <Typography variant="h2">Shinya Kimura</Typography>
};

function MyImg() {
    const classes = useStyles();
    return (
        <Box className={classes.imgBox}>
            <img src={Img} className={classes.img} />
        </Box>
    );
};

function Info() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Name />
            <MyImg />
            <Skills />
        </div>
    );
};

export default Info;