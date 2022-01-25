import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = { time: new Date() };
  }

  componentDidMount() {
    const timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    return <h1>{this.state.time.getSeconds()}</h1>
  }
}