import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);

    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
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
        background={tag.hex}
        key={tag.id}
        showLink={false}
      />
    ))

    return (
      <div className='Palette'>
        <h1>single color palette111</h1>
        <div className='Palette-colors'>{ colorBoxes }</div>
      </div>
    )
  }
}

export default SingleColorPalette;