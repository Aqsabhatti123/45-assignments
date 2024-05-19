var guest_list = ['ifrah', 'hooriya', 'ahson', 'rida', 'zubida'];
//for(let i=0; i<guest_list.length; i++){
//  console.log('Respected Sir/Madam ' + guest_list[i] + ',\nwe invited you on dinner tomorrow. \nThank you\n')
// }
var not_present = 'ahson';
var new_guest = 'umair';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n');
}
guest_list.unshift('liza', 'shan e zehera', ' aatika');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.we found big table so we decided to invite 3 more guest\nThank you\n');
}
