import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink 
          className="NavLink"
          activeClassName="NavBar-active" 
          exact 
          to='/dogs'>View Dogs</NavLink>

        {this.props.dogs.map(dog => 
          <NavLink 
            className="NavLink" 
            activeClassName="NavBar-active" 
            exact 
            to={`/dogs/${dog.name}`}>{dog.name}</NavLink>)}
      </div>
    )
  }
}

export default withRouter(NavBar);