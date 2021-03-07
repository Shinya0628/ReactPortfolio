import React from 'react';
import MediaQuery from "react-responsive";
import { makeStyles, Typography, Box } from '@material-ui/core';
import { Contact } from './Chips';
import Img from './images/myphoto.JPG';

const useStyles = makeStyles({
    titleFont: {
        fontFamily: "Bebas Neue"
    },
    imgBox: {
        width: "35%",
        margin: "0 auto 20px auto"
    },
    imgBoxMobile: {
        width: "60%",
        margin: "0 auto 20px auto"
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
    return (
        <>
            <MediaQuery query="(min-width: 769px)">
                <Typography variant="h1" className={classes.titleFont}>Shinya Kimura</Typography>
            </MediaQuery>
            <MediaQuery query="(max-width: 769px)">
                <Typography variant="h2" className={classes.titleFont}>Shinya Kimura</Typography>
            </MediaQuery>
        </>
    )
};

function MyImg() {
    const classes = useStyles();
    return (
        <>
            <MediaQuery query="(min-width: 769px)">
                <Box className={classes.imgBox}>
                    <img src={Img} className={classes.img} />
                </Box>
            </MediaQuery>
            <MediaQuery query="(max-width: 769px)">
                <Box className={classes.imgBoxMobile}>
                    <img src={Img} className={classes.img} />
                </Box>
            </MediaQuery>
        </>
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