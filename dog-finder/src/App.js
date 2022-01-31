import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Dog from "./Dog.js"
import whiskey from './imgs/whiskey.jpg';
import hazel from './imgs/hazel.jpg';
import tubby from './imgs/tubby.jpg';
import DogList from "./DogList";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar dogs={this.props.dogs}/>
        <Switch>
          <Route exact path='/dogs' render={routerProps => <DogList { ...routerProps } dogs={this.props.dogs}/>} />
          <Route exact path='/dogs/:dog' render={routerProps => <Dog { ...routerProps } dogs={this.props.dogs}/>} />
        </Switch>
      </div>
    )
  }
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    },
  ]
}