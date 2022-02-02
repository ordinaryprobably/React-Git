import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./SeedColors";
import generatePalette from './ColorHelpers';

export default class App extends Component {
  render() {
    const palette = generatePalette(seedColors[4]);
    return (
      <div>
        <Palette palette={palette}/>
      </div>
    )
  }
}