const {
    getTopAlbumByArtist,
    getWorldTopArtists
} = require('./lastfm');

function loadStartupData(realmInstance) {
    
    if (realmInstance.objects('Album').length > 0) return;

    getWorldTopArtists()
        .then(response => {
            const { artist: artists } = response.artists;
            const albumRequests = artists.map(getTopAlbumByArtist);
            return Promise.all(albumRequests);
        })
        .then(response => {
            const albums = response.map(item => item.topalbums.album[0]).concat();
            realmInstance.write(() => 
                albums.forEach(item =>
                    realmInstance.create('Album', {
                        name: item.name,
                        artist: item.artist.name,
                        url: item.url,
                        playCount: item.playcount,
                        imageUrl: item.image[3]['#text']
                    })
                )
            );
        });

}

module.exports = {
    loadStartupData
};