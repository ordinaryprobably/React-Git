import React, { Component } from "react";
import ColorBox from "./ColorBox";
import './Palette.css';

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(tag => (
      <ColorBox background={tag.color} name={tag.name} />
    ))

    return (
      <div className="Palette">
        {/* NavBar goes here */}
        <div className="Palette-colors">
          { colorBoxes }
        </div>
        {/* Footer goes here */}
      </div>
    )
  }
}