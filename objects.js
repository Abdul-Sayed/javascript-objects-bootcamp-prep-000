var playlist;

playlist = { 'Sabrina Sorento': 'Boys boys boys' };

function updatePlaylist( playlist, key, value ) {
    return Object.assign( playlist, {key: value} );
}

function removeFromPlaylist( playlist, key ) {
    delete playlist[key]
    return playlist
}