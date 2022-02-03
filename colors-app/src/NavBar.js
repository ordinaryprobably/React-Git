import React, { Component } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';
import { IconButton, MenuItem, Select, Snackbar } from "@material-ui/core";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { colorFormat: 'hex', isSnackBarOpen: false };

    this.handleChange = this.handleChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleChange(event) {
    this.setState(
      { colorFormat: event.target.value, isSnackBarOpen: true },
      () => this.props.changeFormat(this.state.colorFormat)
    );
  }

  closeSnackbar() {
    this.setState({ isSnackBarOpen: false });
  }

  render() {
    const { level, isShowingAllColors } = this.props;

    return (
      <header className="NavBar">
        <div className="logo">
          <Link to="/">react color picker</Link>
        </div>
        {isShowingAllColors && 
          <div className="slider">
            <p>level {level}</p>
            <Slider 
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              trackStyle={{ backgroundColor: 'transparent' }}
              handleStyle={{ backgroundColor: 'green', border: 'none'}}
              onAfterChange={this.props.changeLevel}
            />
          </div>
        }
        <div className="select-container">
          <span>Copy Colors in: </span>
          <Select value={this.state.colorFormat} onChange={this.handleChange}>
            <MenuItem value="hex">Hex</MenuItem>
            <MenuItem value="rgb">rgb</MenuItem>
            <MenuItem value="rgba">rgba</MenuItem>
          </Select>
        </div>
        <Snackbar 
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.isSnackBarOpen}
          onClose={this.closeSnackbar}
          autoHideDuration={3000}
          message={<span>Color Format Changed to {this.state.colorFormat.toUpperCase()}</span>}
          action={[
            <IconButton 
              color='inherit' 
              onClick={this.closeSnackbar}
              key='close'>
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    )
  }
}