import React, { Component } from "react";
import ColorBox from "./ColorBox";
import './Palette.css';
import NavBar from "./NavBar";

export default class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = { level: 500, colorFormat: 'hex' };

    this.changeLevel = this.changeLevel.bind(this);
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }

  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }

  changeColorFormat(newFormat) {
    this.setState({ colorFormat: newFormat });
  }

  render() {
    const { level } = this.state;
    const colorBoxes = this.props.palette.colors[level].map(tag => (
      <ColorBox 
        background={tag[this.state.colorFormat]} 
        name={tag.name} 
        key={tag.id}
        urlToSingleColorPalette={`/palette/${this.props.palette.id}/${tag.id}`}
        showLink
      />
    ))

    return (
      <div className="Palette">
        <NavBar 
          level={level} 
          changeLevel={this.changeLevel}
          changeFormat={this.changeColorFormat}  
        />
        <div className="Palette-colors">
          { colorBoxes }
        </div>
        <footer className="Palette-footer">
          {this.props.palette.paletteName}
          <span className="emoji">{this.props.palette.emoji}</span>
        </footer>
      </div>
    )
  }
}