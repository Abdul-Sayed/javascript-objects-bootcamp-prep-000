var playlist;

playlist = { 'Sabrina Sorento': 'Boys boys boys' };

function updatePlaylist( playlist, artistName, songTitle ) {
    return Object.assign( playlist, {artistName: songTitle} );
}

function removeFromPlaylist( playlist, artistName ) {
    delete playlist[key]
    return playlist
}