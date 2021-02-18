import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import { Contact } from './Chips';
import Img from './images/myphoto.JPG';

const useStyles = makeStyles({
    titleFont: {
        fontFamily: "Bebas Neue"
    },
    imgBox: {
        width: "35%",
        margin: "0 auto"
    },
    img: {
        width: "100%",
        maxWidth: "100%",
        height: "auto"
    },
    root: {
        padding: "100px 0px"
    }
});

function Name() {
    const classes = useStyles();
    return <Typography variant="h2" className={classes.titleFont}>Shinya Kimura</Typography>
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
            <Contact />
        </div>
    );
};

export default Info;