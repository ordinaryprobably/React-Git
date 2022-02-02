import React, { Component } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';
import { MenuItem, Select } from "@material-ui/core";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { colorFormat: 'hex' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState(
      { colorFormat: event.target.value },
      () => this.props.changeFormat(this.state.colorFormat)
    );
  }

  render() {
    const { level } = this.props;

    return (
      <header className="NavBar">
        <div className="logo">
          <a href="#">react color picker</a>
        </div>
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
        <Select value={this.state.colorFormat} onChange={this.handleChange}>
          <MenuItem value="hex">Hex</MenuItem>
          <MenuItem value="rgb">rgb</MenuItem>
          <MenuItem value="rgba">rgba</MenuItem>
        </Select>
      </header>
    )
  }
}