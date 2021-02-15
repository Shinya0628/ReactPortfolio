import React from 'react';
import { makeStyles, Chip } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InsertDriveFileIson from '@material-ui/icons/InsertDriveFile';
import imgHTML from './images/HTML.png';
import imgCSS from './images/CSS.png';
import imgJavaScript from './images/JavaScript.png';
import imgReact from './images/React.png';
import imgNode from './images/Node.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Chip
        avatar={<GitHubIcon />}
        label="GitHub"
        variant="outlined"
      />
      <Chip
        avatar={<LinkedInIcon />}
        label="LinkedIn"
        variant="outlined"
      />
      <Chip
        avatar={<MailOutlineIcon />}
        label="Mail"
        variant="outlined"
      />
      <Chip
        avatar={<InsertDriveFileIson />}
        label="Resume"
        variant="outlined"
      />
    </div>
  );
};

function Skills() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Chip
        avatar={<img src={imgHTML} />}
        label="HTML"
        variant="outlined"
      />
      <Chip
        avatar={<img src={imgCSS} />}
        label="CSS"
        variant="outlined"
      />
      <Chip
        avatar={<img src={imgJavaScript} />}
        label="JavaScript"
        variant="outlined"
      />
      <Chip
        avatar={<img src={imgReact} />}
        label="React"
        variant="outlined"
      />
      <Chip
        avatar={<img src={imgNode} />}
        label="Node"
        variant="outlined"
      />
    </div>
  );
};

export { Contact, Skills };