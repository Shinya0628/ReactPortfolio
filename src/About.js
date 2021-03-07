import React from 'react';
import MediaQuery from "react-responsive";
import { makeStyles, Fade, Box, Typography } from '@material-ui/core';
import { Skills } from './Chips';

const useStyles = makeStyles({
    bodyFont: {
        fontFamily: "Fjalla One"
    },
    width: {
        width: "80%",
        margin: "0 auto 30px auto"
    },
    titleFont: {
        fontFamily: "Bebas Neue"
    },
    space: {
        height: "50px"
    },
    spaceMobile: {
        height: "20px"
    }
});

function Content() {
    const classes = useStyles();
    return (
        <Typography variant="body1" className={classes.bodyFont + " " + classes.width}>Full-stack web developer with a background in agricultural mechanics and a passion for solving highly technical problems. The skill of tackling large obstacles and breaking them down into small, manageable goals led me from machinery production to coding. I believe that my passion for web development and my skills in problem solving would make me a great asset to your team. I look forward to working and honing my skills with an experienced team.</Typography>
    );
};

function About() {
    const classes = useStyles();
    return (
        <>
            <MediaQuery query="(min-width: 769px)">
                <Fade in timeout={2500}>
                    <Box>
                        <Typography variant="h1" className={classes.titleFont}>About Me</Typography>
                        <Content />
                        <Box className={classes.space}></Box>
                        <Typography variant="h1" className={classes.titleFont}>My Skills</Typography>
                        <Skills />
                    </Box>
                </Fade>
            </MediaQuery>
            <MediaQuery query="(max-width: 769px)">
                <Fade in timeout={2500}>
                    <Box>
                        <Typography variant="h2" className={classes.titleFont}>About Me</Typography>
                        <Content />
                        <Box className={classes.spaceMobile}></Box>
                        <Typography variant="h2" className={classes.titleFont}>My Skills</Typography>
                        <Skills />
                    </Box>
                </Fade>
            </MediaQuery>
        </>
    );
};

export default About;