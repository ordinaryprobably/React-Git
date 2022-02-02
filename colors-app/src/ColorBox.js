import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import './ColorBox.css';

export default class ColorBox extends Component {
  render() {
    const { background, name } = this.props;

    return (
      <CopyToClipboard text={background}>
        <div className="ColorBox" style={{ backgroundColor: background }}>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">copy</button>
          </div>
          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    )
  }
}