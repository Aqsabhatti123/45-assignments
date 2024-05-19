let guest_list : string []= ['ifrah','hooriya','ahson','rida','zubida'];
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nwe invited you on dinner tomorrow. \nThank you\n')
}
let not_present : string = 'ahson';
let new_guest : string = 'umair';
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n')
}
console.log(`Mr. ${not_present} will not coming tomorrow dinner.`)