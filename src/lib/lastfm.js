import querystring from 'querystring';
import { LASTFM_REQUEST_URL } from '../config';

export default class LastFMApi {

    static getWorldTopArtists() {
        
        const options = {
            method: 'chart.getTopArtists',
            limit: 10
        };

        const artistsUrl = `${LASTFM_REQUEST_URL}&${
            querystring.stringify(options)
        }`;

        return fetch(artistsUrl)
            .then(response => response.json());

    }

    static getTopAlbumByArtist({ name }) {

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

};