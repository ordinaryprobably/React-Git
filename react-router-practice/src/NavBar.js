import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/snack">Snack</NavLink>
        <NavLink to="/drink">Drink</NavLink>
        <NavLink to="/candy">Candy</NavLink>
      </div>
    )
  }
}