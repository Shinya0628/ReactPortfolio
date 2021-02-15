import React from 'react';
import { Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import ChatBot from './projects/ChatBot';
import Blog from './projects/Blog';
import ContactForm from './projects/ContactForm';

function Works() {
    return (
        <>
            <Typography variant="h1">Works</Typography>
            <Carousel>
                <ChatBot />
                <Blog />
                <ContactForm />
            </Carousel>
        </>
    );
};

export default Works;