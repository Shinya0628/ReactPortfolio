import React from 'react';
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import imgContactForm from '../images/ContactForm.png';

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

function ContactForm() {
    const classes = useStyles();
    return (
        <div>
           <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="ContactForm"
                    height="140"
                    image={imgContactForm}
                    title="ContactForm"
                    />
                    <CardContent className={classes.white}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.bodyFont}>
                            ContactForm
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.bodyFont}>
                            A contact form that has been built upon Nodemailer which runs on backend NodeJS.
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.bodyFont}>
                            Handlebars / CSS / Bootstrap / Node.js / Nodemailer
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.right}>
                    <Button size="small" color="primary">
                        <a href="https://nodemailer-contactform.herokuapp.com/" className={classes.link + " " + classes.titleFont}>
                            Go to website
                        </a>
                    </Button>
                </CardActions>
            </Card> 
        </div>
    );
};

export default ContactForm;