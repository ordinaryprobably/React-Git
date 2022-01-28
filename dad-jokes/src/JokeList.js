import React, { Component } from 'react';
import axios from 'axios';
import Joke from './Joke';
import './JokeList.css';

const API_ENDPOINT = 'https://icanhazdadjoke.com/';

export default class JokeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokeList: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
      isLoading: true,
    };

    this.updateVotes = this.updateVotes.bind(this);
    this.requestJokes = this.requestJokes.bind(this);
    this.requestNewJokes = this.requestNewJokes.bind(this);
  }

  async componentDidMount() {
    if(this.state.jokeList.length === 0) {
      this.requestJokes();
    } else {
      this.setState({ isLoading: false })
    }
  }

  async requestJokes() {
    const jokes = [];

    for(let i = 0; i < this.props.jokesNum; i++) {
      try {
        const { data } = await axios.get(API_ENDPOINT, {
          headers: {
            accept: 'application/json'
          }
        });

        if(data.status !== 200) throw new Error('API connection is unstable.');
  
        jokes.push({ joke: data.joke, id: data.id, vote: 0 });
      } catch(err) {
        alert(err);
      }
    }

    this.setState(
      { jokeList: jokes, isLoading: false },
      () => window.localStorage.setItem('jokes', JSON.stringify(jokes))
    );
  }
  
  requestNewJokes() {
    window.localStorage.removeItem('jokes');
    this.setState({ isLoading: true }, this.requestJokes);
  }

  updateVotes(id, condition) {
    const updatedList = this.state.jokeList.map(joke => {
      if(joke.id === id) {
        if(condition === 'add') {
          return { ...joke, vote: joke.vote + 1 };
        } else if(condition === 'sub') {
          return { ...joke, vote: joke.vote - 1 };
        }
      } else {
        return joke;
      }
    })

    updatedList.sort((a, b) => b.vote - a.vote);

    this.setState(
      { jokeList: updatedList }, 
      () => window.localStorage.setItem('jokes', JSON.stringify(updatedList))
    );
  }

  render() {
    if(this.state.isLoading) {
      return (
        <h1>
          now loading...
        </h1>
      )
    }
    
    return (
      <div className="JokeList">
        <h1>Dad jokes!</h1>
        <button onClick={this.requestNewJokes}>Retrieve New Jokes!</button>
        <ul>
          {this.state.jokeList.map(joke => 
            <Joke 
              joke={joke.joke} 
              key={joke.id}
              id={joke.id} 
              vote={joke.vote}
              updateVote={this.updateVotes}
            />
            )}
        </ul>
      </div>
    )
  }
}