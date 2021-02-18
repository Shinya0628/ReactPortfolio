import React from 'react';
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import imgBlog from '../images/Blog.png';

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

function Blog() {
    const classes = useStyles();
    return (
        <div>
           <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Blog"
                    height="140"
                    image={imgBlog}
                    title="Blog"
                    />
                    <CardContent className={classes.white}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.bodyFont}>
                            Blog
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.bodyFont}>
                            A CRUD application with NodeJS in the backend. It demonstrates getting data in and out of a database.
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.bodyFont}>
                            EJS / Bootstrap / Node.js / MongoDB
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.right}>
                    <Button size="small" color="primary">
                        <a href="https://node--blog.herokuapp.com/" className={classes.link + " " + classes.titleFont}>
                            Go to website
                        </a>
                    </Button>
                </CardActions>
            </Card> 
        </div>
    );
};

export default Blog;