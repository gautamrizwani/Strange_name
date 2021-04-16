import React from 'react';
import YouTube from 'react-youtube';

class Example extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };

    return <center><YouTube videoId="KnmZ8oh3IqU" opts={opts} onReady={this._onReady} /></center>;
  }

  _onReady(event) {
    event.target.playVideo();
  }
}

export default Example;