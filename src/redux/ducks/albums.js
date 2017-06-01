import LastFMApi from '../../lib/lastfm';

export const FETCH_TOP_ALBUMS = 'moosic/albums/FETCH_TOP_ALBUMS';
export const FETCH_TOP_ALBUMS_SUCCESS = 'moosic/albums/FETCH_TOP_ALBUMS_SUCCESS';
export const FETCH_TOP_ALBUMS_FAILURE = 'moosic/albums/FETCH_TOP_ALBUMS_FAILURE';

export const fetchTopAlbums = () => ({ type: FETCH_TOP_ALBUMS });
export const fetchTopAlbumsSuccess = payload => ({
    type: FETCH_TOP_ALBUMS_SUCCESS, payload
});
export const fetchTopAlbumsFailure = error => ({
    type: FETCH_TOP_ALBUMS_FAILURE, error
});

const initialState = {
    items: [],
    isFetching: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TOP_ALBUMS:
            return { ...state, isFetching: true };
        case FETCH_TOP_ALBUMS_SUCCESS:
            return { ...state, isFetching: false, items: action.payload };
        case FETCH_TOP_ALBUMS_FAILURE:
            return { ...state, isFetching: false };
        default:
            return state;
    }
};

export const fetchAlbums = () => (dispatch, getState) => {
    
    dispatch(fetchTopAlbums());

    LastFMApi.getWorldTopArtists()
        .then(response => {
            const { artist: artists } = response.artists;
            const albumRequests = artists.map(LastFMApi.getTopAlbumByArtist);
            return Promise.all(albumRequests);
        })
        .then(response => {
            const albums = response.map(item => item.topalbums.album[0]).concat();
            return dispatch(fetchTopAlbumsSuccess(albums));
        })
        .catch(error => dispatch(fetchTopAlbums(error)));

};