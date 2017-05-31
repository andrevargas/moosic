import React from 'react';
import './Album.css';

const Album = ({ album }) => (
    <div className="Album">
        <div
            className="Album__image"
            style={{ backgroundImage: `url(${album.image[3]['#text']})` }}
        />
        <div className="Album__info">
            <h4 className="Album__title">{album.name}</h4>
            <span className="Album__subtitle">{album.artist.name}</span>
        </div>
    </div>
);

export default Album;