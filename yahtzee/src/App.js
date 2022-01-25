import React, { Component } from 'react';
import GithubUserInfo from './GithubUserInfo';
import Timer from './Timer';
import ZenQuote from './ZenQuote';

export default class App extends Component {
  render() {
    return (
      <div>
        <Timer />
        <ZenQuote />
        <GithubUserInfo username="colt" />
        <GithubUserInfo username="ordinaryprobably" />
      </div>
    )
  }
}