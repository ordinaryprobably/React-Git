import React, { Component } from 'react';
import axios from 'axios';

export default class GithubUserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = { imgUrl: '', name: '' };
  }

  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    const response = await axios.get(url);
    const data = response.data;

    this.setState({ imgUrl: data.avatar_url, name: data.name })
  }

  render() {
    return(
      <div>
        <h1>{this.state.name}</h1>
        <img src={this.state.imgUrl} width={100} height={100}/>
      </div>
    )
  }
}