var guest_list = ['ifrah', 'hooriya', 'ahson', 'rida', 'zubida'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nwe invited you on dinner tomorrow. \nThank you\n');
}
var not_present = 'ahson';
var new_guest = 'umair';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n');
}
console.log("Mr. ".concat(not_present, " will not coming tomorrow dinner."));
