var playlist;

playlist = { 'Sabrina Sorento': 'Boys boys boys' };

function updatePlaylist( playlist, artistName, songTitle ) {
    // return Object.assign( playlist, {artistName: songTitle} );
    playlist[artistName] = songTitle;
    return playlist;
}

function removeFromPlaylist( playlist, artistName ) {
    delete playlist[artistName];
    return playlist;
}