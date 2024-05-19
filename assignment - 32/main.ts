let current_uers: string[] = ['Arsalan','Baber','Daoud','Kumal','Wajahat'];

let new_users: string[] = ['Arsalan','Talha','Hamdan','Baber','Wajahat'];

for(let new_username of new_users) {
    if(current_uers.includes(new_username)) {
        console.log(`The username '${new_username}'is not available.Please enter a new username.`);
    } else {
        console.log(`The username '${new_username}' is available.`);
    }
}