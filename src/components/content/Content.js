import React from 'react';
import YouTube from 'react-youtube';

import './Content.css';

export let Content = (props) => {
    if (props.type === 'youtube') {
        return (
            <YouTube
                videoId={props.options.videoId}
                opts={props.options.playerOptions}
            />
        );
    } else if (props.type === 'image') {
        return <img className="content-image" src={props.options.imageSrc} alt="Quiz Content" />
    } else {
        return null;
    }
};
