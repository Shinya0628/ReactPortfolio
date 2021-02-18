import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Box, Breadcrumbs } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    right: {
        float: "right",
        marginRight: "10px"
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
        },
    link: {
        display: "flex",
        color: "black",
        textDecoration: "none"
    },
    titleFont: {
        fontFamily: "Bebas Neue"
    }
}));

function Menu() {
  const classes = useStyles();

  return (
    <Box className={classes.right}>
        <Breadcrumbs aria-label="breadcrumb">
            <Link to="/" className={classes.link + " " + classes.titleFont}>
                <HomeIcon className={classes.icon} />
                HOME
            </Link>
            <Link to="/about" className={classes.link + " " + classes.titleFont}>
                ABOUT
            </Link>
            <Link to="/works" className={classes.link + " " + classes.titleFont}>
                WORKS
            </Link>
        </Breadcrumbs>
    </Box>
  );
};

export default Menu;