var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Store the locations in a array. Make sure the array is not in alphabetical order.
var places = ['Defence', 'Clifton', 'Gulshan', 'Saddar'];
// Print your array in its original order.
console.log('Orignal' + places);
// Print your array in alphabetical order without modifying the actual list.
// array ki copy bna rhen hen ... in dots se
console.log('Copy' + __spreadArray([], places, true).sort());
// Show that your array is still in its original order by printing it.
console.log('Orignal' + places);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Copy' + __spreadArray([], places, true).sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log('Orignal' + places);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log('Orignal' + [places].reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order
console.log('Orignal' + [places].reverse());
console.log('Orignal' + places.sort());
console.log('Orignal' + [places].sort().reverse());
