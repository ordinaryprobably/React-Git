import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./SeedColors";
import generatePalette from './ColorHelpers';
import { Route, Switch } from "react-router";

export default class App extends Component {
  render() {
    const palette = generatePalette(seedColors[1]);

    return (
      <Switch>
        <Route exact path='/' render={() => <h1>PaletteList goes here</h1>} />
        <Route exact path='/palette/:id' render={() => <h1>individual Palette goes here</h1>} />
      </Switch>
      // <div>
      //   <Palette palette={palette}/>
      // </div>
    )
  }
}