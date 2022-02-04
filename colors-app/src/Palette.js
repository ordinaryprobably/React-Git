import React, { Component } from "react";
import ColorBox from "./ColorBox";
import './styles/Palette.css';
import NavBar from "./NavBar";
import Footer from "./Footer";

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
          isShowingAllColors
        />
        <div className="Palette-colors">
          { colorBoxes }
        </div>
        <Footer paletteName={this.props.palette.paletteName} emoji={this.props.palette.emoji} />
      </div>
    )
  }
}