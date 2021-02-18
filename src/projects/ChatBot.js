import React from 'react';
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import imgChatBot from '../images/ChatBot.png';

const useStyles = makeStyles({
    root: {
        background: "#404040",
        maxWidth: 345,
        margin: "0 auto"
    },
    white: {
        color: "white"
    },
    bodyFont: {
        fontFamily: "Fjalla One"
    },
    titleFont: {
        fontFamily: "Bebas Neue"
    },
    right: {
        float: "right"
    },
    link: {
        color: "#0083FF",
        textDecoration: "none"
    }
});

function ChatBot() {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="ChatBot"
                    height="140"
                    image={imgChatBot}
                    title="ChatBot"
                    />
                    <CardContent className={classes.white}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.bodyFont}>
                            ChatBot
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.bodyFont}>
                            A chatbot app inspired by Facebook’s chatbot within Messenger that let’s the user select questions and generates coherent answers.
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.bodyFont}>
                            HTML / CSS / Material-UI / React.js
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.right}>
                    <Button size="small" color="primary">
                        <a href="https://react-chatbot-demo.vercel.app/" className={classes.link + " " + classes.titleFont}>
                            Go to website
                        </a>
                    </Button>
                </CardActions>
            </Card> 
        </div>
    );
};

export default ChatBot;