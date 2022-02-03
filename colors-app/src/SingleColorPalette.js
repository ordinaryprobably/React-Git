import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Footer from './Footer';
import NavBar from './NavBar';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);

    this.state = { colorFormat: 'hex' };

    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }

  changeColorFormat(newFormat) {
    this.setState({ colorFormat: newFormat });
  }

  gatherShades(palette, colorToFilterBy) {
    const shades = [];
    const allColors = palette.colors;

    for(let shadeLevel in allColors) {
      shades.push(...allColors[shadeLevel].filter(color => color.id === colorToFilterBy))
    }

    return shades;
  }

  render() {
    const colorBoxes = this._shades.map(tag => (
      <ColorBox 
        name={tag.name}
        background={tag[this.state.colorFormat]}
        key={tag.name}
        showLink={false}
      />
    ))

    return (
      <div className='SingleColorPalette Palette'>
        <div className='Palette-navbar'>
          <NavBar 
            changeFormat={this.changeColorFormat}
            isShowingAllColors={false}
          />
        </div>
        <div className='Palette-colors'>
          { colorBoxes }
        </div>
        <Footer paletteName={this.props.palette.paletteName} emoji={this.props.palette.emoji} />
      </div>
    )
  }
}

export default SingleColorPalette;