import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.css';

export default class ZenQuote extends Component {
  state = { quote: '' };

  componentDidMount() {
    axios.get("https://api.github.com/zen").then(response => {
      setTimeout(() => {
        this.setState({ quote: response.data });
      }, 3000);
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state)
  }

  render() {
    return(
      <div>
        <h1>Zen Quotes..</h1>
        <div className={!this.state.quote ? "loader" : null}></div>
        <p>{this.state.quote}</p>
      </div>
    )
  }
}