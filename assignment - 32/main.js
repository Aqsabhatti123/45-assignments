"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_uers = ['Arsalan', 'Baber', 'Daoud', 'Kumal', 'Wajahat'];
let new_users = ['Arsalan', 'Talha', 'Hamdan', 'Baber', 'Wajahat'];
for (let new_username of new_users) {
    if (current_uers.includes(new_username)) {
        console.log(`The username '${new_username}'is not available.Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_username}' is available.`);
    }
}
