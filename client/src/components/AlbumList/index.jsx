import React from 'react';
import Album from '../Album';
import './AlbumList.css';

const AlbumList = ({ albums }) => (
    <div className="AlbumList">
        {albums.length > 0 &&
            albums.map(album => <Album album={album} key={album.mbid} />)}
    </div>
);

export default AlbumList;