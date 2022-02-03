import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./SeedColors";
import generatePalette from './ColorHelpers';
import { Route, Switch } from "react-router";
import PaletteList from "./PaletteList";

export default class App extends Component {
  findPalette(id) {
    return seedColors.find(palette => palette.id === id);
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={(routerProps) => <PaletteList palette={seedColors} {...routerProps} />} />
        <Route exact path='/palette/:id' 
          render={(routerProps) => <Palette palette={generatePalette(this.findPalette(routerProps.match.params.id))}/>} 
        />
      </Switch>
    )
  }
}