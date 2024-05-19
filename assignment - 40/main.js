"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Callingthree function and creating 3 varaiblrs with three different values
let album1 = make_album("Artist", "Album title 1");
let album2 = make_album("Aqsa", "Album title 2");
// calling a make_album funtion with third parameter
let album3 = make_album("Rimsha", "Album title 3", 12);
//print the values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
