import React from 'react';
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import imgChatBot from '../images/ChatBot.png';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
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
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            ChatBot
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            A chatbot app inspired by Facebook’s chatbot within Messenger that let’s the user select questions and generates coherent answers.
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            HTML / CSS / Material-UI / React.js
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <a href="https://react-chatbot-demo.vercel.app/">
                            Go to website
                        </a>
                    </Button>
                </CardActions>
            </Card> 
        </div>
    );
};

export default ChatBot;
