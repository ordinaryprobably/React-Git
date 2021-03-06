import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./SeedColors";
import generatePalette from './ColorHelpers';
import { Route, Switch } from "react-router";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

export default class App extends Component {
  findPalette(id) {
    return seedColors.find(palette => palette.id === id);
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={(routerProps) => <PaletteList palette={seedColors} {...routerProps} />} />
        <Route exact path='/palette/new' render={() => <NewPaletteForm />} />
        <Route exact path='/palette/:id' 
          render={(routerProps) => 
            <Palette palette={generatePalette(this.findPalette(routerProps.match.params.id))}/>
          } 
        />
        <Route 
          path='/palette/:paletteId/:colorId' 
          render={(routerProps) => 
            <SingleColorPalette 
              palette={generatePalette(this.findPalette(routerProps.match.params.paletteId))} 
              colorId={routerProps.match.params.colorId}  
            />
          }
        />
      </Switch>
    )
  }
}