let guest_list : string []= ['ifrah','hooriya','ahson','rida','zubida'];
//for(let i=0; i<guest_list.length; i++){
  //  console.log('Respected Sir/Madam ' + guest_list[i] + ',\nwe invited you on dinner tomorrow. \nThank you\n')
// }
let not_present : string = 'ahson';
let new_guest : string = 'umair';
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n')
}
guest_list.unshift('liza','shan e zehera', ' aatika');
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.we found big table so we decided to invite 3 more guest\nThank you\n')
}
