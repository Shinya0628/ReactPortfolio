import React from 'react';
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import imgContactForm from '../images/ContactForm.png';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
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
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            ContactForm
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            A contact form that has been built upon Nodemailer which runs on backend NodeJS.
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Handlebars / CSS / Bootstrap / Node.js / Nodemailer
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <a href="https://nodemailer-contactform.herokuapp.com/">
                            Go to website
                        </a>
                    </Button>
                </CardActions>
            </Card> 
        </div>
    );
};

export default ContactForm;
