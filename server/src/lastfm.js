const fetch = require('node-fetch');
const querystring = require('querystring');
const { LASTFM_REQUEST_URL } = require('./config');

function getWorldTopArtists() {

    const options = {
        method: 'chart.getTopArtists',
        limit: 50
    };

    const artistsUrl = `${LASTFM_REQUEST_URL}&${
        querystring.stringify(options)
    }`;

    return fetch(artistsUrl)
        .then(response => response.json());

}

function getTopAlbumByArtist({ name }) {

    const options = {
        method: 'artist.getTopAlbums',
        artist: name,
        limit: 1
    };

    const albumsUrl = `${LASTFM_REQUEST_URL}&${
        querystring.stringify(options)
    }`;

    return fetch(albumsUrl)
        .then(response => response.json());
            
}

module.exports = {
    getWorldTopArtists,
    getTopAlbumByArtist
};