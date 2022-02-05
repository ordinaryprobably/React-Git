import { AppBar, IconButton, InputBase, Switch, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { withStyles } from '@mui/styles';
import React, { Component } from "react";
import styles from './styles/navBarStyles';

class Navbar extends Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <AppBar position='static' color="primary">
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span>😍</span>
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              App Title
            </Typography>
            <Switch/>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </div>
              <InputBase
                placeholder='Search..'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);