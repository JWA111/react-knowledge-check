import React, { Component } from 'react';
import YouTube from 'react-youtube';

import './Content.css';

export default class Content extends Component {
    render = () => {
        if (this.props.type === 'youtube') {
            return (
                <YouTube
                    videoId={this.props.options.videoId}
                    opts={this.props.options.playerOptions}
                />
            );
        } else if (this.props.type === 'image') {
            return <img className="content-image" src={this.props.options.imageSrc} alt="Quiz Content" />
        } else {
            return null;
        }
    }
} 
