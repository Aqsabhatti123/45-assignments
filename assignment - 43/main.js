"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Harry Houndi", "Derren Brown", "Dynamo"];
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach((magician) => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
let greatMagicians = make_great(magicians.slice()); //Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // modified names
