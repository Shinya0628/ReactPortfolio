import React from 'react';
import { makeStyles, Chip } from '@material-ui/core';
import imgHTML from './images/HTML.png';
import imgCSS from './images/CSS.png'
import imgJavaScript from './images/JavaScript.png'
import imgReact from './images/React.png'
import imgNode from './images/Node.png'

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

export default Skills;