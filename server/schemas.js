'use strict';

const UserSchema = {
    name: 'User',
    properties: {
        id: 'string',
        name: 'string',
        email: 'string',
        accessToken: 'string',
        clickedAlbums: { type: 'list', objectType: 'Album' }
    }
};

const AlbumSchema = {
    name: 'Album',
    properties: {
        name: 'string',
        artist: 'string',
        url: 'string',
        playCount: 'int'
    }
};

module.exports = [
    UserSchema,
    AlbumSchema
];