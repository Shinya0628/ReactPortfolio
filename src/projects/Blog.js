import React from 'react';
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import imgBlog from '../images/Blog.png';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
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
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Blog
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            A CRUD application with NodeJS in the backend. It demonstrates getting data in and out of a database.
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            EJS / Bootstrap / Node.js / MongoDB
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <a href="https://node--blog.herokuapp.com/">
                            Go to website
                        </a>
                    </Button>
                </CardActions>
            </Card> 
        </div>
    );
};

export default Blog;
