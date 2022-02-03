import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import './ColorBox.css';

export default class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false,
    };

    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState(
      { copied: true }, 
      () => {
        setTimeout(() => this.setState({ copied: false }), 1000);
      })
  }

  render() {
    const { background, name, urlToSingleColorPalette, showLink } = this.props;
    const { copied } = this.state;
    const isTooDark = chroma(background).luminance() <= 0.08;
    const isTooLight = chroma(background).luminance() >= 0.8;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ backgroundColor: background }}>
          <div className={`copy-overlay ${copied && 'show'}`} style={{ backgroundColor: background }}/>
          <div className={`copy-message ${copied && 'show'}`}>
            <h1 className={isTooLight && 'dark-text'}>copied!</h1>
            <p className={isTooLight && 'dark-text'}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isTooDark && 'light-text'}>{name}</span>
            </div>
            <button className="copy-button">copy</button>
          </div>
          {showLink && 
            <Link to={urlToSingleColorPalette} onClick={e => e.stopPropagation()}>
              <span className={`see-more ${isTooLight && 'dark-text'}`}>More</span>
            </Link>
          }
        </div>
      </CopyToClipboard>
    )
  }
}