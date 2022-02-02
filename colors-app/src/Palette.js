import React, { Component } from "react";
import ColorBox from "./ColorBox";
import './Palette.css';
import NavBar from "./NavBar";

export default class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = { level: 500 };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newLevel) {
    this.setState({ level: newLevel });
  }

  render() {
    const { level } = this.state;
    const colorBoxes = this.props.palette.colors[level].map(tag => (
      <ColorBox background={tag.hex} name={tag.name} />
    ))

    return (
      <div className="Palette">
        <NavBar level={level} changeLevel={this.handleChange}/>
        <div className="Palette-colors">
          { colorBoxes }
        </div>
        {/* Footer goes here */}
      </div>
    )
  }
}