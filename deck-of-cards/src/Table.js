import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Table.css';

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = { id: '', cards: [], remaining: 'Click draw to start.' };

    this.drawCard = this.drawCard.bind(this);
  }

  async componentDidMount() {
    const url = `${API_BASE_URL}/new/shuffle`;
    const response = await axios.get(url);
 
    this.setState({ id: response.data.deck_id });
  }
  
  async drawCard() {
    try {
      const url = `${API_BASE_URL}/${this.state.id}/draw/`;
      const response = await axios.get(url);
      
      if(!response.data.success) {
        throw new Error('No card left to draw. Please refresh the page.');
      }
  
      this.setState({ 
        cards: [ ...this.state.cards, { imgUrl: response.data.cards[0].image }],
        remaining: response.data.remaining 
      })
    } catch(err) {
      alert(err);
    }
  }

  render() {
    return (
      <div className="Table">
        <h1>{this.state.remaining}</h1>
        <button onClick={this.drawCard}>Draw</button>
        <div>
          {this.state.cards.map(card => <Card src={card.imgUrl}/>)} 
        </div>
      </div>
    )
  }
}