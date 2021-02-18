import React from 'react';
import { makeStyles, Fade, Box, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import ChatBot from './projects/ChatBot';
import Blog from './projects/Blog';
import ContactForm from './projects/ContactForm';

const useStyles = makeStyles({
    titleFont: {
        fontFamily: "Bebas Neue"
    }
});

function Works() {
    const classes = useStyles();
    return (
        <Fade in timeout={2500}>
            <Box>
                <Typography variant="h1" className={classes.titleFont}>Works</Typography>
                <Carousel>
                    <ChatBot />
                    <Blog />
                    <ContactForm />
                </Carousel>
            </Box>
        </Fade>
    );
};

export default Works;