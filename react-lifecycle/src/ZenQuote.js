import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.css';

export default class ZenQuote extends Component {
  state = { quote: null };

  async componentDidMount() {
    const quote = await axios.get("https://api.github.com/zen");
    
    setTimeout(() => {
      this.setState({ quote: quote.data })
    }, 3000);
  }

  render() {
    return(
      <div>
        <div className={!this.state.quote ? "loader" : null}></div>
        <h1>Zen Quotes..</h1>
        <p>{this.state.quote}</p>
      </div>
    )
  }
}