import React, { Component } from "react";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';

export default class NavBar extends Component {
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
      </header>
    )
  }
}