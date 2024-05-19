"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", message = "I Love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Full Stack Developer");
