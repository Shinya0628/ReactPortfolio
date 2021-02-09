import React, { Component } from 'react';
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import imgChatBot from './images/ChatBot.png';
import imgBlog from './images/Blog.png';
import imgContactForm from './images/ContactForm.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Project(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

class Projects extends Component {
  constructor(props) {
      super(props);
      this.state = {
          projects: [
              {
                  name: "ChatBot",
                  img: imgChatBot,
                  url: "https://react-chatbot-demo.vercel.app/",
                  description: "A chatbot app inspired by Facebook’s chatbot within Messenger that let’s the user select questions and generates coherent answers.",
                  lgs: ["HTML", "CSS", "Material-UI", "React.js"]
              },
              {
                  name: "Blog",
                  img: imgBlog,
                  url: "https://node--blog.herokuapp.com/",
                  description: "A CRUD application with NodeJS in the backend. It demonstrates getting data in and out of a database.",
                  lgs: ["EJS", "Bootstrap", "Node.js", "MongoDB"]
              },
              {
                  name: "ContactForm",
                  img: imgContactForm,
                  url: "https://nodemailer-contactform.herokuapp.com/",
                  description: "A contact form that has been built upon Nodemailer which runs on backend NodeJS.",
                  lgs: ["Handlebars", "CSS", "Bootstrap", "Node.js", "Nodemailer"]
              }
          ]
      };
  };
  render() {
      return <Project key={this.state.projects.name} info={this.state.projects} />
  };
};

export default Projects;