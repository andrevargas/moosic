import React from 'react';
import Album from '../Album';
import Loading from '../Loading';
import './AlbumList.css';

const AlbumList = ({ albums, isFetching }) => (
    <div className="AlbumList">
        {albums.length > 0 &&
            albums.map(album => <Album album={album} key={album.mbid} />)}
        <Loading visible={isFetching} />
    </div>
);

export default AlbumList;