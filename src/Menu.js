import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Box, Breadcrumbs } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    center: {
        margin: "0 auto"
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
        },
    link: {
        display: "flex",
        textDecoration: "none"
    },
}));

function Menu() {
  const classes = useStyles();

  return (
    <Box className={classes.center}>
        <Breadcrumbs aria-label="breadcrumb">
            <Link to="/" className={classes.link}>
                <HomeIcon className={classes.icon} />
                HOME
            </Link>
            <Link to="/about" className={classes.link}>
                ABOUT
            </Link>
            <Link to="/works" className={classes.link}>
                WORKS
            </Link>
        </Breadcrumbs>
    </Box>
  );
};

export default Menu;