import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import Skills from './Skills';

function Content() {
    return (
        <Typography variant="body1">Full-stack web developer with a background in agricultural mechanics and a passion for solving highly technical problems. The skill of tackling large obstacles and breaking them down into small, manageable goals led me from machinery production to coding. I believe that my passion for web development and my skills in problem solving would make me a great asset to your team. I look forward to working and honing my skills with an experienced team.</Typography>
    );
};

function About() {
    return (
        <>
            <Typography variant="h1">About Me</Typography>
            <Content />
            <Typography variant="h3">Skills</Typography>
            <Skills />
        </>
    );
};

export default About;
