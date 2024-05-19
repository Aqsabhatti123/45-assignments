"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// create a variable called allien_colour
let allien_colour = "green";
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//  print a message that the player just earned 5 points.
if (allien_colour == "green") {
    console.log("the player just earned 5 points.");
}
// Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// (The version that fails will have no output.)
allien_colour = "red";
if (allien_colour == "green") {
    console.log("the player just earned 5 points.");
}
