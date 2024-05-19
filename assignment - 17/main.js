var guest_list = ['ifrah', 'hooriya', 'ahson', 'rida', 'zubida'];
//for(let i=0; i<guest_list.length; i++){
//  console.log('Respected Sir/Madam ' + guest_list[i] + ',\nwe invited you on dinner tomorrow. \nThank you\n')
// }
var not_present = 'ahson';
var new_guest = 'umair';
guest_list[2] = new_guest;
// for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n')
// }
guest_list.unshift('liza', 'shan e zehera', ' aatika');
// for(let i=0; i<guest_list.length; i++){
// console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.we found big table so we decided to invite 3 more guest\nThank you\n')
// }
console.log('\nUnfortunately we can not arrage big table , only two people allow');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam.".concat(remove_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nYes you are still invited on tomorrow dinner\nThank YOU\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
