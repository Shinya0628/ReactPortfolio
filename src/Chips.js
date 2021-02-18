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
import resume from './images/Resume.pdf';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    }
  },
  a: {
    textDecoration: "none"
  },
  bodyFont: {
    fontFamily: "Fjalla One"
  }
}));

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a href="https://github.com/Shinya0628" className={classes.a}><Chip avatar={<GitHubIcon />} label="GitHub" clickable className={classes.bodyFont} /></a>
      <a href="https://www.linkedin.com/in/shinya-kimura-156683197" className={classes.a}><Chip avatar={<LinkedInIcon />} label="LinkedIn" clickable className={classes.bodyFont} /></a>
      <a href="mailto:k.shinya.777@icloud.com" className={classes.a}><Chip avatar={<MailOutlineIcon />} label="Mail" clickable className={classes.bodyFont} /></a>
      <a href={resume} download="resume-SHINYA" className={classes.a}><Chip　avatar={<InsertDriveFileIson />}　label="Resume" clickable className={classes.bodyFont} /></a>
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
        className={classes.bodyFont}
      />
      <Chip
        avatar={<img src={imgCSS} />}
        label="CSS"
        variant="outlined"
        className={classes.bodyFont}
      />
      <Chip
        avatar={<img src={imgJavaScript} />}
        label="JavaScript"
        variant="outlined"
        className={classes.bodyFont}
      />
      <Chip
        avatar={<img src={imgReact} />}
        label="React.js"
        variant="outlined"
        className={classes.bodyFont}
      />
      <Chip
        avatar={<img src={imgNode} />}
        label="Node.js"
        variant="outlined"
        className={classes.bodyFont}
      />
    </div>
  );
};

export { Contact, Skills };