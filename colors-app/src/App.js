import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./SeedColors";
import generatePalette from './ColorHelpers';
import { Route, Switch } from "react-router";

export default class App extends Component {
  findPalette(id) {
    return seedColors.find(palette => palette.id === id);
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>PaletteList goes here</h1>} />
        <Route exact path='/palette/:id' 
          render={(routerProps) => <Palette palette={generatePalette(this.findPalette(routerProps.match.params.id))}/>} 
        />
      </Switch>
    )
  }
}